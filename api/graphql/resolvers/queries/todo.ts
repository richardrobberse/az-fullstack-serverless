import { Todo } from '../../generated/graphql'
import { InMemoryDatabase } from '../../lib/inMemoryDatabase'

export default async (_: object, { id }: { id: string }, context: any): Promise<Todo> => {
  const db = new InMemoryDatabase()
  return db.getTodo(id)
}
