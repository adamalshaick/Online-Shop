const express = require("express");
const router = express.Router();
const passport = require("passport");

// Controllers
const itemsController = require("../../controllers/itemsController");

// @route GET api/items
// @desc Get items
// @access Public
router.get("/", (req, res) => {
  itemsController.getItems(req, res);
});

// @route POST api/items
// @desc Add item for sale
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    itemsController.sellItem(req, res);
  }
);

// @route DELETE api/items/:id
// @desc Delete item
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    itemsController.deleteItem(req, res);
  }
);

module.exports = router;
