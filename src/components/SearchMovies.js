import React, { useEffect } from "react";

import { searchMovies } from "../services/movies";
import Movie from "./Movie";

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
                  <Movie key={movie.id} movie={movie} />
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
