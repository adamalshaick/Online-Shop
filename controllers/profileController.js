const mongoose = require("mongoose");
const passport = require("passport");

// services
const uploadService = require("../services/uploadService");

// models
const Item = require("../models/Item");
const Profile = require("../models/Profile");

const asyncMiddleware = require("../services/asyncMiddleware");

// Validation

module.exports = {
  createProfile: (req, res) => {
    uploadService.upload(req, res, error => {
      const { errors, isValid } = validateProfileInput(
        req.body,
        req.file,
        error
      );

      // Check Validation
      if (!isValid) {
        // Return any errors with 400 status
        return res.status(400).json(errors);
      }

      let file;
      if (req.file) {
        file = req.file.filename;
      } else {
        file = "placeholder.png";
      }

      const createFields = profileService.createFields(
        req.user.id,
        req.body,
        file
      );

      const updateFields = profileService.updateFields(req.user.id, req.body);

      Profile.findOne({ user: req.user.id }).then(profile => {
        if (profile) {
          //Update
          Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: updateFields },
            { new: true }
          ).then(profile => res.json(profile));
        } else {
          // Create

          // Check if handle exists
          Profile.findOne({ handle: createFields.handle }).then(profile => {
            if (profile) {
              errors.handle = "That handle already exists";
              res.status(400).json(errors);
            }

            // Save Profile
            new Profile(createFields).save().then(profile => res.json(profile));
          });
        }
      });
    });
  },

  getProfile: (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  },

  getAllProfiles: (req, res) => {
    const errors = {};
    Profile.find()
      .populate("user", ["name", "avatar"])
      .sort({ date: -1 })
      .then(profiles => {
        if (!profiles) {
          errors.noprofile = "There are no profiles";
          return res.status(404).json(errors);
        }
        res.json(profiles);
      })
      .catch(err => res.status(404).json({ profile: "There are no profiles" }));
  },

  getProfileByHandle: (req, res) => {
    Profile.findOne({ handle: req.params.handle })
      .populate("user", ["name", "avatar"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
};
