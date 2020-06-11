import React, { useState, useEffect } from "react";
import Stars from "./StarRating";
import "./MovieData.css";
import {
  useParams
} from "react-router-dom";

import note from "./get_note";
import Rajout from "./create_user";


function DataDisplayer() {
    let {name} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [fetchAgain, setFetchAgain] = useState(false);
  
    const fetchExample = async () => {
      try {
        const response = await fetch("http://www.omdbapi.com/?apikey=5fee8133&t="+name+"&r=json");
        const responseJson = await response.json();
        setIsLoaded(true);
        setError(false);
        setItems(responseJson);
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

  const displayData = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="MovieData">
          <h2>{items["Title"]+" ("+items["Year"]+")"}</h2>
          <p id="plot">{items["Plot"]}</p>
          <br></br>
          <p></p>
          <a id="MoviePoster">
            <img alt={items["Title"]+" - Poster"} src={items["Poster"]}></img>
          </a> 
          <a id="MoviePoster"  href={"https://www.imdb.com/title/"+items["imdbID"]}> 
            <img alt="IMDB Logo" src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" id="IMDBLogo"></img>
          </a>
          <div id="AboutMovie">
          <ul><i class="fa fa-film"></i>  {items["Director"]}</ul>
          <ul><i class="fa fa-star"></i>  {items["Actors"]}</ul>
          <ul><i class="fa fa-bookmark"></i>  {items["Genre"]}</ul>
          <ul><h3>→ 95% recommanded</h3></ul>
          <ul>
            <Stars />
            <button onclick={console.log(Stars.rating)}>
              Validate
            </button>
          </ul>
          
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {displayData()}      
      {note()}
    </div>
  );
};

export default DataDisplayer;