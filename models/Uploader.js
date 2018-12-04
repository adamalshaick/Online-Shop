const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UploaderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  itemImage: {
    type: String
  }
});

module.exports = Uploader = mongoose.model("uploader", UploaderSchema);
