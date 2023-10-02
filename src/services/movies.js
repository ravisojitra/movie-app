import { MOVIE_DETAILS, SEARCH_MOVIE_URL } from "./constants";
import callApi from "./utils";

export function searchMovies(searchTerm) {
  return callApi(SEARCH_MOVIE_URL + searchTerm, "GET")
}

export function getMovieById(movieId) {
  return callApi(MOVIE_DETAILS + movieId, "GET")
}

export function getStarCastOfMovie() {
}