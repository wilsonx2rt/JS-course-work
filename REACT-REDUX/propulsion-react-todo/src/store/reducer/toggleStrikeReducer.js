import { TOGGLE_STRIKE } from '../actions/types'

const initialState = {
    todos: [],
    filter: 'all'
}

const toggleStrike = (state = initialState, action) => {
  const newState = { ...initialState };
  if (action.type === TOGGLE_STRIKE) {
    const toggoledTodo 
  }
}