import React from "react";

class Searchbar extends React.Component {
    constructor() {
        super();
        this.state={
            search : 'Chercher un film'
        };
    };

    updateSearch(event) {
        this.setState({search: event.target.value});
        
    };

    render(){
        return(
            <div>
                <input type='text'
                    value={this.state.search}
                   
                    onChange={this.updateSearch.bind(this)}
                    />
            </div>
        );
    };
};

export default Searchbar;

