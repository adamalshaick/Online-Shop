const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const router = express.Router();

// Review model
const Review = require("../../models/Review");

// Validation
const validateReviewInput = require("../../validation/review");

// @route POST api/review/:id
// @desc  Add review
// @access Private
router.post(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReviewInput(req.body);
    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    const newReview = new Review({
      text: req.body.text,
      rate: req.body.rate,
      seller: req.params.id,
      buyer: req.body.name
    });
    newReview.save().then(review => res.json(review));
  }
);

// @route GET api/reviews
// @desc  Get reviews
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Review.find()
      .then(reviews => res.json(reviews))
      .catch(err =>
        res.status(404).json({ noreviewsfound: "No reviews found" })
      );
  }
);

module.exports = router;
