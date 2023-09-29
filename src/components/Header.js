import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">MyWatchList</Link>
          </div>
          <div className="nav-links">
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>
            <li>
              <Link to="/" className="btn">
                Search
              </Link>
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
