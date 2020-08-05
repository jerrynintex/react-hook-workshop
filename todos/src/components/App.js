import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../reducers'
import { TodoContext } from '../todoContext'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const store = createStore(rootReducer)

const App = () => {
  console.log('Render App');
  return (
    <Provider context={TodoContext} store={store}>
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App
