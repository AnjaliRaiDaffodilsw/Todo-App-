import React, { Component } from 'react';

import TodoList from './TodoList/index';
import TodoListHeader from './TodoListHeader';
import AddTodo from './AddTodo';

class Todo extends Component {
	render() {
		return (
			<div>
				<TodoListHeader />
				<AddTodo
					placeholderValue="Add To do" />
				<TodoList />
			</div>
		)
	}
}

export default Todo;
