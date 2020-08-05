import React from 'react'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { useTodoSelector, useTodoDispatch } from '../todoContext'


const FilterLink = (props) => {
  const active = useTodoSelector(state => props.filter === state.visibilityFilter);
  const dispatch = useTodoDispatch()
  console.log('Render FilterLink');

  return (
    <Link 
      active={active}
      onClick={() => dispatch(setVisibilityFilter(props.filter))}
      {...props}
    />
  );
}

export default FilterLink;