import React from 'react';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';


class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classStrike: '',
    }
  }

  checkTodoItem = () => {
    let classStrike = this.state.classStrike;
    if(this.state.classStrike === 'strike-through') {
      classStrike ='';
      this.setState({
        classStrike,
      });
    } else {
      classStrike ='strike-through';
      this.setState({
        classStrike,
      });
    }
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
        <span className={this.state.classStrike}>
          <li className="todo-list-item"> {this.props.todo}</li>
        </span>
      </div>
    )
  }
}

export default TodoItem;