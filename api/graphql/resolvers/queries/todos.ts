import { Todo } from '../../models/todo'

export default async (_: object, {}, context: any): Promise<Array<Todo>> => {
  const todos = new Array<Todo>()

  todos.push(
    {
      id: '1',
      title: 'Create todos resolver',
      completed: true,
      createdAt: new Date(2021, 2, 1, 19, 5).toISOString(),
      updatedAt: new Date(2021, 2, 11, 20, 25).toISOString(),
    },
    {
      id: '2',
      title: 'Create upsertTodo mutation',
      completed: true,
      createdAt: new Date(2021, 2, 1, 19, 5).toISOString(),
      updatedAt: new Date(2021, 2, 11, 20, 25).toISOString(),
    }
  )

  return todos
}
