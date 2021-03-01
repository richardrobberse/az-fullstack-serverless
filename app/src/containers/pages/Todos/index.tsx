import { useGetTodosQuery } from 'graphql/generated/graphql'
import React from 'react'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'

interface TodosProps {}
const Todos: React.FC<TodosProps> = () => {
  const { data, loading, error } = useGetTodosQuery()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ minWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
        <h1>Todos</h1>
        <AddTodo style={{ marginBottom: 5 }} />
        <div className="todos">
          {loading && <h4>Loading...</h4>}
          {error && <h4>Error: {error}</h4>}
          {!loading && data?.todos?.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
      </div>
    </div>
  )
}
export default Todos
