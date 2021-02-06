const Pagination = ({
  moviesOnPages,
  setFilteredMovies,
  genreStatus,
  moviesOnPagesGenre,
  setFilteredMoviesGenre,
  setCurrentPage,
}) => {
  const setFilteredMoviesGenreHandler = (page) => {
    setFilteredMoviesGenre(page);
    setCurrentPage(moviesOnPagesGenre.indexOf(page));
  };
  const setFilteredMoviesHandler = (page) => {
    setFilteredMovies(page);
    setCurrentPage(moviesOnPages.indexOf(page));
  };
  return (
    <div>
      {genreStatus
        ? moviesOnPagesGenre.map((page) => (
            <button onClick={() => setFilteredMoviesGenreHandler(page)}>
              {moviesOnPagesGenre.indexOf(page) + 1}
            </button>
          ))
        : moviesOnPages.map((page) => (
            <button onClick={() => setFilteredMoviesHandler(page)}>
              {moviesOnPages.indexOf(page) + 1}
            </button>
          ))}
    </div>
  );
};

export default Pagination;
