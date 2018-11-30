const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Item model
const Item = require("../../models/Item");
// Profile model
const Profile = require("../../models/Profile");

// Validation
const validateItemInput = require("../../validation/item");

// @route GET api/items/test
// @desc Tests items route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "items works" }));

// @route GET api/items
// @desc Get items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => res.status(404).json({ noitemsfound: "No items found" }));
});

// @route GET api/items/:id
// @desc Get item by id
// @access Public
router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(err =>
      res.status(404).json({ noitemfound: "No item found with that ID" })
    );
});

// @route POST api/items
// @desc Create item
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateItemInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    const newItem = new Item({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newItem.save().then(item => res.json(item));
  }
);

// @route DELETE api/items/:id
// @desc Delete item
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Item.findById(req.params.id)
        .then(item => {
          // Check for item owner
          if (item.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }

          //Delete
          item.remove().then(() => res.json({ succes: true }));
        })
        .catch(err => res.status(404).json({ itemnotfound: "No item found" }));
    });
  }
);

module.exports = router;
