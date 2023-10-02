import { useState, useEffect } from "react";
const baseUrl = "https://image.tmdb.org/t/p/original";
const isLargeRow = false

export default function MovieDetailsCard(props) {
  const movie = props.movie
  return (
    <div className="row__movie-details" onClick={() => window.location.href = `/movie-detail/${movie.id}`}>
      <img
        className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
        src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="overlay">
        <span className="movie-title">{movie.title}</span>
        <button className="watchlist-button">Add to Watchlist</button>
      </div>
    </div>
  )
}