import store from "../store/configureStore";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Nav = ({
  allMovies,
  genreStatus,
  setGenreStatus,
  genreMovies,
  genreType,
  setMoviesOnPages,
  setFilteredMovies,
  getMovieList,
}) => {
  const history = useHistory();

  const handleSearch = (e) => {
    const tempSearchedMovies = store
      .getState()
      .entities.movies.filter(
        (movie) =>
          movie.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    setMoviesOnPages(getMovieList(tempSearchedMovies));
    setFilteredMovies(getMovieList(tempSearchedMovies)[0]);
    setGenreStatus(!genreStatus);
  };

  return (
    <nav className="nav-bar">
      <div>
        <h3>Search a movie</h3>
        <input label="Search" onChange={handleSearch}></input>
      </div>
      <div>
        <button onClick={() => history.push("/movies/new")}>New Movie</button>
      </div>
      {genreStatus ? (
        <div>
          {genreMovies.length > 0 ? (
            <h2>
              Showing
              {
                store
                  .getState()
                  .entities.movies.filter(
                    (movie) => movie.genre._id === genreType
                  ).length
              }
              movies in the collection.
            </h2>
          ) : (
            <h2>There's no movie in the collection.</h2>
          )}
        </div>
      ) : (
        <div>
          {allMovies.length > 0 ? (
            <h2>Showing {allMovies.length} movies in the database.</h2>
          ) : (
            <h2>There's no movie in the database.</h2>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
