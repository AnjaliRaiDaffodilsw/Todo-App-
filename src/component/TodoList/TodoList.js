import React, { Component } from 'react'
import PropTypes from 'prop-types';

import TodoListItem from '../TodoListItem';

class TodoList extends Component {
  render() {
    const listItems = this.props.todoItems;
    return (
      <div>
        {listItems.map((item) => {
          return <TodoListItem
            key={item.key}
            id={item.key}
            itemText={item.text}
          />
        })}
      </div>
    )
  }
}

TodoList.propTypes = {
  todoItems: PropTypes.array,
  dispatch: PropTypes.func,
};

export default TodoList;
