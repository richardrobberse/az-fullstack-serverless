import { ApolloServer, gql } from 'apollo-server-azure-functions'
import mutations from './resolvers/mutations'
import queries from './resolvers/queries'
import fields from './resolvers/fields'
import * as fs from 'fs'
import * as path from 'path'

const typeDefs = gql(fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'))

const resolvers = {
  Query: queries,
  Mutation: mutations,
  ...fields,
}

interface HttpRequest {
  headers: {
    [key: string]: string
  }
}

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers,
  playground: process.env.NODE_ENV === 'development',
  context: async ({ request }: { request: HttpRequest }) => {
    return {}
  },
})

export default server.createHandler()
