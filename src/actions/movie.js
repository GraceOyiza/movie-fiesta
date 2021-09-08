import { GET_MOVIES } from './type';

export default (movie) => ({
  type: GET_MOVIES,
  payload: movie,
});
