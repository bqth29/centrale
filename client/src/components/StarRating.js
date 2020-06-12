import React from "react";
import {useState,useEffect} from "react";
import StarRatings from 'react-star-ratings';
import Rajout from "./create_user";
import DataDisplayer from "./MovieData";
import {
    useParams
  } from "react-router-dom";




function Stars (props) {
    let {name} = useParams();

    const [notef, setNotef] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchAgain, setFetchAgain] = useState(false);
    const[rating,setRating]=useState(0)

    const url = 'https://el31uwsec0.execute-api.eu-west-1.amazonaws.com/dev/items/'+name;

    const request =new Request (url, {
        method: 'GET',
    });
    

    const fetchExample = async() => {
        const response = await fetch((request));
        const responseJson = await response.json();
        setNotef(responseJson["note"]);
        setRating(notef);
    }


    useEffect(() => {
        setIsLoaded(false);
        fetchExample();
        // The useEffect hook will retrigger every time an element in the dependency array changes.
        // changes = strict egality, so beware when mutating objects
      }, [fetchAgain,notef]);




     
    console.log(notef)


    

    
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

