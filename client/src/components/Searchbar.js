import React from "react";

const Searchbox = (props) => {
    return(
        <input tupe = 'search'
        className = 'search'
        placeholder="Rechercher un film"
        onChange={props.handleChange}
        />
    )
}; 

export default Searchbox;

