const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const CardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  items: [
    {
      item: {},

      quantity: {
        type: String
      }
    }
  ],

  value: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model("card", CardSchema);
