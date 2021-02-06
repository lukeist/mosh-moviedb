const Genre = ({
  genreItem,
  allMovies,
  setFilteredMoviesGenre,
  setMoviesOnPagesGenre,
  setGenreMovies,
  setGenreStatus,
  getMovieList,
  setGenreType,
  setCurrentPage,
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
    setGenreType(genreItem._id);
    setCurrentPage(0);
  };

  return <button onClick={genresFiltered}>{genreItem.name}</button>;
};

export default Genre;
