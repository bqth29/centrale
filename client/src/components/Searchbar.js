import React from "react";
import "./Searchbar.css";

const Searchbox = (props) => {
    return(
        <input type = 'search'
        className = 'search'
        id="SearchBar"
        placeholder="Find a movie"
        onChange={props.handleChange}
        />
    )
}; 

export default Searchbox;

