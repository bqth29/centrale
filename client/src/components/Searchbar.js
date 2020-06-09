import React from "react";
import "./Searchbar.css";

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
            
                <input type='text' id="SearchBar"
                    value={this.state.search}
                   
                    onChange={this.updateSearch.bind(this)}
                    />
            
        );
    };
};

export default Searchbar;

