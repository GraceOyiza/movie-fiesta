import { combineReducers } from 'redux';

export const testReducer = (state = 'Initial state', { type }) => {
  switch (type) {
    case 'test':
      return 'TEST';
    default:
      return state;
  }
};

export default combineReducers({
  testState: testReducer,
});
