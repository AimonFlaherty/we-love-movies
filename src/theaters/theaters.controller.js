const theatersService = require("./theaters.service");
const reduceProperties = require("../utils/reduce-properties");

async function getTheaters(req, res, next){ 
    res.locals.theaters = await theatersService.list();
    return next();
}
function addMovies(req, res, next){
    let theaters = res.locals.theaters;
    const reduceMT = reduceProperties("theater_id", {
        "movie_id": ["movies", null, "movie_id"],
        "title": ["movies", null, "title"],
        "rating": ["movies", null, "rating"],
        "runtime_in_minutes": ["movies", null, "runtime_in_minutes"],
        "description": ["movies", null, "description"],
        "image_url": ["movies", null, "image_url"],
        "created_at": ["movies", null, "created_at"],
        "updated_at": ["movies", null, "updated_at"],
        "is_showing": ["movies", null, "is_showing"],
        "theater_id": ["movies", null, "theater_id"],
    });
    theaters = reduceMT(theaters)
    //console.log(theaters);
    res.json({data: theaters});
} 

module.exports = {
    list: [getTheaters, addMovies],
}