import React from "react";
import {useState} from "react";
import StarRatings from 'react-star-ratings';
import Rajout from "./create_user";
import DataDisplayer from "./MovieData";

 
 
function Stars (props) {
    
    const[rating,setRating]=useState(0);
    console.log({props})
    
    return (

           
            <StarRatings
            
                rating={rating}
                changeRating={(value) => {setRating(value);Rajout(props.movie,value)}} 
                starDimension="35px"
                starSpacing="10px"
                starHoverColor='gold'
                starRatedColor='gold'
                numberOfStars={5}
            />
    );
    

}


export default Stars

