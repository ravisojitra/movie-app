import React from "react";
import MovieDetailsCard from "./MovieDetailsCard";
import { getPopularMovies, getTopRatedMovies, getTrendingMovies, getUpcomingMovies } from "../services/movies";
import MovieLoader from "./MovieCardLoader";

const Home = () => {
  return (
    <div>
      <MovieRow title={"Trending"} fetchFunction={getTrendingMovies} />
      <MovieRow title={"Popular"} fetchFunction={getPopularMovies} />
      <MovieRow title={"Top Rated"} fetchFunction={getTopRatedMovies} />
      <MovieRow title={"Upcoming"} fetchFunction={getUpcomingMovies} />
    </div>
  );
};

function MovieRow(props) {
  const [movies, setMovies] = React.useState([])
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchFunction = props.fetchFunction;
    if (fetchFunction && typeof fetchFunction === "function") {
      fetchFunction().then(response => {
        setMovies(response.results.splice(0, 8));
        setLoading(false);
      })
    }
  }, [])

  const title = props.title || "title not found"

  if (loading) return <div><MovieLoader /></div>
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {
          movies.map(movie => {
            return (
              <MovieDetailsCard key={movie.id} movie={movie} />
            )
          })
        }

      </div>
    </div>
  )
}

export default Home;
