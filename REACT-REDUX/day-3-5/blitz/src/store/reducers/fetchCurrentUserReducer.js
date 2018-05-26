// ACTIONS
import { FETCH_CURRENT_USER } from '../actions/actionTypes';

const initialState = {
  currentUser: {
    firstName: '',
    lastName: ''
  }
}

const fetchCurrentUserReducer = (state = initialState, action) => {
  const newState = {...state};
  if (action.type === FETCH_CURRENT_USER) {
    newState.currentUser.firstName = action.payload.currentUser.firstName
    newState.currentUser.lastName = action.payload.currentUser.lastName
  }
}

export default fetchTokensReducer;