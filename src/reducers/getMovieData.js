// imports

// local imports
import { GET_MOVIE_DATA } from "../helpers/types";

const INITIAL_STATE = {
  movieData: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIE_DATA:
      return { ...state, movieData: action.payload };
    default:
      return state;
  }
};
