import React from "react";
import {useState} from "react";
import StarRatings from 'react-star-ratings';
 

 
 
function Stars () {
    
    const[rating,setRating]=useState(0);
    {console.log(rating)}    
     return (

           
            <StarRatings
            
                rating={rating}
                changeRating={setRating} 
                starDimension="35px"
                starSpacing="10px"
                starHoverColor='gold'
                starRatedColor='gold'
                numberOfStars={5}
            />
    );
    

}


export default Stars

