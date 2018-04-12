import React, { Component } from 'react';
import './index.css';
import Header from '../Header';
import TodoItemForm from '../TodoInputForm';
import TodoItemList from '../TodoItemList';
import Filter from '../Filter';
import Footer from '../Footer';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [],
    }
  }

  addTodoItems = (e, item) => {
    e.preventDefault();
    const todoItems = [...this.state.todoItems, item];
    this.setState({
      todoItems,
    });
  }

  removeTodoItems = (index) => {
    let todos = this.state.todoItems;
    todos.pop(index);
    this.setState({
      todos,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="well">
        <Header 
          title="Propulsion's Todo-App"
        />
        <TodoItemForm 
          todos={ this.state.todoItems }
          addTodoItems={this.addTodoItems}
        />
        <Filter />
        <TodoItemList
          todos={ this.state.todoItems }
          removeTodoItems={this.removeTodoItems}
        />
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
