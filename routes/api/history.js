const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const router = express.Router();

// Profile model
const Profile = require("../../models/Profile");

// @route POST api/history/bought/:id
// @desc  Add item to bought array
// @access Private
router.post(
  "/bought/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        profile.itemsBought.unshift(req.params.id);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => {
        res.json(err);
      });
  }
);

// @route POST api/history/sold/:id
// @desc  Add item to sold array
// @access Private
router.post(
  "/sold/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        profile.itemsSold.unshift(req.params.id);
        profile.save().then(profile => res.json(profile));
      })
      .catch(err => {
        res.json(err);
      });
  }
);

module.exports = router;
