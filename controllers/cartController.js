const mongoose = require("mongoose");
const passport = require("passport");
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
  }
};
