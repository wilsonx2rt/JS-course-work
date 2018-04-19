// ACTIONS
import { FETCH_CURRENT_USER } from '../actions/actionTypes';

const initialState = {
  currentUser: {
    firstName: '',
    LastName: ''
  }
}

const fetchCurrentUserReducer = (state = initialState, action) => {
  const newState = {...state};
  if (action.type === FETCH_CURRENT_USER) {
    newState.firstName = action.p
  }
}

export default fetchTokensReducer;