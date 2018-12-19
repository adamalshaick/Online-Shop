const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  text: {
    type: String,
    required: true
  },

  price: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  itemImage: {
    type: String
  },
  /*
  photo: {
    type: String,
    required: true
  },

  price: {
    type: String,
    required: true
  },
*/
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model("item", ItemSchema);
