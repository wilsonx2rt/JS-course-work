import { combineReducers } from 'redux';
import fetchTokensReducer from './fetchTokenReducer';
import fetchFeedReducer from './fetchFeedReducer';

export default combineReducers({
  fetchTokensReducer,
  fetchFeedReducer,
});