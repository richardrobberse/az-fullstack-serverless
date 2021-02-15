import { Todo } from '../../models/todo'

interface TodoInput {
  title: string
  completed: boolean
}

export default async (_: object, { id, input }: { id: string; input: TodoInput }, context: any): Promise<Todo> => {
  const entityId = id || Math.floor(Math.random() * 1000).toString()

  return {
    ...input,
    id: entityId,
    createdAt: new Date().toUTCString(),
    updatedAt: new Date().toUTCString(),
  }
}
