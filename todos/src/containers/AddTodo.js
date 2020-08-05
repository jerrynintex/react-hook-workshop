import React, { useRef } from 'react'
import { addTodo } from '../actions'
import { useTodoDispatch } from '../todoContext'

const AddTodo = () => {
  const inputRef = useRef();
  const dispatch = useTodoDispatch();
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
