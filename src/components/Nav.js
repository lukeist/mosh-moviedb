const Nav = ({ filteredMovies }) => {
  return (
    <nav className="nav-bar">
      <div>
        {filteredMovies.length > 0 ? (
          <h2>Showing {filteredMovies.length} movies in the database.</h2>
        ) : (
          <h2>There's no movie in the database.</h2>
        )}
      </div>
    </nav>
  );
};

export default Nav;
