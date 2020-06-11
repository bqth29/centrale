import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoviesDisplayer from "./components/MovieQuery";
import HomePage from "./components/HomePage";
import DataDisplayer from "./components/MovieData";
import "./app.css";
import Searchbox from "./components/Searchbar";
import logo from "./components/hollymood-darkblue.svg";
import MoodScrollBar from "./components/MyMoodPage";



function App() {

  const [recherche, setRecherche] = useState("");

  return (
    <Router>
      <div>
        <nav id="bandeau">
          
          <ul>
            <a id="SiteLogo"  href="/"> 
            <img alt="IMDB Logo" src={logo} id="AppLogo"></img>
            </a>
            <Searchbox handleChange={(e) => {setRecherche(e.target.value);console.log(recherche)}}/>
            <i class="fa fa-search"></i><Link to={"/query/"+recherche} class="BandeauLink">Search</Link> |
            <i class="fa fa-user-tag"></i><Link to="/mymood" class="BandeauLink"> My Mood</Link>
            
            {/*<a><i class="fa fa-search"></i></a>*/}
          </ul>
          
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

            {/*Liste des pages de film*/}

          

            {/*Autres pages*/}

          {/*<Route exact path="/movies">
            {MoviesDisplayer("forrest")}
          </Route>*/}
          <Route exact path="/movies/:name" children={<DataDisplayer />}/>
          <Route exact path="/query/:keyword" children={<MoviesDisplayer />}/>
          <Route exact path="/mymood">
            <MoodScrollBar />
          </Route>
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
