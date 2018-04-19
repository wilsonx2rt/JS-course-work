import { ADD_TODO } from './types';

const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export default addTodo;