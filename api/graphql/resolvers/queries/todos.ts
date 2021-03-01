import { InMemoryDatabase } from '../../lib/inMemoryDatabase'
import { Todo } from '../../models/todo'

const sortFn = (a: Todo, b: Todo) => {
  if (b.completed && !a.completed) return -1

  if ((b.completed && a.completed) || (!a.completed && !b.completed)) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  }

  return 0
}

export default async (_: object, {}, context: any): Promise<Array<Todo>> => {
  const db = new InMemoryDatabase()
  return db.getTodos().sort(sortFn)
}
