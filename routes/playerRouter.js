const express = require("express");
const bodyParser = require("body-parser");

const playerRouter = express.Router();

playerRouter.use(bodyParser.json());

playerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end("Will send all the players to you!");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the player: " + req.body.name + " with age: " + req.body.age
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /players");
  })
  .delete((req, res, next) => {
    res.end("Deleting all players");
  });

playerRouter
  .route("/:playerID")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.end(`Get player has ID: ${req.params.playerID}`);
  })
  .post((req, res, next) => {
    res.end("POST operation not supported on /players/" + req.params.playerID);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.write("Updating the player has ID: " + req.params.playerID + "\n");
    res.end(
      "Will update the player: " + req.body.name + " with age: " + req.body.age
    );
  })
  .delete((req, res, next) => {
    res.end("Deleting player has ID: " + req.params.playerID);
  });

module.exports = playerRouter;
