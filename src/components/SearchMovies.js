import React, { useEffect } from "react";

import moment from "moment";
import debounce from "lodash/debounce"
import { searchMovies } from "../services/movies";

const SearchMovies = () => {

  const [searchTerm, setSearchTerm] = React.useState("")
  const [movies, setMovies] = React.useState([])

  useEffect(() => {
    if (!searchTerm) return
    // fetch movies from API
    searchMovies(searchTerm).then(result => setMovies(result.results))
  }, [searchTerm]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search For Movie.."
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
            />
          </div>

          <ul className="results">
            {
              movies.map(movie => {
                return (
                  <li >
                    <div className="result-card">
                      <div className="poster-wrapper">
                        <img
                          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                          alt={`Avengers: Infinity War`}
                        />
                      </div>
                      {/* moment("2011-10-31", "YYYYMMDD") */}
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
                          >
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchMovies;
