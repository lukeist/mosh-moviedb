import store from "../store/configureStore";
import { useHistory } from "react-router-dom";

const Nav = ({ allMovies, genreStatus, genreMovies, genreType }) => {
  const history = useHistory();
  return (
    <nav className="nav-bar">
      <button onClick={() => history.push("/movies/new")}>New Movie</button>
      {genreStatus ? (
        <div>
          {genreMovies.length > 0 ? (
            <h2>
              Showing
              {
                store
                  .getState()
                  .entities.movies.filter(
                    (movie) => movie.genre._id === genreType
                  ).length
              }
              movies in the collection.
            </h2>
          ) : (
            <h2>There's no movie in the collection.</h2>
          )}
        </div>
      ) : (
        <div>
          {allMovies.length > 0 ? (
            <h2>Showing {allMovies.length} movies in the database.</h2>
          ) : (
            <h2>There's no movie in the database.</h2>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
