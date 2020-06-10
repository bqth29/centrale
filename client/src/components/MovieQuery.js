import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DataDisplayer from "./MovieData";
import "./MovieQuery.css";


function MoviesDisplayer(keyword) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);

  const fetchExample = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=5fee8133&s="+keyword+"&r=json");
      const responseJson = await response.json();
      setIsLoaded(true);
      setError(false);
      setItems(responseJson.Search);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    setIsLoaded(false);
    fetchExample();
    // The useEffect hook will retrigger every time an element in the dependency array changes.
    // changes = strict egality, so beware when mutating objects
  }, [fetchAgain]);

  const displayMovies = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div id="MoviesList">Loading...</div>;
    } else {
      return (
          <ul>
          {items.map((item) => (
            <li><Link to={"/movies/"+item.Title}>{item.Title}</Link></li>
          ))}
          </ul>
          
          
      );
    }
  };

  return (
    <div id="MoviesList">
      {displayMovies()}
    </div>
  );
};

export default MoviesDisplayer;
