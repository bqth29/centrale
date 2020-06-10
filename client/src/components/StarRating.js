import React from "react";
import {useState} from "react";
import StarRatings from 'react-star-ratings';
 

 
 
class Stars extends React.Component {

    constructor(props){
        super(props);
        this.state={rating:0};
        this.changeRating = this.changeRating.bind(this);
        
    }

   

    changeRating(rating) {
        this.setState({
          rating: rating
        })
      }

    render() {
        // aggregateRating = 2.35;
        return (
        <StarRatings
            rating={this.state.rating}
            changeRating={this.changeRating}
            starDimension="40px"
            starSpacing="15px"
            starHoverColor='gold'
            starRatedColor='gold'
            numberOfStars={5}
        />
        );
    }
}

export default Stars