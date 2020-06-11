import React, { useState, useEffect } from "react";
import ScrollBar from "./ScrollBar";
import Mood from "./MyMood";
import PosterDisplayer from "./Poster";
import "./MyMoodPage.css";



function MoodScrollBar() {

        const [genres, setGenres] = useState([{ value: "Sci-Fi", label: "Sci-Fi" },{ value: "Action", label: "Action" },{ value: "Adventure", label: "Adventure" }]);

    return (
        <div id="MyMoodScrollBar">
            {<ScrollBar handleChange={(e) => {setGenres(e);console.log(genres[0].value,genres[1].value,genres[2].value)}}/>}
            <div id="MyMoodResults">
                <p id="IntroPhrase">
                    Regarding your today mood, we recommand you to watch :
                </p>
                <h2>
                    {Mood(genres[0].value,genres[1].value,genres[2].value)}
                </h2>
                {PosterDisplayer(Mood(genres[0].value,genres[1].value,genres[2].value))}

            </div>
        </div>
    );

    
    };
    



export {MoodScrollBar};