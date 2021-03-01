import { InMemoryDatabase } from '../../lib/inMemoryDatabase'
import { Todo } from '../../models/todo'

interface TodoInput {
  title: string
  completed: boolean
}

export default async (_: object, { input }: { id: string; input: TodoInput }, context: any): Promise<Todo> => {
  const db = new InMemoryDatabase()
  return db.createTodo(input)
}
