import Genre from "./Genre";
import { useSelector } from "react-redux";

const SideMenu = ({
  allMovies,
  setFilteredMovies,
  setMoviesOnPages,
  setFilteredMoviesGenre,
  setMoviesOnPagesGenre,
  setGenreMovies,
  setGenreStatus,
  getMovieList,
  setGenreType,
  setCurrentPage,
}) => {
  const genres = useSelector((state) => state.entities.genres);
  const showAllGenres = () => {
    const tempT = [...allMovies];
    setMoviesOnPages(getMovieList(tempT));
    setFilteredMovies(getMovieList(tempT)[0]);
    setGenreStatus(false);
    setCurrentPage(0);
  };

  return (
    <div className="genres">
      <button onClick={showAllGenres}>All Genres</button>
      {genres.map((genreItem) => (
        <Genre
          key={genreItem._id}
          genreItem={genreItem}
          allMovies={allMovies}
          setFilteredMoviesGenre={setFilteredMoviesGenre}
          setMoviesOnPagesGenre={setMoviesOnPagesGenre}
          setGenreMovies={setGenreMovies}
          setGenreStatus={setGenreStatus}
          getMovieList={getMovieList}
          setGenreType={setGenreType}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </div>
  );
};

export default SideMenu;
