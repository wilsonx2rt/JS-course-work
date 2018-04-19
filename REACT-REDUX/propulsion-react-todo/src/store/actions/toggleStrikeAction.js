import { TOGGLE_STRIKE } from './types';

const changeFilter = (todo) => ({
  type: TOGGLE_STRIKE,
  payload: todo
});

export default changeFilter;