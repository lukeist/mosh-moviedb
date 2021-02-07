import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { movieRemoved } from "../store/rMovies";
import store from "../store/configureStore";
import { Route, Link } from "react-router-dom";
const Movie = ({
  movie,
  setFilteredMovies,
  setMoviesOnPages,
  setFilteredMoviesGenre,
  setMoviesOnPagesGenre,
  getMovieList,
  genreType,
  genreStatus,
  currentPage,
  setCurrentPage,
}) => {
  const [heart, setHeart] = useState(false);
  const dispatch = useDispatch();
  const movieHearted = () => {
    setHeart(!heart);
  };

  const movieRemovedHandler = () => {
    let currentMovieList = store.getState().entities.movies;
    let currentMovieListGenre = currentMovieList.filter(
      (movie) => movie.genre._id === genreType
    );
    dispatch(movieRemoved({ _id: movie._id }));
    if (!genreStatus) {
      if (getMovieList(currentMovieList)[currentPage].length === 1) {
        currentMovieList = store.getState().entities.movies;
        setMoviesOnPages(getMovieList(currentMovieList));
        const tempPage = currentPage - 1;
        setCurrentPage(tempPage);
        setFilteredMovies(getMovieList(currentMovieList)[tempPage]);
      } else {
        currentMovieList = store.getState().entities.movies;
        setMoviesOnPages(getMovieList(currentMovieList));
        setFilteredMovies(getMovieList(currentMovieList)[currentPage]);
      }
    } else {
      if (getMovieList(currentMovieListGenre)[currentPage].length === 1) {
        currentMovieList = store.getState().entities.movies;
        currentMovieListGenre = currentMovieList.filter(
          (movie) => movie.genre._id === genreType
        );
        setMoviesOnPagesGenre(getMovieList(currentMovieListGenre));
        const tempPage = currentPage - 1;
        setCurrentPage(tempPage);
        setFilteredMoviesGenre(getMovieList(currentMovieListGenre)[tempPage]);
      } else {
        currentMovieList = store.getState().entities.movies;
        currentMovieListGenre = currentMovieList.filter(
          (movie) => movie.genre._id === genreType
        );
        setMoviesOnPagesGenre(getMovieList(currentMovieListGenre));
        setFilteredMoviesGenre(
          getMovieList(currentMovieListGenre)[currentPage]
        );
      }
    }
  };

  return (
    <tr>
      <th className="movie-title column-1">
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      </th>
      <th className="movie-gerne column-2">{movie.genre.name}</th>
      <th className="movie-stock column-3">{movie.numberInStock}</th>
      <th className="movie-rate column-4">{movie.dailyRentalRate}</th>
      <th className="movie-hearted column-5">
        {heart ? (
          <FontAwesomeIcon onClick={movieHearted} icon={faHeart} />
        ) : (
          <FontAwesomeIcon onClick={movieHearted} icon={emptyHeart} />
        )}
      </th>
      <th className="movie-removed column-6">
        <button onClick={movieRemovedHandler}>Delete</button>
      </th>
    </tr>
  );
};

export default Movie;
