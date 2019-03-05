const express = require("express");
const router = express.Router();
const passport = require("passport");

// Controllers
const usersController = require("../../controllers/usersController");

//@route    POST api/users/register
//@desc     Register user
//@access   Public
router.post("/register", (req, res) => {
  usersController.register(req, res);
});

//@route    GET api/users/login
//@desc     Login User / Returning JWT Token
//@access   Public
router.post("/login", (req, res) => {
  usersController.login(req, res);
});

//@route    GET api/users/current
//@desc     Return current user
//@access   Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    usersController.getCurrent(req, res);
  }
);

module.exports = router;
