import moment from "moment";
import React from "react"
import { useParams } from "react-router";
import { getMovieById } from "../services/movies";

export default function MovieDetails(props) {
  const params = useParams();
  const movieId = params.movieId;

  const [movie, setMovie] = React.useState({});

  React.useEffect(() => {
    getMovieById(movieId).then(data => {
      setMovie(data)
    }).catch(err => {
      console.log({ err })
    })
  }, [])

  if (!movieId) return <p>Wrong url...</p>;

  return (
    <div className="movie-page container">
      <div className="header">
        <h1 className="heading">{movie.title}</h1>
        <h4 className="release-date">
          {moment(movie.release_date, "YYYY-MM-DD").format("DD-MM-YYYY")}
        </h4>
      </div>
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="overlay">
          <div className="inner-card-controls">
            <button className="ctrl-btn">Play</button>
            <button className="ctrl-btn">Add to List</button>
          </div>
        </div>
      </div>
      <div className="inner-content">
        <p style={{ width: "50%" }}>{movie.overview}</p>
        <div>
          <p>Popularity: {movie.popularity}</p>
          <p>Vote Average: {movie.vote_average}</p>
          <p>Vote Count: {movie.vote_count}</p>
        </div>
      </div>
    </div>
  )
}