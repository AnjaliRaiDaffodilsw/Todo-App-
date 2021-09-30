import {
  TODO_LIST,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../actionTypes/todoListActions";

export const todoListInitialState = {
  items: [
    { text: 'Learn JavaScript', key: 1 },
    { text: 'Learn React', key: 2 },
    { text: 'Play around in JS', key: 3 },
    { text: 'Build something Great', key: 4 }
  ],
}

export const todoList = (state = todoListInitialState, action) => {
  switch (action.type) {
    case TODO_LIST: {
      return {
        ...state,
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        items: [...state.items, { text: action.items, key: action.key }],
      }
    }
    case DELETE_TODO: {
      const filteredItem = state.items.filter((item) => item.key !== action.key)
      return {
        ...state,
        items: filteredItem
      }
    }
    case EDIT_TODO: {
      const updateItem = state.items.map((item) =>
        item.key !== action.payload.key ? item : action.payload
      );
      return {
        ...state,
        items: updateItem,
      };
    }
    default:
      return state;
  }
}

