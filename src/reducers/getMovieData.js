// imports

// local imports
import { GET_MOVIE_DATA , SEARCH_TERM} from "../helpers/types";

const INITIAL_STATE = {
  movieData: null,
  searchTerm: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIE_DATA:
      return { ...state, movieData: action.payload };
    case SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};
