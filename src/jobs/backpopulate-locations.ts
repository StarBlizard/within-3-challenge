import yargs from 'yargs';
import mongoose from 'mongoose';
import { readFile } from 'node:fs/promises';

import { env } from '../utils/env';
import { LocationModel } from '../entities/location';


(async () => {
  const args = await yargs(process.argv.slice(2))
    .option('f', {
      alias: 'file',
      type: 'string',
      describe: 'Path to the csv file with the zipcodes',
    })
    .demandOption(['f'], 'Please provide a csv file with zipcodes')
    .help()
    .argv;

  const rawZip = String(await readFile(args.f));

  const locations = rawZip
    .split('\n')
    .map((location) => {
      const [zipcode,city,county] = location.split(',');

      return { zipcode, city, county };
    });

  //connect mongoose
  const db = await mongoose.connect(env.db);
  await db.connection;

  let created = 0;

  await Promise.all(locations.map(async (location) => {
    const exists = !!await LocationModel.exists(location);

    if (exists) { return; }

    created++;

    return LocationModel.create(location);
  }));

  return created;
})().catch(err => {
  console.log(err.stack);
  process.exit(1);
}).then((created) => {
  console.log(`${created} Rows created`);
  process.exit(0);
});
