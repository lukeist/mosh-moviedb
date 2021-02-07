import { useSelector } from "react-redux";

const MovieDetails = ({ match, history }) => {
  const id = match.params.id;
  const allMovies = useSelector((state) => state.entities.movies);
  const thisMovie = allMovies.filter((movie) => movie._id === id)[0];

  return (
    <div>
      <h2>{thisMovie.title}</h2>
      <h3>Genre: {thisMovie.genre.name}</h3>
      <h3>In Stock: {thisMovie.numberInStock}</h3>
      <button onClick={() => history.push("/")}>Save</button>
    </div>
  );
};

export default MovieDetails;
