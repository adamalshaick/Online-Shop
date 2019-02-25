const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ReviewSchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  buyer: {
    type: String,
    required: true
  },

  avatar: {
    type: String,
    required: true
  },

  text: {
    type: String,
    required: true
  },

  rate: {
    type: String,
    required: true
  }
});

module.exports = Review = mongoose.model("review", ReviewSchema);
