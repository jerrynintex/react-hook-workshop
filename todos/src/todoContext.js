import {createContext, useReducer} from 'react'
import { VisibilityFilters } from './actions'


const initialState = {
  todos: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL
}

export const Store = createContext({
  state: initialState,
  dispatch: () => {}
})

export function useStore(reducer) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return {
    state,
    dispatch
  }
}

