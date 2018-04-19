import { ADD_TODO } from '../actions/types';


const initialState = {
  todos: [],
  filter: 'all'
}

const addTodo = (state = initialState, action) => {
  const newState = { ...initialState }
  if (action.type === ADD_TODO) {
    const newArray = newState.todos.slice();
    newArray.push(action.payload);
    newState.todos = newArray
    return newState;
  } else {
    return newState;
  }
}

export default addTodo;