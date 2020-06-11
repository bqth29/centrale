import React, { useState, useEffect } from "react";
import "./MyMoodPage.css";



function PosterDisplayer(title) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [fetchAgain, setFetchAgain] = useState(false);
  
    const fetchExample = async () => {
      try {
        const response = await fetch("http://www.omdbapi.com/?apikey=5fee8133&t="+title+"&r=json");
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
  }, [fetchAgain,title]);

  const displayPoster = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (<span>
        <p id="plot">{items["Plot"]}</p>
        <div className="MovieData">
          <a id="MyMoodPoster" href={"/movies/"+items["Title"]}>
            <img alt={items["Title"]+" - Poster"} src={items["Poster"]}></img>
          </a> 
          
        </div>
        </span>
      );
    }
  };

  return (
    <div id="Blank">
      {displayPoster()}
    </div>
  );
};

export default PosterDisplayer;