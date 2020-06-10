import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoviesDisplayer from "./components/MovieQuery";
import HomePage from "./components/HomePage";
import DataDisplayer from "./components/MovieData";
import "./app.css";
import Searchbox from "./components/Searchbar";



function App() {

  var recherche =""

  return (
    <Router>
      <div>
        <nav id="bandeau">
          
          <ul>
            <i class="fa fa-home"></i><Link to="/"> Home</Link>  |
            <i class="fa fa-search"></i><Link to="/movies"> Find a movie</Link>  | 
            <i class="fa fa-user-tag"></i><Link to="/data"> My mood</Link>
            <Searchbox handleChange={(e) => recherche = e.target.value}/>
            {/*<a><i class="fa fa-search"></i></a>*/}
          </ul>
          
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

            {/*Liste des pages de film*/}

          <Route path="/movies/Rogue One: A Star Wars Story">
            {DataDisplayer("Rogue One: A Star Wars Story")}
          </Route>
          <Route path="/movies/Star Wars: Episode IV - A New Hope">
            {DataDisplayer("Star Wars: Episode IV - A New Hope")}
          </Route>
          <Route path="/movies/Star Wars: Episode V - The Empire Strikes Back">
            {DataDisplayer("Star Wars: Episode V - The Empire Strikes Back")}
          </Route>
          <Route path="/movies/Star Wars: Episode VI - Return of the Jedi">
            {DataDisplayer("Star Wars: Episode VI - Return of the Jedi")}
          </Route>
          <Route path="/movies/Star Wars: Episode I - The Phantom Menace">
            {DataDisplayer("Star Wars: Episode I - The Phantom Menace")}
          </Route>
          <Route path="/movies/Star Wars: Episode III - Revenge of the Sith">
            {DataDisplayer("Star Wars: Episode III - Revenge of the Sith")}
          </Route>
          <Route path="/movies/Star Wars: Episode II - Attack of the Clones">
            {DataDisplayer("Star Wars: Episode II - Attack of the Clones")}
          </Route>
          <Route path="/movies/Inception">
            {DataDisplayer("Inception")}
          </Route>

            {/*Autres pages*/}

          <Route path="/movies">
            {MoviesDisplayer(recherche)}
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
