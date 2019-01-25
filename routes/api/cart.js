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

// @route   DELETE api/cart
// @desc    Remove item from cart
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // // Check to see if item exists
        profile.cart.items.forEach(item => console.log(item._id.toString()));
        if (
          profile.cart.items.filter(item => item._id.toString() === req.body.id)
            .length === 0
        ) {
          return res.status(404).json({ itemnotexists: "Item doesn't exist" });
        }
        // Get remove index
        const removeIndex = profile.cart.items
          .map(item => item._id.toString())
          .indexOf(req.body.id);

        //Splice comment out of array
        profile.cart.items.splice(removeIndex, 1);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err =>
        res.status(404).json({ profilenotfound: "No profile found" })
      );
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
