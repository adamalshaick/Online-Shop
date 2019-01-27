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
        const itemFields = {
          user: req.body.user,
          text: req.body.text,
          price: req.body.price,
          title: req.body.title,
          itemImage: req.body.itemImage
        };

        profile.cart.items.unshift(itemFields);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => {
        res.json(err);
      });
  }
);

// @route   DELETE api/cart/:id
// @desc    Remove item from cart
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // // Check to see if item is in cart
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
