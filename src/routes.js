const express = require("express");
const SessionController = require("./controllers/SessionController");
const TextController = require("./controllers/TextController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);
routes.post("/texts", TextController.store);
routes.get("/texts", TextController.index);
routes.get("/texts/:id", TextController.show);
routes.put("/texts/:id", TextController.updateOne);
routes.delete("/texts/:id", TextController.destroy);

module.exports = routes;
