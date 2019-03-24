const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CartSchema = new Schema({
  id: {
    type: String
  },

  cart: [
    {
      type: Schema.ObjectId,
      ref: "item"
    }
  ]
});

module.exports = Cart = mongoose.model("cart", CartSchema);
