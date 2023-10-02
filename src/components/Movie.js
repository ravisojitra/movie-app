import moment from "moment";
import React from "react";

export default function Movie(props) {

  const movie = props.movie;
  return (
    <li >
      <div className="result-card">
        <div className="poster-wrapper">
          {
            movie.poster_path &&
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={`Avengers: Infinity War`}
            />
          }
        </div>
        <div className="info">
          <div className="header">
            <h3 className="title">{movie.title}</h3>
            <h4 className="release-date">
              {moment(movie.release_date, "YYYY-MM-DD").format("DD-MM-YYYY")}
            </h4>
          </div>

          <div className="controls">
            <button
              className="btn"
              onClick={() => {
                window.location.href = "/movie-detail/" + movie.id
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}