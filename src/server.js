require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
//const cors = require("cors");

const app = express();
//app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(3333);
    console.log("listening on port 3333");
  })
  .catch((err) => console.log(err));

//req.query = access query params(to filter)(POST)
//req.params. = access route params(to edit/delete)(PUT)
//req.body = access body of request(to add and edit)

app.use(express.json());
app.use(routes);

//app.listen(process.env.PORT || 3333);
