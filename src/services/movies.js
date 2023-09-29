import { SEARCH_MOVIE_URL } from "./constants";
import callApi from "./utils";

export function searchMovies(searchTerm) {
  return callApi(SEARCH_MOVIE_URL + searchTerm, "GET")
}

export function getMovieById() {

}

export function getStarCastOfMovie() {

}