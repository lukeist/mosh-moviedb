import { getMovies } from "./components/fakeMovieService";
import SideMenu from "./components/SideMenu";
import Movies from "./components/Movies";
import { useState, useEffect } from "react";
import app from "./styles/app.scss";

function App() {
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
  const [allMovies, setAllMovies] = useState(getMovies()); // All-Movies
  const [moviesOnPages, setMoviesOnPages] = useState(getMovieList(allMovies)); // divide All-Movies into separate pages (arrays)
  const [filteredMovies, setFilteredMovies] = useState(moviesOnPages[0]); // first page (array) of the devided All-Movies

  ///////////////////////////////////////////////////////
  // EACH GENRES
  const [genreStatus, setGenreStatus] = useState(false); // Status if Genre is selected or not
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

  ///////////////////////////////////////////////////////
  // useEffect(() => {
  //   const tempT = getMovieList(genreMovies);
  //   setMoviesOnPagesGenre(tempT);
  //   setFilteredMoviesGenre(tempT[0]);
  //   console.log(genreMovies, moviesOnPagesGenre, filteredMoviesGenre);
  // }, [genreMovies]);

  useEffect(() => {
    // const tempT = [...allMovies];
    // setMoviesOnPages(getMovieList(tempT));
    // setFilteredMovies(getMovieList(tempT)[0]);
  }, [allMovies]);

  return (
    <div className="App">
      <SideMenu
        allMovies={allMovies}
        setFilteredMovies={setFilteredMovies}
        filteredMovies={filteredMovies}
        moviesOnPages={moviesOnPages}
        setMoviesOnPages={setMoviesOnPages}
        itemPerPage={itemPerPage}
        filteredMoviesGenre={filteredMoviesGenre}
        setFilteredMoviesGenre={setFilteredMoviesGenre}
        moviesOnPagesGenre={moviesOnPagesGenre}
        setMoviesOnPagesGenre={setMoviesOnPagesGenre}
        genreMovies={genreMovies}
        setGenreMovies={setGenreMovies}
        setGenreStatus={setGenreStatus}
        getMovieList={getMovieList}
      />
      <Movies
        genreStatus={genreStatus}
        allMovies={allMovies}
        setAllMovies={setAllMovies}
        filteredMovies={filteredMovies}
        setFilteredMovies={setFilteredMovies}
        itemPerPage={itemPerPage}
        setMoviesOnPages={setMoviesOnPages}
        moviesOnPages={moviesOnPages}
        index={index}
        setIndex={setIndex}
        filteredMoviesGenre={filteredMoviesGenre}
        moviesOnPagesGenre={moviesOnPagesGenre}
        setMoviesOnPagesGenre={setMoviesOnPagesGenre}
        setFilteredMoviesGenre={setFilteredMoviesGenre}
        genreMovies={genreMovies}
        setGenreMovies={setGenreMovies}
        getMovieList={getMovieList}
      />
    </div>
  );
}

export default App;
