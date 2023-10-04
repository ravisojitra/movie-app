import { FETCH_MOVIE_CAST, FETCH_MOVIE_VIDEOS, FETCH_POPULAR_URL, FETCH_TOP_RATED_URL, FETCH_TRENDING_URL, FETCH_UPCOMING_MOVIES, MOVIE_DETAILS, SEARCH_MOVIE_URL } from "./constants";
import callApi from "./utils";

export function searchMovies(searchTerm) {
  return callApi(SEARCH_MOVIE_URL + searchTerm, "GET")
}

export function getMovieById(movieId) {
  return callApi(MOVIE_DETAILS + movieId, "GET")
}

export function getStarCastOfMovie() {
}

export function getTrendingMovies() {
  return callApi(FETCH_TRENDING_URL)
}

export function getPopularMovies() {
  return callApi(FETCH_POPULAR_URL)
}

export function getTopRatedMovies() {
  return callApi(FETCH_TOP_RATED_URL)
}

export function getUpcomingMovies() {
  return callApi(FETCH_UPCOMING_MOVIES)
}

export function getMovieVideos(movieId) {
  return callApi(FETCH_MOVIE_VIDEOS(movieId))
}
export function getMovieStarCast(movieId) {
  return callApi(FETCH_MOVIE_CAST(movieId))
}