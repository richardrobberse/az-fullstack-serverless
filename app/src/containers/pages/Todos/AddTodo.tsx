import React, { useCallback, useState } from 'react'
import { TodoInput, useCreateTodoMutation } from 'graphql/generated/graphql'

interface AddTodoProps {
  style?: React.CSSProperties
}

const AddTodo: React.FC<AddTodoProps> = ({ style = {} }) => {
  const [upsertTodo, { loading: upsertTodoLoading, error: upsertTodoError }] = useCreateTodoMutation()
  const [data, setData] = useState<TodoInput>({ title: '' })

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      upsertTodo({
        variables: {
          input: {
            ...data,
          },
        },
        refetchQueries: ['GetTodos'], // Can be optimized by using cache.modify instead.
        awaitRefetchQueries: true,
      }).then(result => {
        !result.errors && setData({ title: '' })
      })
    },
    [data]
  )

  return (
    <div style={{ ...style }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
          <input
            style={{ flexGrow: 1, height: 19 }}
            type="text"
            placeholder="What do you have to do?"
            value={data.title}
            onChange={event =>
              setData(prev => ({
                ...prev,
                title: event.target.value,
              }))
            }
          />
          <input type="submit" value="Save" disabled={upsertTodoLoading} />
        </div>
      </form>
    </div>
  )
}

export default AddTodo
