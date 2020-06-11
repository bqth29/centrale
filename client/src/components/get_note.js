
function note(){

    const url = 'https://yqm2haavja.execute-api.eu-west-1.amazonaws.com/dev/items/"The Lion King"';
    

    
    const request = new Request(url, {
        method: 'GET',
    });
    fetch(request)
        .then(res => res.json())
        .then(res => console.log(res));
    
    }
    
export default note; 
    