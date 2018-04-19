import { combineReducers } from 'redux';
import fetchQuestionsReducer from './fetchQuestionsReducer'

const rootReducer = combineReducers({
  fetchQuestionsReducer,
});

export default rootReducer;