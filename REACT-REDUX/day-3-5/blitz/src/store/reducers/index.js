import { combineReducers } from 'redux';
import fetchTokensReducer from './fetchUserReducer';
import fetchFeedReducer from './fetchFeedReducer';

export default combineReducers({
  fetchTokensReducer,
  fetchFeedReducer,
});