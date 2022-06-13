import { GraphQLString } from 'graphql';
import { Locations, LocationModel } from '../../entities/Location';

const location = {
  type: Locations,
  args: {
    zipcode: { type: GraphQLString },
  },

  resolve: ({ zipcode }: { zipcode: string }) => LocationModel.find({ zipcode })
};

export default location;
