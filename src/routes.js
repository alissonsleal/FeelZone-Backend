const express = require("express");
const SessionController = require("./controllers/SessionController");
const TextController = require("./controllers/TextController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);
routes.post("/texts", TextController.store);

module.exports = routes;
