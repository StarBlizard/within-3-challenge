import { GraphQLObjectType } from 'graphql';

import location from './Location';

export default new GraphQLObjectType({
  name: 'Queries',
  fields: { location },
});
