import SideMenu from "./components/SideMenu";
import Movies from "./components/Movies";
import { useState } from "react";
import app from "./styles/app.scss";
import { useSelector } from "react-redux";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const allMovies = useSelector((state) => state.entities.movies);
  const [itemPerPage, setItemPerPage] = useState(4); // For user to choose how many item per page to sort
  // Function to get allMovies or genreMovies
  const getMovieList = (movieList) => {
    const results = [];
    const ini = [...movieList];
    while (ini.length) {
      results.push(ini.splice(0, itemPerPage));
    }
    return results;
  };

  ///////////////////////////////////////////////////////
  // ALL GENRES
  const [moviesOnPages, setMoviesOnPages] = useState(getMovieList(allMovies)); // divide All-Movies into separate pages (arrays)
  const [filteredMovies, setFilteredMovies] = useState(moviesOnPages[0]); // first page (array) of the devided All-Movies

  ///////////////////////////////////////////////////////
  // EACH GENRES
  const [genreStatus, setGenreStatus] = useState(false); // Status if Genre is selected or not
  const [genreType, setGenreType] = useState("");
  const [index, setIndex] = useState(0);
  const [genreMovies, setGenreMovies] = useState([]); // G-Movies in a specific Genre
  const [moviesOnPagesGenre, setMoviesOnPagesGenre] = useState(
    // divide G-Movies into pages (arrays)
    getMovieList(genreMovies)
  );
  const [filteredMoviesGenre, setFilteredMoviesGenre] = useState(
    // first page of divided G-Movies
    moviesOnPagesGenre[0]
  );

  return (
    <div className="App">
      <SideMenu
        allMovies={allMovies}
        setFilteredMovies={setFilteredMovies}
        setMoviesOnPages={setMoviesOnPages}
        setFilteredMoviesGenre={setFilteredMoviesGenre}
        setMoviesOnPagesGenre={setMoviesOnPagesGenre}
        setGenreMovies={setGenreMovies}
        setGenreStatus={setGenreStatus}
        getMovieList={getMovieList}
        setGenreType={setGenreType}
        setCurrentPage={setCurrentPage}
      />
      <Movies
        genreStatus={genreStatus}
        allMovies={allMovies}
        filteredMovies={filteredMovies}
        setFilteredMovies={setFilteredMovies}
        setMoviesOnPages={setMoviesOnPages}
        moviesOnPages={moviesOnPages}
        index={index}
        filteredMoviesGenre={filteredMoviesGenre}
        moviesOnPagesGenre={moviesOnPagesGenre}
        setMoviesOnPagesGenre={setMoviesOnPagesGenre}
        setFilteredMoviesGenre={setFilteredMoviesGenre}
        genreMovies={genreMovies}
        getMovieList={getMovieList}
        genreType={genreType}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
