// imports
import axios from "axios";
import _ from "lodash";

// local imports
import { GET_MOVIE_DATA } from "../helpers/types";
import { API_KEY, LANGAUGE } from "../helpers/constants";

export const getItemListData = () => async dispatch => {
  let response = {};
  const config = {
    params: {
      api_key: API_KEY,
      language: LANGAUGE,
      page: 1
    }
  };
  const upcomingMovies = await axios
    .get("https://api.themoviedb.org/3/movie/upcoming", config)
    .catch(e =>
      console.log("There was an error while fetching the data : ", e)
    );

  let getMovieDetail = upcomingMovies.data.results.map(async uMovie => {
    const { id } = uMovie;
    const config2 = {
      params: {
        api_key: API_KEY,
        language: LANGAUGE,
        append_to_response: "credits"
      }
    };
    return await axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, config2)
      .catch(e => {
        console.log("There was an error while fetching the data : ", e);
      });
  });
  Promise.all(getMovieDetail).then(function(results) {
    console.log("The resulst is : ", results)
    response = results.map(res => {
      const {
        id,
        overview,
        release_date,
        title,
        genres,
        vote_average,
        credits,
        runtime
      } = res.data;

      let getGenres = genres.map(gen => gen.name);
      let getFiveCast = credits.cast.slice(0, 2);
      let getCast = getFiveCast.map(getFC => ({
        id: getFC.cast_id,
        charName: getFC.character
      }));
      let director = _.find(credits.crew, { job: "Director" });
      return {
        id,
        overview,
        release_date,
        title,
        getGenres,
        vote_average,
        getCast,
        director,
        runtime
      };
    });
    dispatch({
      type: GET_MOVIE_DATA,
      payload: response
    });
  });
};
