const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Item model
const Item = require("../../models/Item");

// Card model
const Card = require("../../models/Card");

// Validation
const validateCardInput = require("../../validation/card");

// @route   POST api/card
// @desc    Add item to card
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateCardInput(req.body);

    // Check Validation
    // if (!isValid) {
    //   // If any errors, send 400 with errors object
    //   return res.status(400).json(errors);
    // }

    Card.findOne({ user: req.user.id })
      .then(card => {
        if (card) {
          card.items.unshift({ item: req.body });
          card.value = +card.value + +req.body.price;
          card.save().then(card => res.json(card));
        } else {
          const cardFields = {
            user: req.user.id,
            items: [{ item: req.body }],
            value: req.body.price
          };

          new Card(cardFields).save().then(card => res.json(card));
        }
      })

      .catch(err => {
        res.json(err);
      });
  }
);

// @route   GET api/card
// @desc    Get items from card
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Card.findOne({ user: req.user.id })
      .then(card => {
        res.json(card);
      })
      .catch(err => {
        res.json(err);
      });
  }
);

module.exports = router;
