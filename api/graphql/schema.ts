const { gql } = require('apollo-server-azure-functions')

const schema = gql`
  scalar DateTime

  type Todo {
    id: ID!
    title: String
    completed: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input TodoInput {
    title: String
    completed: Boolean
  }

  type Query {
    todos: [Todo]
    todo(id: String!): Todo
  }

  type Mutation {
    upsertTodo(id: String, input: TodoInput!): Todo
  }
`

export default schema
