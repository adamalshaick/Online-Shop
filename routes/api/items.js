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

// @route POST api/items/like/:id
// @desc Like item
// @access Private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Item.findById(req.params.id)
        .then(item => {
          if (
            item.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "You already liked this item" });
          }

          // Add user id to likes array
          item.likes.unshift({ user: req.user.id });

          item.save().then(item => res.json(item));
        })
        .catch(err => res.status(404).json({ itemnotfound: "No item found" }));
    });
  }
);

// @route POST api/items/unlike/:id
// @desc Unlike item
// @access Private
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Item.findById(req.params.id)
        .then(item => {
          if (
            item.likes.filter(like => like.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ notliked: "You have not yet liked this item" });
          }

          // Get remove index

          const removeIndex = item.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          // Splice out of array
          item.likes.splice(removeIndex, 1);

          // Save
          item.save().then(item => res.json(item));
        })
        .catch(err => res.status(404).json({ itemnotfound: "No item found" }));
    });
  }
);

// @route POST api/items/comment/:id
// @desc Add comment to item
// @access Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateItemInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    Item.findById(req.params.id)
      .then(item => {
        const newComment = {
          text: req.body.text,
          name: req.body.name,
          avatar: req.body.avatar,
          user: req.user.id
        };

        // Add to comments array
        item.comments.unshift(newComment);

        // Save
        item.save().then(item => res.json(item));
      })
      .catch(err => res.status(404).json({ itemnotfound: "No item found" }));
  }
);

// @route DELETE api/items/comment/:id/:comment_id
// @desc Delete comment
// @access Private
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Item.findById(req.params.id)
      .then(item => {
        // Check to see if comment exists
        if (
          item.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexists: "Comment doesn't exist" });
        }

        // Get remove index
        const removeIndex = item.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        //Splice comment out of array
        item.comments.splice(removeIndex, 1);
        item.save().then(item => res.json(item));
      })
      .catch(err => res.status(404).json({ itemnotfound: "No item found" }));
  }
);
module.exports = router;
