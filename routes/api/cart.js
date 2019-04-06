const express = require("express");
const router = express.Router();
const passport = require("passport");

// controllers
const cartController = require("../../controllers/cartController");

// @route   POST api/cart
// @desc    Add item to cart
// @access  Private
router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    cartController.addItemToCart(req, res);
  }
);

// @route   DELETE api/cart/:id
// @desc    Remove item from cart
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    cartController.deleteItemFromCart(req, res);
  }
);

// @route   GET api/cart
// @desc    Get items from cart
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    cartController.getCart(req, res);
  }
);

module.exports = router;
