import { Link, NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <nav className="top-nav">
      <h1>
        <Link to="/">mosh moviedb</Link>
      </h1>
      <div>
        <NavLink className="nav-link" to="/">
          Movies
        </NavLink>
        <NavLink className="nav-link" to="/customers">
          Customers
        </NavLink>
        <NavLink className="nav-link" to="/rentals">
          Rentals
        </NavLink>
      </div>
    </nav>
  );
};

export default TopNav;
