import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import connect from '../connect.'
import { Store } from '../todoContext'
import React from 'react'

const FilterLink = (props) => {
  console.log('Render FilterLink');
  return (
    <Link 
      {...props}
    />
  );
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  Store
)(FilterLink)
