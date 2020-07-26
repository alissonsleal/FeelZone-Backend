const mongoose = require("mongoose");

const TextSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  title: String,
  message: String,
});

module.exports = mongoose.model("Text", TextSchema);
