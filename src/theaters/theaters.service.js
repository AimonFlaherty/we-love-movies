const knex = require("../db/connection");

function list(){
    return knex("theaters").join("movies_theaters", "theaters.theater_id", "=", "movies_theaters.theater_id")
    .join("movies", "movies.movie_id", "=", "movies_theaters.movie_id")
    .select(knex.raw("distinct *"));
}
 
function readMovies(theaterId){
    return knex("movies").join("movies_theaters", "movies.movie_id", "=", "movies_theaters.movie_id")
    .select(knex.raw("distinct movies.*"))
    .where("movies_theaters.theater_id", theaterId);
}

module.exports = {
    list,
    
}