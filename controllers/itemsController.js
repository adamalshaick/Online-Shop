const mongoose = require("mongoose");

// models
const Item = require("../models/Item");

// Services
const uploadService = require("../services/uploadService");
const itemService = require("../services/itemService");
// Validation
const validateItemInput = require("../validation/item");

module.exports = {
  getItems: (req, res) => {
    Item.find()
      .sort({ date: -1 })
      .then(items => res.json(items))
      .catch(err => res.status(404).json({ noitemsfound: "No items found" }));
  },

  getItems: (req, res) => {
    Item.find()
      .sort({ date: -1 })
      .then(items => res.json(items))
      .catch(err => res.status(404).json({ noitemsfound: "No items found" }));
  },

  sellItem: (req, res) => {
    uploadService.upload(req, res, error => {
      const { errors, isValid } = validateItemInput(req.body, req.file, error);
      // Check Validation
      if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
      }
      const item = itemService.itemFields(req.body, req.user, req.file);
      const newItem = new Item({ item });
      newItem.save().then(item => res.json(item));
    });
  },

  deleteItem: (req, res) => {
    Item.findById(req.params.id)
      .then(item => {
        // Check for item owner
        if (item.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: "User not authorized" });
        }
        //Delete
        item.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ itemnotfound: "No item found" }));
  }
};
