const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Item model
const Item = require("../../models/Item");

const Profile = require("../../models/Profile");

// @route   POST api/cart
// @desc    Add item to cart
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        profile.cart.items.unshift(req.body._id);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => {
        res.json(err);
      });
  }
);

// @route   GET api/cart
// @desc    Get items from cart
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        res.json(profile.cart.items);
      })
      .catch(err => {
        res.json(err);
      });
  }
);

module.exports = router;
