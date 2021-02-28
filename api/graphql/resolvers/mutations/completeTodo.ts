import { InMemoryDatabase } from '../../lib/inMemoryDatabase'
import { Todo } from '../../models/todo'

export default async (_: object, { id }: { id: string }, context: any): Promise<Todo> => {
  const db = new InMemoryDatabase()
  return db.updateTodo(id, { completed: true })
}
