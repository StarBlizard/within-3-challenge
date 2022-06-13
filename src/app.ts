import 'reflect-metadata';
import { connect } from 'mongoose';

import { init } from './graphql';
import { env } from './utils/env';

const app = async () => {
  const server = await init();

  const mongoose = await connect(env.db);
  await mongoose.connection;

  server.listen({ port: env.port }, () =>
    console.log(
      `🚀 Server ready and listening at ==> http://localhost:${env.port}${server.graphqlPath}`
    )
  );
};

app().catch((error) => {
  console.log(error, 'error');
});
