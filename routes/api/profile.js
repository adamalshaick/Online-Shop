const express = require("express");
const router = express.Router();
const passport = require("passport");

// Controllers
const profileController = require("../../controllers/profileController");

// @route GET api/profile
// @desc Get current users profile
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    profileController.getProfile(req, res);
  }
);

// @route GET api/profile/all
// @desc Get all profiles
// @access Public
router.get("/all", (req, res) => {
  profileController.getAllProfiles(req, res);
});

// @route GET api/profile/handle/:handle
// @desc Get profile by handle
// @access Public
router.get("/handle/:handle", (req, res) => {
  profileController.getProfileByHandle(req, res);
});

// @route GET api/profile/user/:user_id
// @desc Get profile by user ID
// @access Public

router.get("/user/:user_id", (req, res) => {
  profileController.getProfileById(req, res);
});

// @route POST api/profile
// @desc Create or edit user profile
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    profileController.createProfile(req, res);
  }
);

// @route GET api/profiles
// @desc Get profiles
// @access Public
router.get("/profiles", (req, res) => {
  profileController.getProfiles(req, res);
});

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    deleteProfile(req, res);
  }
);

module.exports = router;
