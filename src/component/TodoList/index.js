import { connect } from 'react-redux';

import TodoList from './TodoList';

const mapStateToProps = (state) => {
	return {
		todoItems: state.todoList.items,
	}
}

export default connect(mapStateToProps,null)(TodoList);
