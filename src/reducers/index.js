import { combineReducers } from 'redux';
import moviesReducer from './movies';
import filterReducer from './filter';

export default combineReducers({
  movies: moviesReducer,
  filter: filterReducer,
});
