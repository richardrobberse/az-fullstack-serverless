import { InMemoryDatabase } from '../../lib/inMemoryDatabase'
import { Todo } from '../../models/todo'

export default async (_: object, {}, context: any): Promise<Array<Todo>> => {
  const db = new InMemoryDatabase()
  const ordered = db.getTodos().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  return ordered
}
