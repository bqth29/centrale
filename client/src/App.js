import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieFinder from "./components/MovieFinder";
import HomePage from "./components/HomePage";
import DataDisplayer from "./components/MovieData";
import "./app.css";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <Router>
      <div>
        <nav id="bandeau">
          
          <ul>
            <i class="fa fa-home"></i><Link to="/"> Home</Link>  |
            <i class="fa fa-search"></i><Link to="/movies"> Find a movie</Link>  | 
            <i class="fa fa-user-tag"></i><Link to="/data"> My mood</Link>
            <Searchbar />
          </ul>
          
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/movies">
            <MovieFinder />
          </Route>
          <Route path="/data">
            {DataDisplayer("Lion King")}
            </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
