import { ApolloServer } from 'apollo-server-azure-functions'
import mutations from './resolvers/mutations'
import queries from './resolvers/queries'
import fields from './resolvers/fields'
import schema from './schema'

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
  typeDefs: schema,
  resolvers,
  playground: process.env.NODE_ENV === 'development',
  context: async ({ request }: { request: HttpRequest }) => {
    return {}
  },
})

export default server.createHandler()
