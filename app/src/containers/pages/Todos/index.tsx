import React from 'react'

const wrapperStyles: React.CSSProperties = {}

interface TodosProps {}
const Todos: React.FC<TodosProps> = () => {
  return <div style={wrapperStyles}>Todos component</div>
}
export default Todos
