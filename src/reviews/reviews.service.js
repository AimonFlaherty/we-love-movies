const knex = require("../db/connection");

function read(reviewId){
    return knex("reviews").select("*").where("review_id", reviewId).first();
}

function destroy(review_id){
    return knex("reviews").where({review_id}).del();
}

function update(updateReview){
    return knex("reviews")
      .select("*")
      .where("review_id", updateReview.review_id )
      .update(updateReview, "*");
}

function readCritic(criticId){
    return knex("critics").select("*").where("critic_id", criticId).first();
}

module.exports = {
    read,
    update,
    readCritic,
    delete: destroy
}