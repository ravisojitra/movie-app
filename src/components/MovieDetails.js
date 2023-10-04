import moment from "moment";
import React from "react"
import { useParams } from "react-router";
import { getMovieById, getMovieStarCast, getMovieVideos } from "../services/movies";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactPlayer from 'react-player'

export default function MovieDetails() {
  const params = useParams();
  const movieId = params.movieId;

  const [movie, setMovie] = React.useState({});
  const [videos, setVideos] = React.useState([]);
  const [casts, setCasts] = React.useState([]);

  React.useEffect(() => {
    getMovieById(movieId).then(data => {
      setMovie(data)
    }).catch(err => {
      console.log({ err })
    })
    getMovieVideos(movieId).then(data => {
      setVideos(data.results || [])
    })
    getMovieStarCast(movieId).then(data => {
      console.log(data);
      setCasts(data.cast || [])
    })
  }, [])

  if (!movieId) return <p>Wrong url...</p>;

  return (
    <div className="movie-page movie-details">
      <div className="inner-content" style={{ display: "flex" }}>
        <div className="movie-card" style={{ width: "50%" }}>
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
        <div style={{ width: "50%" }}>
          <div className="header">
            <h1 className="heading">{movie.title}</h1>
            <h4 className="release-date">
              {moment(movie.release_date, "YYYY-MM-DD").format("DD-MM-YYYY")}
            </h4>
          </div>
          <Tabs>
            <TabList>
              <Tab>Information</Tab>
              <Tab>Videos ({videos.length || 0})</Tab>
              <Tab>Star Cast</Tab>
            </TabList>

            <TabPanel>
              <h2><p>{movie.overview}</p>
                <div>
                  <p><b>Popularity:</b> {movie.popularity}</p>
                  <p><b>Vote Average:</b> {movie.vote_average}</p>
                  <p><b>Vote Count:</b> {movie.vote_count}</p>
                </div></h2>
            </TabPanel>
            <TabPanel>
              {
                videos.slice(0, 2).map(video => {
                  return <ReactPlayer key={video.key} url={`https://www.youtube.com/watch?v=${video.key}`} />
                })
              }
            </TabPanel>
            <TabPanel>
              {
                casts.map(cast => {
                  return (
                    <div>
                      <img style={{ width: 250, height: "auto" }} src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} />
                      <p>Original Name : {cast.original_name}</p>
                      <p>Character Name : {cast.character}</p>
                    </div>
                  )
                })
              }
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}