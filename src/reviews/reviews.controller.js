const reviewsService = require("./reviews.service");

function reviewExists(req, res, next) {
    reviewsService
      .read(req.params.reviewId)
      .then((review) => {
        if (review) {
            res.locals.review = review;
            return next();
        }
        next({ status: 404, message: `Review cannot be found.` });
      })
      .catch(next);
}

async function update(req, res, next){
    const updateReview = {
        ...res.locals.review,
        ...req.body.data,
    };
    res.locals.review = await reviewsService.update(updateReview);
    return next();
}

async function attatchCritic(req, res, next){
    const review = res.locals.review;
    const critic = await reviewsService.readCritic(review.critic_id);
    review.critic = critic;
    res.json({data: review});
}

function destroy(req, res, next){
    reviewsService
    .delete(res.locals.review.review_id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
    update: [reviewExists, update, reviewExists, attatchCritic],
    delete: [reviewExists, destroy]
}