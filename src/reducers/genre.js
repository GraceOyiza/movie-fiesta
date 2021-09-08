import { GET_MOVIES } from '../actions/type';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return payload;
    default:
      return state;
  }
};
