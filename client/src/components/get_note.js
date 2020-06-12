
import React, { useState, useEffect } from "react";

function note(){



    const url = 'https://yqm2haavja.execute-api.eu-west-1.amazonaws.com/dev/items/Avatar';
    


    const request =new Request (url, {
        method: 'GET',
    });
    
    fetch(request)
    .then( response =>  response.json())
   

    } 


    
    
    
export default note; 
    