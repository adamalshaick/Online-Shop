const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  items: [],

  value: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model("cart", CartSchema);