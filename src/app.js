//if (process.env.USER) require("dotenv").config();
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();


const movieRouter = require("./movies/movies.router");
const reviewRouter = require("./reviews/reviews.router");
const theaterRouter = require("./theaters/theaters.router");

app.use(express.json());
app.use(cors());
app.use("/movies", movieRouter);
app.use("/theaters", theaterRouter);
app.use("/reviews", reviewRouter);

// Not found handler
app.use((req, res, next) => {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
});
  
// Error handler
app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
});

module.exports = app;
