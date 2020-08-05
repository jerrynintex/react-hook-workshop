import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { Store } from '../todoContext'
import React, { useContext } from 'react'

const FilterLink = (props) => {
  const { state, dispatch } = useContext(Store);
  console.log('Render FilterLink');
  return (
    <Link 
      active={props.filter === state.visibilityFilter}
      onClick={() => dispatch(setVisibilityFilter(props.filter))}
      {...props}
    />
  );
}

export default FilterLink;