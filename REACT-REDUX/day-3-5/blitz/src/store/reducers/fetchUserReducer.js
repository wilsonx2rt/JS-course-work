// ACTIONS
import { FETCH_TOKENS } from '../actions/actionTypes';

const initialState = {
  tokens: {
    access: '',
    refresh: ''
  }
}

const fetchTokensReducer = (state = initialState, action) => {
  if (action.type === FETCH_TOKENS) {
    localStorage.setItem('tokens', JSON.stringify(action.payload));
    const newState = {...state};
    const tokens = {
      access: action.payload.access,
      refesh: action.payload.refresh
    };
    console.log(tokens.access);
    console.log(tokens.refesh);
    newState.tokens = tokens;
    return newState;
  } else {
    return state;
  }
}

export default fetchTokensReducer;