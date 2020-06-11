import React, { useState, useEffect } from "react";
import ScrollBar from "./ScrollBar";
import Mood from "./MyMood";

const MoodScrollBar = () => {
    return (
        <div id="MyMoodScrollBar">
            {ScrollBar()}
        </div>
    )
}

export default MoodScrollBar;