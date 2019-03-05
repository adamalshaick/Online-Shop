const mongoose = require("mongoose");

// models
const Profile = require("../models/Profile");

// Services
const cartService = require("../services/cartService");

module.exports = {
  addItemToCart: (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        profile.cart.items.unshift(cartService.itemFields(req.body));
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => {
        res.json(err);
      });
  },

  deleteItemFromCart: (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Check to see if item is in cart
        if (
          profile.cart.items.filter(
            item => item._id.toString() === req.params.id
          ).length === 0
        ) {
          return res.status(404).json({ itemnotexists: "Item doesn't exist" });
        }
        // Get remove index
        const removeIndex = profile.cart.items
          .map(item => item._id.toString())
          .indexOf(req.params.id);

        //Splice item out of array
        profile.cart.items.splice(removeIndex, 1);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err =>
        res.status(404).json({ profilenotfound: "No profile found" })
      );
  },

  getCart: (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        res.json(profile.cart.items);
      })
      .catch(err => {
        res.json(err);
      });
  }
};
