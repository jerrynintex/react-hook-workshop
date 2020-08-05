import React, { useRef } from 'react'
import { addTodo } from '../actions'
import connect from '../connect.'
import { Store } from '../todoContext'

const AddTodo = (props) => {
  const inputRef = useRef();
  console.log('Render AddTodo');

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!inputRef.current.value.trim()) {
          return
        }
        props.addTodo(inputRef.current.value);
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

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})

export default connect(
  null,
  mapDispatchToProps,
  Store
)(AddTodo);
