# Project: we-love-movies

A simple web server that fulfills requests about movies, theaters and reviews 
##
## Learing Objectives

- Run tests from the command line.
- Use common middleware packages.
- Receive requests through routes.
- Access relevant information through route parameters.
- Build an API following RESTful design principles.
- Write custom middleware functions.
- Connecting to postgreSQl database
##
## Skills Used

- RESTful API
- Express API
- Knex migrations
- Robust Error Handling
- HTTP status codes
##
## Requests
#### Movies
```
GET movies/:movieId/theaters
returns all theaters that are playing specified movie 
```
```
GET movies/:movieId/reviews
returns all reviews for specified movie 
```
```
GET movies/:movieId
returns specified movie 
```
```
GET movies/
returns all movies 
```
#### Reviews
```
DELETE reviews/:reviewId
deletes specified review
```
```
PUT reviews/:reviewId
returns updated specied review 
```
#### Theaters
```
GET theaters/
returns all theaters 
```
##
## Data Examples
Movies
```
{
      title: "Spirited Away",
      runtime_in_minutes: 125,
      rating: "PG",
      description:
        "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town...",
      image_url:
        "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
    }
```
Critics
```
{
      preferred_name: "Chana",
      surname: "Gibson",
      organization_name: "Film Frenzy",
    }
```
Theaters
```
{
      name: "Regal City Center",
      address_line_1: "801 C St.",
      address_line_2: "",
      city: "Vancouver",
      state: "WA",
      zip: "98660",
    }
```
Reviews
```
{
      content: "Lorem markdownum priores iactate receptus margine in motu ferreus pastor. Teneat
tua opifex regina, adest; similisque nec, me convivia ortus.

Est sontes praemia fatorum diversosque innubere rursus. Tanto inter commenta
tremulasque tergo donec Apollinei mearum: Hector colorum horruit.

> Cur repulsa matrem frequentes parvum coniuge ad nisi leto, ira. Orbis levatus
> o coniugis longis confinia *bello* rursus quem Atridae indulgere! Sanguine o
> operi flammas sorores suffundit et ilia. Nais edentem tamen. Acta munera enixa
> ad terram!

Sint sed per oppugnant Medusae Pagasaeae undique rebus cernit terram delituit
dilapsa tigres. Ait omne conatur nomen cumque, ad Minoa magna *dolentes*,
ageret. Sum addat, et unum iunge, aberant his indigenae facundia?

> Perdidit astra, si maternis sibi, Phoebi protinus senecta digitos. Atque
> suique **Lyrnesia**, prosunt suae mihi aqua, te!

Subsedit tantaque vulnera totiens aptos vivit digna pectoraque mutua. Duro ante
tibi perhorruit praedelassat simulat turis loco hunc dederat viscera scilicet
transitus quam longius aenea, concussaque hoc mille.

Ut erat. Tibi Themin corpore saepes.",
      score: 8.0,
      critic_id: 1,
      movie_id:
        15,
    }
```

##
