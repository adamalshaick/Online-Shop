const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },

  bio: {
    type: String
  },

  location: {
    type: String
  },

  profileImage: {
    type: String
  },

  cart: {
    items: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "users"
        },
        item: {
          type: Schema.Types.ObjectId,
          ref: "items"
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
          type: String,
          required: true
        }
      }
    ]
  },

  itemsBought: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "items"
      }
    }
  ],

  itemsSold: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "items"
      }
    }
  ],

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
