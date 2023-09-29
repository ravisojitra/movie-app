import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SearchMovies from "./components/SearchMovies";
import Header from "./components/Header";
import WatchList from "./components/WatchList";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={SearchMovies} />
        <Route exact path="/watchlist" component={WatchList} />
        <Route path={"*"}>
          <p>This route doesn't exist, go to <a href="/">Home Page</a></p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
