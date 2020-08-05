const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const TextSchema = new mongoose.Schema(
  {
    /*

  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  
  */
    title: { type: String, required: true },
    body: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

TextSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Text", TextSchema);
