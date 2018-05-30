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
          console.log(todo);
          return <TodoItem
            key={ index }
            id={ index } 
            todo={ todo.todo }
            status={ todo.status }
            strike={ todo.strike }
            removeTodoItems={this.props.removeTodoItems}
            toggleTodoStatus ={ this.props.toggleTodoStatus }
          />
          }
        )}
      </ul>
      </div>
    )
  }
}

export default TodoItemList;