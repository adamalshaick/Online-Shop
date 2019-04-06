const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  bio: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "item"
    }
  ],

  date: {
    type: String,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
