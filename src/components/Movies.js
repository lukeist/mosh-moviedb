import { useState } from "react";
import Movie from "./Movie";
import Nav from "./Nav";
import Pagination from "./Pagination";
import store from "../store/configureStore";

const Movies = ({
  allMovies,
  filteredMovies,
  setFilteredMovies,
  moviesOnPages,
  setMoviesOnPages,
  index,
  genreMovies,
  genreStatus,
  filteredMoviesGenre,
  setFilteredMoviesGenre,
  getMovieList,
  moviesOnPagesGenre,
  setMoviesOnPagesGenre,
  genreType,
  currentPage,
  setCurrentPage,
}) => {
  ///////////////////////////////////////////////////////////////////////////////
  // Sorting
  const [sortStatus, setSortStatus] = useState(false);
  const tempAllMovies = [...allMovies];
  const tempGenreMovies = store
    .getState()
    .entities.movies.filter((movie) => movie.genre._id === genreType);

  const sortMovies = (data, getValueByProp) => {
    if (sortStatus !== true) {
      data.sort((a, b) => {
        const v1 = getValueByProp(a);
        const v2 = getValueByProp(b);
        return v1.toString().localeCompare(v2);
      });
    } else {
      data.sort((a, b) => {
        const v1 = getValueByProp(a);
        const v2 = getValueByProp(b);
        return v2.toString().localeCompare(v1);
      });
    }

    if (!genreStatus) {
      setMoviesOnPages(getMovieList(tempAllMovies));
      setFilteredMovies(getMovieList(tempAllMovies)[0]);
      setSortStatus(!sortStatus);
    } else {
      setMoviesOnPagesGenre(getMovieList(tempGenreMovies));
      setFilteredMoviesGenre(getMovieList(tempGenreMovies)[0]);
      setSortStatus(!sortStatus);
    }
  };

  return (
    <div>
      <div className="movies">
        <Nav
          genreType={genreType}
          allMovies={allMovies}
          genreStatus={genreStatus}
          genreMovies={genreMovies}
        />
        <table>
          <tbody>
            <tr className="table-head">
              <th
                onClick={
                  genreStatus
                    ? () => sortMovies(tempGenreMovies, (item) => item.title)
                    : () => sortMovies(tempAllMovies, (item) => item.title)
                }
              >
                Title
              </th>
              <th
                onClick={
                  genreStatus
                    ? () =>
                        sortMovies(tempGenreMovies, (item) => item.genre.name)
                    : () => sortMovies(tempAllMovies, (item) => item.genre.name)
                }
              >
                Genre
              </th>
              <th
                onClick={
                  genreStatus
                    ? () =>
                        sortMovies(
                          tempGenreMovies,
                          (item) => item.numberInStock
                        )
                    : () =>
                        sortMovies(tempAllMovies, (item) => item.numberInStock)
                }
              >
                Stock
              </th>
              <th
                onClick={
                  genreStatus
                    ? () =>
                        sortMovies(
                          tempGenreMovies,
                          (item) => item.dailyRentalRate
                        )
                    : () =>
                        sortMovies(
                          tempAllMovies,
                          (item) => item.dailyRentalRate
                        )
                }
              >
                Rate
              </th>
            </tr>
            {filteredMovies === undefined ? (
              <tr></tr>
            ) : !genreStatus ? (
              filteredMovies.map((movie) => (
                <Movie
                  key={movie._id}
                  index={index}
                  movie={movie}
                  setMoviesOnPages={setMoviesOnPages}
                  setFilteredMovies={setFilteredMovies}
                  getMovieList={getMovieList}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              ))
            ) : filteredMoviesGenre !== undefined ? (
              filteredMoviesGenre.map((movie) => (
                <Movie
                  key={movie._id}
                  movie={movie}
                  setFilteredMovies={setFilteredMovies}
                  setMoviesOnPages={setMoviesOnPages}
                  index={index}
                  genreStatus={genreStatus}
                  genreType={genreType}
                  setFilteredMoviesGenre={setFilteredMoviesGenre}
                  setMoviesOnPagesGenre={setMoviesOnPagesGenre}
                  getMovieList={getMovieList}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <Pagination
          key={}
          genreStatus={genreStatus}
          moviesOnPages={moviesOnPages}
          setFilteredMovies={setFilteredMovies}
          moviesOnPagesGenre={moviesOnPagesGenre}
          setFilteredMoviesGenre={setFilteredMoviesGenre}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Movies;
