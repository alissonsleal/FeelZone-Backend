require("dotenv").config();

const tmi = require("tmi.js");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.PORT || 3333);
    console.log("listening on port 3333");
  })
  .catch((err) => console.log(err));

//req.query = access query params(to filter)(POST)
//req.params. = access route params(to edit/delete)(PUT)
//req.body = access body of request(to add and edit)

app.use(express.json());
app.use(routes);

//app.listen(process.env.PORT || 3333);

/*




//Other app that i'm running alongside the backend
// Glitch expects a web server so we're starting express to take care of that.
// The page shows the same information as the readme and includes the remix button.




*/
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

let listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

// Setting options for our bot, disable debug output once your up and running.
let options = {
  options: {
    debug: false,
  },
  connection: {
    cluster: "aws",
    reconnect: true,
  },
  identity: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  },
  channels: ["stereonline", "gaules", "gstv1", "fuslie"],
};

// Set up our new TMI client and connect to the server.
let client = new tmi.client(options);
client.connect();

// We have debug enabled now but if not we want some sort of confirmation
// we've connected to the server.

client.on("connected", (address, port) => {
  console.log(`Connected to ${address}:${port}`);
});

// This simple bot will simply monitor chat logging for instances of '!twitter' or '!github'.
//

client.on("chat", (channel, user, message, self) => {
  switch (message) {
    case "!twitter":
      client.action(
        "Alissonsleal",
        `${user["display-name"]} you can find it at twitter.com/shindakun`
      );
      break;
    case "!github":
      client.action(
        "Alissonsleal",
        `${user["display-name"]} you can find it at github.com/shindakun`
      );
      break;
    default:
      break;
  }
});
