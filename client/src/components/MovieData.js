import React, { useState, useEffect } from "react";
import "./MovieData.css";

const DataDisplayer = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [fetchAgain, setFetchAgain] = useState(false);
  
    const fetchExample = async () => {
      try {
        const response = await fetch("http://www.omdbapi.com/?apikey=5fee8133&t=Rogue One&r=json");
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
          <div id="AboutMovie">
          <p>Directed by : {items["Director"]}</p>
          <br></br>
          <p>Starring : {items["Actors"]}</p>
          <p>{items["Genre"]}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {displayData()}
    </div>
  );
};

export default DataDisplayer;