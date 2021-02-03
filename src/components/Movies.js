import { useEffect, useState } from "react";
import Movie from "./Movie";
import Nav from "./Nav";
import Pagination from "./Pagination";

const Movies = ({
  allMovies,
  setAllMovies,
  filteredMovies,
  setFilteredMovies,
  arrayOfMoviePerPage,
  setArrayOfMoviePerPage,
  moviesOnPages,
  setMoviesOnPages,
  itemPerPage,
  index,
  setIndex,
  genreMovies,
  setGenreMovies,
  genreStatus,
  filteredMoviesGenre,
  setFilteredMoviesGenre,
  getMovieList,
  moviesOnPagesGenre,
  setMoviesOnPagesGenre,
}) => {
  ///////////////////////////////////////////////////////////////////////////////
  // Sorting
  const [sortStatus, setSortStatus] = useState(false);
  const tempAllMovies = [...allMovies];
  const tempGenreMovies = [...genreMovies];

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
        <Nav filteredMovies={filteredMovies} />
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
            {genreStatus
              ? filteredMoviesGenre.map((movie) => (
                  <Movie
                    key={movie._id}
                    movie={movie}
                    allMovies={allMovies}
                    setAllMovies={setAllMovies}
                    filteredMovies={filteredMovies}
                    setFilteredMovies={setFilteredMovies}
                    moviesOnPages={moviesOnPages}
                    setMoviesOnPages={setMoviesOnPages}
                    index={index}
                    setIndex={setIndex}
                    filteredMoviesGenre={filteredMoviesGenre}
                  />
                ))
              : filteredMovies.map((movie) => (
                  <Movie
                    key={movie._id}
                    movie={movie}
                    allMovies={allMovies}
                    setAllMovies={setAllMovies}
                    filteredMovies={filteredMovies}
                    setFilteredMovies={setFilteredMovies}
                    moviesOnPages={moviesOnPages}
                    setMoviesOnPages={setMoviesOnPages}
                    index={index}
                    setIndex={setIndex}
                    filteredMoviesGenre={filteredMoviesGenre}
                  />
                ))}
          </tbody>
        </table>{" "}
      </div>
      <div className="pagination">
        <Pagination
          genreStatus={genreStatus}
          moviesOnPages={moviesOnPages}
          filteredMovies={filteredMovies}
          setFilteredMovies={setFilteredMovies}
          moviesOnPagesGenre={moviesOnPagesGenre}
          setFilteredMoviesGenre={setFilteredMoviesGenre}
        />
      </div>
    </div>
  );
};

export default Movies;
