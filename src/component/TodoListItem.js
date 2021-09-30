import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../assets/styles/TodoListItem.css';
import { deleteTodo, editTodo } from '../redux/actions/todoListActions';

export class TodoListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputText: this.props.itemText,
      onSave: false
    }
  }
  render() {
    const { id, itemText } = this.props
    return (
      <div className="list">
        {
          this.state.onSave ?
            <button className="editable-button">
              <input
                id={id}
                type="text"
                value={this.state.inputText}
                onChange={(event) => {
                  this.setState({
                    inputText: event.target.value,
                  });
                }}
                autoComplete="off"
                className="input-field"
              />
            </button>
            : <button
              className="editable-button"
              onClick={() => this.setState({
                onSave: !this.state.onSave
              })}>
              <p className="non-editable-input">{itemText}</p>
            </button>
        }
        <div className="buttons-container">
          {
            this.state.onSave
            &&
            <button
              onClick={() => this.setState({
                onSave: !this.state.onSave
              },
                () => this.props.dispatch(editTodo({
                  key: id,
                  text: this.state.inputText
                })))
              }
              className="save-button">
              Save
              </button>
          }
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => this.props.dispatch(deleteTodo(id))} />
          </span>
        </div>
      </div >
    )
  }
}

TodoListItem.propTypes = {
  itemText: PropTypes.string,
  id: PropTypes.number,
  dispatch: PropTypes.func,
};

export default connect()(TodoListItem);
