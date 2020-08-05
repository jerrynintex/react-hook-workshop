import React from 'react'
import { Store, useStore } from '../todoContext'
import rootReducer from '../reducers'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => {
  const store = useStore(rootReducer)
  console.log('Render App');
  return (
    <Store.Provider value={store}>
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </Store.Provider>
  );
}

export default App
