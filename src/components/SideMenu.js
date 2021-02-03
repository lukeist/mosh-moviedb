import { getGenres } from "./fakeGenreService";
import Genre from "./Genre";

const SideMenu = ({
  allMovies,
  filteredMovies,
  setFilteredMovies,
  moviesOnPages,
  setMoviesOnPages,
  itemPerPage,
  genreItem,
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
  a,
}) => {
  const genres = getGenres();
  const showAllGenres = () => {
    const tempT = [...allMovies];
    setMoviesOnPages(getMovieList(tempT));
    setFilteredMovies(getMovieList(tempT)[0]);
    setGenreStatus(false);
  };

  return (
    <div className="genres">
      <button onClick={showAllGenres}>All Genres</button>
      {genres.map((genreItem) => (
        <Genre
          key={genreItem._id}
          genreItem={genreItem}
          allMovies={allMovies}
          filteredMovies={filteredMovies}
          setFilteredMovies={setFilteredMovies}
          moviesOnPages={moviesOnPages}
          setMoviesOnPages={setMoviesOnPages}
          itemPerPage={itemPerPage}
          itemsInGerne={itemsInGerne}
          setItemInGerne={setItemInGerne}
          filteredMoviesGenre={filteredMoviesGenre}
          setFilteredMoviesGenre={setFilteredMoviesGenre}
          moviesOnPagesGenre={moviesOnPagesGenre}
          setMoviesOnPagesGenre={setMoviesOnPagesGenre}
          genreMovies={genreMovies}
          setGenreMovies={setGenreMovies}
          setGenreStatus={setGenreStatus}
          getMovieList={getMovieList}
        />
      ))}
    </div>
  );
};

export default SideMenu;
