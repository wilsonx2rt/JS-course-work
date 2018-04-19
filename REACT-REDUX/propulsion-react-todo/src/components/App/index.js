import React, { Component } from 'react';
import './index.css';
import Header from '../Header';
import TodoItemForm from '../TodoInputForm';
import TodoItemList from '../TodoItemList';
import Filter from '../Filter';
import Quote from '../Quote';
import Footer from '../Footer';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [],
      filter: 'all',
    }
  }

  toggleTodoStatus = (id) => {
    let todoItems = [...this.state.todoItems];
    let status = todoItems[id].status;
    let strike = todoItems[id].strike;
    status === 'pending' ? status = 'completed' : status = 'pending';
    strike === 'no-strike' ? strike = 'strike' : strike = 'no-strike';
    todoItems.map((item) => {
      todoItems.indexOf(item) === id ? item.status = status : null;
      todoItems.indexOf(item) === id ? item.strike = strike : null;
    });
    this.setState({
      todoItems,
    });
  }

  handleFilterChange = (e) => {
    let targetValue = e.target.value;
    let filter = this.state.filter;
    if (targetValue === 'all') {
      filter = 'all';
    } else if (targetValue === 'pending') {
      filter = 'pending';
    } else if (targetValue === 'completed'){
      filter = 'completed';
    }
    this.setState({
      filter,
    });
  }

  filteredTodos = () => {
    if (this.state.filter === 'all') {
      return this.state.todoItems;
    } else if ( this.state.filter === 'pending') {
      return this.state.todoItems.filter((todo) => todo.status === 'pending')
    } else if (this.state.filter === 'completed') {
      return this.state.todoItems.filter((todo) => todo.status === 'completed')
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
          addTodoItems={ this.addTodoItems }
        />
        <Filter
          handleFilterChange = { this.handleFilterChange }
        />
        <TodoItemList
          todos={ this.props.todos }
          strike={ this.strike }
          removeTodoItems={ this.removeTodoItems }
          toggleTodoStatus = { this.toggleTodoStatus }
        />
        <Quote />
        <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.addTodo.todos,
});

export default connect(mapStateToProps)(App);
