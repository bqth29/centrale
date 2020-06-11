import React, { useState, useEffect } from "react";
import ScrollBar from "./ScrollBar";
import Mood from "./MyMood";
import PosterDisplayer from "./Poster";
import "./MyMoodPage.css";



function MoodScrollBar() {

        const [genres, setGenres] = useState([{ value: "Sci-Fi", label: "Sci-Fi" },{ value: "Action", label: "Action" },{ value: "Adventure", label: "Adventure" }]);
        function GoodSize() {
        return (genres.map(genre => genre.value))
        }
        
    return (
        <div id="MyMoodScrollBar">
            {<ScrollBar handleChange={(e) => {setGenres(e);console.log(...GoodSize())}}/>}
            <div id="MyMoodResults">
                <p id="IntroPhrase">
                    Regarding your today mood, we recommand you to watch :
                </p>
                <h2>
                    {Mood(...GoodSize())}
                </h2>
                {PosterDisplayer(Mood(...GoodSize()))}

            </div>
        </div>
    );

    
    };
    



export {MoodScrollBar};