const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state, 
        todos: [
          ...(state.todos),
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state, 
        todos: state.todos.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      };
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state, 
        visibilityFilter: action.filter
      };
    default:
      return state
  }
}

export default reducer;


