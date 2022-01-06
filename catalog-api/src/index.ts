import "reflect-metadata";
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { PostResolver } from './Recipe/resolver'
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const prisma = new PrismaClient()

async function main() {
  const schema = await buildSchema({
    resolvers: [PostResolver]
  })
  
  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
  })

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })