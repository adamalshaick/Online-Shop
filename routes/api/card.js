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
    const { errors, isValid } = validateCardInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    Item.findOne({ _id: req.body.id })
      .then(item => {
        return Promise.all([item, Card.findOne({ user: req.user.id })]);
      })
      .then(results => {
        const item = results[0];
        const card = results[1];

        if (item) {
          if (card) {
            card.items.some(element => {
              card.value = +card.value + +req.body.price;
              if (element.item === req.body.id) {
                element.quantity = +element.quantity + +1;
                card.save().then(card => res.json(card));
                return element;
              } else {
                card.items.unshift({ item: req.body.id, quantity: 1 });
                card.save().then(card => res.json(card));
                return element;
              }
            });
          } else {
            const cardFields = {
              user: req.user.id,
              items: [{ item: req.body.id, quantity: 1 }],
              value: req.body.price
            };

            new Card(cardFields).save().then(card => res.json(card));
          }
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
    Card.findOne({ user: req.user.id }).then(card => {
      if (card) {
        res.json(card);
      } else {
        res.json("There are no items on your card yet.");
      }
    });
  }
);

module.exports = router;
