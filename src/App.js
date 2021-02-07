import SideMenu from "./components/SideMenu";
import Movies from "./components/Movies";
import { useState } from "react";
import app from "./styles/app.scss";
import { useSelector } from "react-redux";
import TopNav from "./components/TopNav";
import { Route, Switch, Redirect } from "react-router-dom";
import Rentals from "./components/Rentals";
import Customers from "./components/Customers";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

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
      <TopNav />
      <Switch>
        <Route path={`/movies/:id`} component={MovieDetails} />;
        {/* {allMovies.map((movie) => {
          <Route path={`/movies/${movie._id}`} component={MovieDetails} />;
        })} */}
        <Route path="/customers" component={Customers}></Route>
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/movies">
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
        </Route>
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
