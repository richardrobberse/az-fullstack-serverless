import { v4 as uuidv4 } from 'uuid'
import { Todo, TodoInput } from '../generated/graphql'

export class InMemoryDatabase {
  private static instance: InMemoryDatabase
  private todos: Todo[] = []

  constructor() {
    if (InMemoryDatabase.instance) {
      return InMemoryDatabase.instance
    }

    InMemoryDatabase.instance = this
    this.seedData()

    return this
  }

  public getTodos() {
    return this.todos
  }

  public getTodo(id: string) {
    return this.todos.find(todo => todo.id === id)
  }

  public createTodo(input: TodoInput) {
    const now = new Date().toISOString()

    const todo = {
      id: uuidv4(),
      ...input,
      createdAt: now,
      updatedAt: now,
      completed: false,
    } as Todo

    this.todos.push(todo)

    return todo
  }

  public updateTodo(id: string, input: Partial<Todo>) {
    const now = new Date().toISOString()
    const todo = {
      ...this.getTodo(id),
      ...input,
      updatedAt: now,
    } as Todo

    this.todos = this.todos.filter(todo => todo.id !== id).concat([todo])

    return todo
  }

  public deleteTodo(id: string) {
    const todo = this.getTodo(id)
    this.todos = this.todos.filter(todo => todo.id !== id)

    return todo
  }

  private seedData() {
    const createdAt = '2021-02-11T20:25:00.000Z'

    this.todos.push(
      {
        id: uuidv4(),
        title: 'Create in memory database',
        completed: true,
        createdAt,
        updatedAt: createdAt,
      },
      {
        id: uuidv4(),
        title: 'Create queries and mutations',
        completed: true,
        createdAt,
        updatedAt: createdAt,
      }
    )
  }
}
