import React from "react";
import "./Searchbar.css";

const Searchbox = (props) => {
    return(
        <input type = 'search'
        className = 'search'
        id="SearchBar"
        placeholder="Rechercher un film"
        onChange={props.handleChange}
        />
    )
}; 

export default Searchbox;

