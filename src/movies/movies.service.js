const knex = require("../db/connection");

function list() {
  return knex("movies").select("*");
  
}

function listActive() {
  return knex("movies").join("movies_theaters", "movies.movie_id", "=", "movies_theaters.movie_id")
    .select(knex.raw("distinct movies.*"))
    .where("movies_theaters.is_showing", true);
}

function read(movieId){
  //return knex("movies").select("*");
  return knex("movies").select("*").where("movie_id", movieId);
}

function readReviews(movieId){
  return knex("movies").join("reviews", "movies.movie_id", "=", "reviews.movie_id")
    .select("reviews.*")
    .where("movies.movie_id", movieId);
}

function readCritic(criticId){
  return knex("critics").select("*").where("critic_id", criticId);
}

function readTheaters(movieId){
  
  return knex("movies")
    .join("movies_theaters", "movies.movie_id", "=", "movies_theaters.movie_id")
    .join("theaters", "theaters.theater_id", "=", "movies_theaters.theater_id")
    .select("theaters.*")
    .where("movies.movie_id", movieId)
}

module.exports = {
  list,
  listActive,
  read,
  readReviews,
  readTheaters,
  readCritic
};