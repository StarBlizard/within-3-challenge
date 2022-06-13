import 'reflect-metadata';
import { connect } from 'mongoose';
import { GraphQLSchema } from 'graphql';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import { env } from './utils/env';
import query from './graphql/query';

const main = async () => {
  const schema = new GraphQLSchema({ query });

  const server = new ApolloServer({
    schema,
    plugins: [ ApolloServerPluginLandingPageGraphQLPlayground ],
  });

  const mongoose = await connect(env.db);
  await mongoose.connection;

  server.listen({ port: env.port }, () =>
    console.log(
      `🚀 Server ready and listening at ==> http://localhost:${env.port}${server.graphqlPath}`
    )
  );
};

main().catch((error) => {
  console.log(error, 'error');
});
