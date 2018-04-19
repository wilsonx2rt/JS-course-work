// ACTIONS
import { FETCH_FEED } from '../actions/actionTypes';

const initialState = {
  feed: {}
}

const fetchFeedReducer = (state = initialState, action) => {
  const newState = {...state};
  if (action.type === FETCH_FEED) {
    newState.feed = {...action.payload};
    return newState;
  } else {
    return state;
  }
}

export default fetchFeedReducer;