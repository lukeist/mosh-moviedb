import { combineReducers } from "redux";
import moviesReducer from "./rMovies";
import genresReducer from "./rGenres";
import loginReducer from "./rLogin";

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  login: loginReducer,
});
