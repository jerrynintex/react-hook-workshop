import { createContext } from 'react'
import {
  createStoreHook,
  createDispatchHook,
  createSelectorHook
} from 'react-redux'

export const TodoContext = createContext(null);
export const useTodoStore = createStoreHook(TodoContext);
export const useTodoDispatch = createDispatchHook(TodoContext);
export const useTodoSelector = createSelectorHook(TodoContext);

