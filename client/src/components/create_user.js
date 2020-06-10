
function Rajout(){

const url = 'https://yqm2haavja.execute-api.eu-west-1.amazonaws.com/dev/items';

const user = {
    user_id : "Jean-Marc ",
    film_id: "The Lion King", 
    note : "4" 
};


const request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(user)
});
fetch(request)
    .then(res => res.json())
    .then(res => console.log(res));

}

export default Rajout; 




