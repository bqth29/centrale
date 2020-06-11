const mood_movies = {
    "Star Wars: Episode I - The Phantom Menace": ["Sci-Fi", "Action", "Adventure"],
    "Harry Potter and the Sorcerer's Stone": ["Fantastic", "Action", "Fantasy"],
    "The Lord of the Rings: The Fellowship of the Ring": ["Fantasy", "Action", "Adventure"],
    "Indiana Jones and the Raiders of the Lost Ark": ["Adventure", "Action", "Comedy"],
    "Skyfall": ["Action", "Polar", "Crime"],
    "The Lion King": ["Children", "Comedy", "Musical"],
    "Avengers: Endgame": ["Heroes", "Action", "Fantastic"],
    "Schindler's List": ["Drama", "Crime", "Violence"],
    "Gone Girl": ["Thriller", "Drama", "Crime"],
    "The Naked Gun": ["Comedy", "Polar", "Action"],
    "The Notebook": ["Romance", "Drama", "Comedy"],
    "La La Land": ["Musical", "Romance", "Drama"],
    "It": ["Horror", "Crime", "Violence"],
    "The Godfather": ["Crime", "Drama", "Polar"],
    "Kill Bill": ["Violence", "Crime", "Horror"],
    "Once Upon a Time in the West": ["Western", "Action", "Adventure"],
    "Murder on the Orient Express": ["Polar", "Crime", "Adventure"],
    "Maverick": ["Comedy", "Western", "Action"]
}


function recom(film,genre1,genre2,genre3){
    var  s = 0;
    if (mood_movies[film][0]==genre1) { s +=9 };
    if (mood_movies[film][0]==genre2) { s += 6 };
    if (mood_movies[film][0]==genre3) { s += 3 };
    if (mood_movies[film][1]==genre1) { s +=6 };
    if (mood_movies[film][1]==genre2) { s += 4 };
    if (mood_movies[film][1]==genre3) { s += 2 };
    if (mood_movies[film][2]==genre1) { s +=3 };
    if (mood_movies[film][2]==genre2) { s += 2 };
    if (mood_movies[film][2]==genre3) { s += 1 };
    return(s)
}

function mood(genre1,genre2,genre3){
    var best = "";
    var score = 0;

    for(var f in mood_movies){ 
        if (recom(f,genre1,genre2,genre3) > score ){
            score=recom(f,genre1,genre2,genre3);
            best=f
        };
    
    };
    return(best)

}

export default mood;