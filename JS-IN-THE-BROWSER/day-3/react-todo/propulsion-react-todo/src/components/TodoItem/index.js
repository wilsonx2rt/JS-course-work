import React from 'react';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';


class TodoItem extends React.Component {


  checkTodoItem = () => {
    this.props.toggleTodoStatus(this.props.id);
  }

  render() {
    return (
      <div className="todo-item-wrapper">
        <span className="fa fa-check-circle header-fa" 
          onClick={
            () => {
              this.checkTodoItem()
            }
        }>
        </span>
        <span className="fa fa-times-circle header-fa" 
          onClick={
            () => {
              this.props.removeTodoItems(this.props.index);
            }
        }>
        </span>
        <span className={this.props.strike}>
          <li className="todo-list-item"> {this.props.todo}</li>
        </span>
      </div>
    )
  }
}

export default TodoItem;