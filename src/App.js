import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SearchMovies from "./components/SearchMovies";
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchMovies} />
        <Route exact path="/watchlist" component={WatchList} />
        <Route exact path="/movie-detail/:movieId" component={MovieDetails} />
        <Route path={"*"}>
          <p>This route doesn't exist, go to <a href="/">Home Page</a></p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
