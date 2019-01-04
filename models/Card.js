const mongoose = require("mongoose");
const Card = mongoose.Schema;

//Create Schema
const CardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  items: [
    {
      item: {
        type: Schema.Types.ObjectId,
        ref: "item"
      }
    }
  ],

  value: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model("card", ItemSchema);
