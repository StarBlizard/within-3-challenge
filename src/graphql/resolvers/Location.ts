import { Query, Arg } from 'type-graphql';

import { Location } from '../schema/Location';
import { LocationModel } from '../../entities/Location';

export class LocationResolver {
  @Query(() => Location, { nullable: true })
  async getLocationByZipcode(
    @Arg('zipcode') zipcode: string
  ): Promise<Location> {
    const location = await LocationModel.findOne({ zipcode }).exec();

    if (location) { return location; }

    throw new Error('Not Found');
  }
}
