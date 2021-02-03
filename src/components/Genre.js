import { useEffect, useState } from "react";

const Genre = ({
  genreItem,
  allMovies,
  filteredMovies,
  setFilteredMovies,
  moviesOnPages,
  setMoviesOnPages,
  itemPerPage,
  itemsInGerne,
  setItemInGerne,
  filteredMoviesGenre,
  setFilteredMoviesGenre,
  moviesOnPagesGenre,
  setMoviesOnPagesGenre,
  genreMovies,
  setGenreMovies,
  setGenreStatus,
  getMovieList,
}) => {
  const genresFiltered = () => {
    // Set depended state to be executed after the first
    const temp1 = allMovies.filter(
      (movie) => movie.genre._id === genreItem._id
    );
    setGenreMovies(temp1);
    const temp2 = getMovieList(temp1);
    setMoviesOnPagesGenre(temp2);
    setFilteredMoviesGenre(temp2[0]);
    setGenreStatus(true);
  };

  return <button onClick={genresFiltered}>{genreItem.name}</button>;
};

export default Genre;
