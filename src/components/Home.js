import { useState, useEffect } from "react";

const baseUrl = "https://image.tmdb.org/t/p/original";
const isLargeRow = false
let movie = {
  "adult": false,
  "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
  "genre_ids": [
    16,
    28,
    12
  ],
  "id": 569094,
  "original_language": "en",
  "original_title": "Spider-Man: Across the Spider-Verse",
  "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
  "popularity": 685.126,
  "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
  "release_date": "2023-05-31",
  "title": "Spider-Man: Across the Spider-Verse",
  "video": false,
  "vote_average": 8.441,
  "vote_count": 4423
}
const Home = () => {
  return (
    <div>
      <div className="row">
        <h2>Trending Today</h2>
        <div className="row__posters">
          <div className="row__movie-details">
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
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <h2>Popular</h2>
        <div className="row__posters">
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <h2>Top Rated</h2>
        <div className="row__posters">
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <h2>Upcoming</h2>
        <div className="row__posters">
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
          <div className="row__movie-details">
            <img
              className={`row__poster ${!isLargeRow && "row__posterLarge"} `}
              src={`${baseUrl}${!isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
