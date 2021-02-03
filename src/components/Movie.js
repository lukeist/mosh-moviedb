import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";

const Movie = ({
  setIndex,
  movie,
  allMovies,
  setAllMovies,
  filteredMovies,
  setFilteredMovies,
  moviesOnPages,
  setMoviesOnPages,
}) => {
  const [heart, setHeart] = useState(false);

  const movieHearted = () => {
    setHeart(!heart);
  };

  const movieRemoved = () => {
    setAllMovies(allMovies.filter((item) => item._id !== movie._id));
    setFilteredMovies(filteredMovies.filter((item) => item._id !== movie._id));
  };

  // NEU SO PAGE = X THI KHI XOA CAI CUOI CUNG O PAGE X, PHAI TU DONG NHAY QUA PAGE X-1
  return (
    <tr>
      <th className="movie-title column-1">{movie.title}</th>
      <th className="movie-gerne column-2">{movie.genre.name}</th>
      <th className="movie-stock column-3">{movie.numberInStock}</th>
      <th className="movie-rate column-4">{movie.dailyRentalRate}</th>
      <th className="movie-hearted column-5">
        {heart ? (
          <FontAwesomeIcon onClick={movieHearted} icon={faHeart} />
        ) : (
          <FontAwesomeIcon onClick={movieHearted} icon={emptyHeart} />
        )}
      </th>
      <th className="movie-removed column-6">
        <button onClick={movieRemoved}>Delete</button>
      </th>
    </tr>
  );
};

export default Movie;
