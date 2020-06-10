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

          

            {/*Autres pages*/}

          <Route exact path="/movies">
            {MoviesDisplayer("Star")}
          </Route>
          <Route exact path="/movies/:name" children={<DataDisplayer />}/>
          {/*<Route path="/data">
            {DataDisplayer("Lion King")}
          </Route>*/}
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
