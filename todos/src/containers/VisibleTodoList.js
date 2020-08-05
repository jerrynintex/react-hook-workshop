import React from 'react'
import { useTodoSelector, useTodoDispatch } from '../todoContext'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

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

  const todos = useTodoSelector(state => state.todos);
  const visibilityFilter = useTodoSelector(state => state.visibilityFilter);
  const dispatch = useTodoDispatch()

  console.log('Render VisibleTodoList');

  return (
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      toggleTodo={id => dispatch(toggleTodo(id))}
      {...props}
    />
  )
}


export default VisibleTodoList