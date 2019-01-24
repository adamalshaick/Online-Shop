const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Item model
const Item = require("../../models/Item");

// Card model
const Cart = require("../../models/Cart");

// @route   POST api/cart
// @desc    Add item to cart
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Cart.findOne({ user: req.user.id })
      .then(cart => {
        if (cart) {
          cart.items.unshift(req.body);
          cart.value = +card.value + +req.body.price;
          cart.save().then(cart => res.json(cart));
        } else {
          const cartFields = {
            user: req.user.id,
            items: [req.body],
            value: req.body.price
          };

          new Cart(cartFields).save().then(cart => res.json(cart));
        }
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
    Cart.findOne({ user: req.user.id })
      .then(cart => {
        res.json(cart);
      })
      .catch(err => {
        res.json(err);
      });
  }
);

module.exports = router;
