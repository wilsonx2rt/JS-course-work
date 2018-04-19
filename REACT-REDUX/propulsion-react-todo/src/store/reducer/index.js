import { combineReducers } from 'redux';
import addTodo from './addTodosReducer';

const todoApp = combineReducers({
  addTodo,
});

export default todoApp;