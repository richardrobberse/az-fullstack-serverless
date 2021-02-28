import React, { useCallback } from 'react'
import { Todo, useCompleteTodoMutation, useDeleteTodoMutation } from 'graphql/generated/graphql'

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
        refetchQueries: ['GetTodos'],
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
        refetchQueries: ['GetTodos'],
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
