import InputForm from "../components/InputForm";
import { useDispatch } from "react-redux";
import { movieAdded } from "../store/rMovies";
import { useState } from "react";
import { newMovieSchema } from "../helpers/validationSchema";

const NewMovie = ({ history }) => {
  const dispatch = useDispatch();
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    genre: "",
    numberInStock: "",
    dailyRentalRate: "",
  });
  const [errorStatus, setErrorStatus] = useState(false);
  const [dispatched, setDispatched] = useState(false);
  const [saveClick, setSaveClick] = useState(false);
  const schemaValidate = newMovieSchema.validate({
    Title: movieDetails.title,
    "Number in Stock": movieDetails.numberInStock,
    "Daily Rental Rate": movieDetails.dailyRentalRate,
  });
  const error = schemaValidate.error;

  const handleNewMovie = (e) => {
    e.preventDefault();
    const genreName = document.getElementById("genres").value;
    const genreId = () => {
      switch (genreName) {
        case "Action":
          return "5b21ca3eeb7f6fbccd471818";
        case "Comedy":
          return "5b21ca3eeb7f6fbccd471814";
        case "Thriller":
          return "5b21ca3eeb7f6fbccd471820";
        default:
          break;
      }
    };
    if (error === undefined) {
      dispatch(
        movieAdded({
          title: movieDetails.title,
          genreName,
          genreId: genreId(),
          numberInStock: Number(movieDetails.numberInStock),
          dailyRentalRate: Number(movieDetails.dailyRentalRate),
        })
      );
      setErrorStatus(false);
      setDispatched(true);
    } else {
      setErrorStatus(true);
      setDispatched(false);
    }
  };
  const handleInput = (e) => {
    setMovieDetails({ ...movieDetails, [e.target.name]: e.target.value });
  };

  const handleOnBlur = () => {
    setErrorStatus(true);
  };
  const handleGoBack = () => {
    history.push("/");
    setSaveClick(false);
  };
  return (
    <div className="new-movie">
      <h2>Movie Form</h2>
      <form onSubmit={handleNewMovie}>
        <InputForm
          type="text"
          className="new-title"
          label="Title"
          name="title"
          value={movieDetails.title}
          onChange={handleInput}
          onBlur={handleOnBlur}
          error={error}
          errorStatus={errorStatus}
          dispatched={dispatched}
          saveClick={saveClick}
        />
        <div className="dropdown-genres">
          <label>Genre</label>
          <select className="dropdown" id="genres" name="genres">
            <option value="Action">Action</option>
            <option value="Thriller">Thriller</option>
            <option value="Comedy">Comedy</option>
          </select>
        </div>
        <InputForm
          type="text"
          className="new-stock"
          label="Number in Stock"
          name="numberInStock"
          value={movieDetails.numberInStock}
          onChange={handleInput}
          onBlur={handleOnBlur}
          error={error}
          errorStatus={errorStatus}
          dispatched={dispatched}
          saveClick={saveClick}
        />
        <InputForm
          type="text"
          className="new-rate"
          label="Daily Rental Rate"
          name="dailyRentalRate"
          value={movieDetails.dailyRentalRate}
          onChange={handleInput}
          onBlur={handleOnBlur}
          error={error}
          errorStatus={errorStatus}
          dispatched={dispatched}
          saveClick={saveClick}
        />
        <div>
          <button onClick={() => setSaveClick(true)}>Save</button>
          <button onClick={handleGoBack}> Go Back </button>
        </div>
        <div>
          {dispatched ? (
            <p>‎️‍🔥 "{movieDetails.title}" is saved to the database</p>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default NewMovie;
