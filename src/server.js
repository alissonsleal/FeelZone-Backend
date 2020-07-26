const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://ownerUser:QsKwuF951BGs3pbd@defaultreactnativeapp.dcfww.mongodb.net/msgApp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//req.query = access query params(to filter)(POST)
//req.params. = access route params(to edit/delete)(PUT)
//req.body = access body of request(to add and edit)

app.use(express.json());
app.use(routes);

app.listen(3333);
