import React from 'react';
import './index.css';
import TodoItem from '../TodoItem';

class TodoItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-item-list-wraper">
      <ul>
        {this.props.todos.map((todo, index) => {
          return <TodoItem
            key={ index }
            index={ index } 
            todo={ todo }
            removeTodoItems={this.props.removeTodoItems}
          />
          }
        )}
      </ul>
      </div>
    )
  }
}

export default TodoItemList;