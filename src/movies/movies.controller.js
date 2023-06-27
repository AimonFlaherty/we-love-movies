const moviesService = require("./movies.service");

function list(req, res, next) {
  if(req.query.is_showing){
    moviesService
    .listActive()
    .then((data) =>{
      res.json({ data });
      return next();
    } )
    
    .catch(next);
  }
  else{
    moviesService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
  }
  
}

function movieExists(req, res, next){
  moviesService
    .read(req.params.movieId)
    .then((movie) => {
      if (movie.length != 0) {
        res.locals.movie = movie;
        return next();
        
      }
      next({ status: 404, message: `Movie cannot be found.` });
    })
    .catch(next);
}
function read(req, res, next){
  moviesService
    .read(req.params.movieId)
    .then((movie) => res.json({data: movie[0]}))
    .catch(next);
}

function readTheaters(req, res, next){
  moviesService
    .readTheaters(req.params.movieId)
    .then((movie) => {
      if (movie) {
        res.json({data: movie})
        return next();
      }
      next({ status: 404, message: `Movie cannot be found.` });
    })
    .catch(next);
}

function readReviews(req, res, next){
  moviesService
    .readReviews(req.params.movieId)
    .then((reviews) => {
      if (reviews) {
        res.locals.reviews = reviews;
        return next();
      }
      next({ status: 404, message: `Movie cannot be found.` });
    })
    .catch(next);
}

async function readCritics(req, res, next){
  const reviews = res.locals.reviews;
  for(let i = 0; i < reviews.length; i++){
    const critic = await moviesService.readCritic(reviews[i].critic_id);
    reviews[i].critic = critic[0];
  }
  res.json({data: reviews});
}

module.exports = {
  list,
  read: [movieExists, read],
  readReviews: [readReviews, readCritics],
  readTheaters
};
