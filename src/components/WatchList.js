import React, { useContext } from "react";

const WatchList = () => {

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watch List</h1>
          <span className="count-pill">
            Movies
          </span>
        </div>
        <h2 className="no-movies">No Movies In Watch List</h2>
      </div>
    </div>
  );
};

export default WatchList;
