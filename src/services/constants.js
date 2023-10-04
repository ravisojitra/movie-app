export const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzZhZjJmN2MwMWM3ZTc4NmI5OGU3ZjY2N2Y4NWRkZSIsInN1YiI6IjY1MTU1YjFhYzUwYWQyMDE0ZGNjMjQ2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KTEAEFoWSjLNZKPvwy25kk-7KVaowYY0O02Kvtoctj0";

export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?page=1&query=";
export const MOVIE_DETAILS = "https://api.themoviedb.org/3/movie/"
export const FETCH_TRENDING_URL = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
export const FETCH_TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const FETCH_POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const FETCH_UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"

export const FETCH_MOVIE_VIDEOS = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
export const FETCH_MOVIE_CAST = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`
