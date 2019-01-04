const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const multer = require("multer");
const path = require("path");

// Item model
const Item = require("../../models/Item");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validatePostInput(req.body);

    // // Check Validation
    // if (!isValid) {
    //   // If any errors, send 400 with errors object
    //   return res.status(400).json(errors);
    // }

    Profile.findById(req.params.id)
      .then(profile => {
        const itemId = {
          item: req.body.id
        };

        res.json({ msg: itemId });
        // Add to comments array
        profile.card.items.unshift(itemId);

        // Save
        itemId.save().then(itemId => res.json(itemId));
      })
      .catch(err => res.status(404).json({ postnotfound: "No post found" }));
  }
);

module.exports = router;
