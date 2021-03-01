import React, { useCallback } from 'react'
import {
  GetTodosDocument,
  GetTodosQuery,
  Todo,
  useCompleteTodoMutation,
  useDeleteTodoMutation,
} from 'graphql/generated/graphql'

interface TodoItemProps {
  style?: React.CSSProperties
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ style = {}, todo }) => {
  const [completeTodo] = useCompleteTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()

  const handleCompleteClick = useCallback(
    (id: string) => {
      completeTodo({
        variables: {
          id,
        },
      })
    },
    [completeTodo]
  )

  const handleDeleteClick = useCallback(
    (id: string) => {
      deleteTodo({
        variables: {
          id,
        },
        update: (cache, { data }) => {
          const id = data?.deleteTodo.id
          if (!id) return

          const todosData = cache.readQuery<GetTodosQuery>({ query: GetTodosDocument })

          id &&
            cache.writeQuery({
              query: GetTodosDocument,
              data: {
                todos: [...todosData!.todos!.filter(x => x.id !== id)],
              },
            })
        },
      })
    },
    [deleteTodo]
  )

  return (
    <div style={{ border: '1px solid #333', marginBottom: 5, padding: 2, ...style }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
          <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.title}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            disabled={todo.completed}
            onClick={() => handleCompleteClick(todo.id)}
          />
          <input type="button" value="Delete" onClick={() => handleDeleteClick(todo.id)} />
        </div>
      </div>
    </div>
  )
}

export default TodoItem
