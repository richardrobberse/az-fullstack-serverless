import { Todo } from '../../models/todo'

export default async (_: object, { id }: { id: string }, context: any): Promise<Todo> => {
  return {
    id: id,
    title: 'Create todos resolver',
    completed: true,
    createdAt: new Date(2021, 2, 1, 19, 5).toISOString(),
    updatedAt: new Date(2021, 2, 11, 20, 25).toISOString(),
  }
}
