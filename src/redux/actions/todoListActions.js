import {
  TODO_LIST,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from '../actionTypes/todoListActions';

export const todoList = () => ({
  type: TODO_LIST
})

export const addTodo = (items) => ({
  type: ADD_TODO,
  items,
  key: Math.random(),
})

export const deleteTodo = (key) => ({
  type: DELETE_TODO,
  key,
})

export const editTodo = (obj) => ({
  type: EDIT_TODO,
  payload: obj
})