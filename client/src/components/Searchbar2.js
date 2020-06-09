import React from "react";
import "./Searchbar.css";
import MoviesDisplayer from "./MovieQuery";

class Searchbar extends React.Component {
    constructor() {
        super();
        this.state={
            search : 'Search a movie'
        };
    };

    updateSearch(event) {
        this.setState({search: event.target.value});
        
    };

    render(){
        return(
            <form action="/movies" method="POST">
                <input type='text' id="SearchBar"
                    placeholder={this.state.search}
                   
                    onChange={this.updateSearch.bind(this)}
                    />
                <input type="submit" value="Search" id="Search" />
            </form>        
            
        );
    };
};

export default Searchbar;

