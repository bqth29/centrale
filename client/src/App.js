import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieFinder from "./components/MovieFinder";
import HomePage from "./components/HomePage";
import DataDisplayer from "./components/MovieData";

function App() {
  return (
    <Router>
      <div>
        <nav id="bandeau">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/movies">Liste des films</Link>
            </li>
            <li>
              <Link to="/data">Noter des films</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/movies">
            <MovieFinder />
          </Route>
          <Route path="/data">
            <DataDisplayer />
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
