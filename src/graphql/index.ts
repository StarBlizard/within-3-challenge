import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground, GraphQLRequestContext } from 'apollo-server-core';

import { LocationResolver } from './resolvers/Location';

const httpPlugin = {
  async requestDidStart() {
    return {
      async willSendResponse({ response }: GraphQLRequestContext) {
        if (response?.errors?.[0]?.message !== 'Not Found') { return; }

        response['http'] && (response['http']['status'] = 404);
      }
    };
  }
};

export const init = async () => {
  const schema = await buildSchema({
    emitSchemaFile: false,
    resolvers: [LocationResolver],
  });

  const server = new ApolloServer({
    schema,
    plugins: [ ApolloServerPluginLandingPageGraphQLPlayground, httpPlugin ],
  });

  return server;
};
