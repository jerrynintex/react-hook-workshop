import React, { useContext, useRef } from 'react'
import { addTodo } from '../actions'
import { Store } from '../todoContext'

const AddTodo = () => {
  const inputRef = useRef();
  const { dispatch } = useContext(Store);
  console.log('Render AddTodo');

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputRef.current.value.trim()) {
          return
        }
        dispatch(addTodo(inputRef.current.value))
        inputRef.current.value = '';
      }}>
        <input ref={inputRef} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo;
