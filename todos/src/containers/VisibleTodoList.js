import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
import { Store } from '../todoContext'
import React, { useContext } from 'react'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const VisibleTodoList = (props) => {
  const { state, dispatch } = useContext(Store);
  console.log('Render VisibleTodoList');
  return (
    <TodoList
      todos={getVisibleTodos(state.todos, state.visibilityFilter)}
      toggleTodo={id => dispatch(toggleTodo(id))}
      {...props}
    />
  )
}


export default VisibleTodoList