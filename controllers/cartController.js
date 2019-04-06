const mongoose = require("mongoose");

// models
const User = require("../models/User");

module.exports = {
  addItemToCart: (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        user.cart.unshift(req.params.id);
        user.save().then(user => res.json(user));
      })
      .catch(err => {
        res.json(err);
      });
  },

  deleteItemFromCart: (req, res) => {
    User.findById(req.user.id)
      .then(user => {
        // Check to see if item is in cart
        if (
          user.cart.filter(item => item._id.toString() === req.params.id)
            .length === 0
        ) {
          return res.status(404).json({ itemnotexists: "Item doesn't exist" });
        }
        // Get remove index
        const removeIndex = user.cart
          .map(item => item._id.toString())
          .indexOf(req.params.id);

        //Splice item out of array
        user.cart.splice(removeIndex, 1);
        user.save().then(user => res.json(user));
      })
      .catch(err =>
        res.status(404).json({ profilenotfound: "No profile found" })
      );
  },

  getCart: (req, res) => {
    User.findById(req.user.id)
      .populate("cart")
      .then(user => {
        res.json(user.cart);
      })
      .catch(err => {
        res.json(err);
      });
  }
};
