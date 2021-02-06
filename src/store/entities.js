import { combineReducers } from "redux";
import moviesReducer from "./rMovies";
import genresReducer from "./rGenre";
export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
});
