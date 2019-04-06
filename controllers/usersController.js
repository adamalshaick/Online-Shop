const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
const mongoose = require("mongoose");

//Load Input Validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Profile model
const User = require("../models/User");

module.exports = {
  register: async (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Check if email exists, if not save registered user into db
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          errors.email = "email already exists";
          return res.status(400).json(errors);
        } else {
          const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            bio: req.body.bio,
            location: req.body.location
          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, async (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              try {
                const userData = await newUser.save();
                res.json(userData);
              } catch (error) {
                res.json(error);
              }
            });
          });
        }
      })
      .catch(err => {
        res.json(err);
      });
  },

  login: (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    //Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
      // Check for user
      if (!user) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      }

      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          //User Matched

          const payload = { id: user.id, name: user.name }; // Create JWT Payload

          //Sign Token
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 86400 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          errors.password = "Password incorrect";
          return res.status(400).json(errors);
        }
      });
    });
  },

  getUserById: (req, res) => {
    const errors = {};
    User.findById(req.params.id)
      .then(user => {
        if (!user) {
          errors.nouser = "User not found";
          res.status(404).json(errors);
        }
        res.json(user);
      })
      .catch(err => res.status(404).json({ user: "User not found" }));
  },

  deleteUser: (req, res) => {
    User.findOneAndRemove({ _id: req.user.id }).then(() =>
      res.json({ success: true })
    );
  },

  getCurrent: (req, res) => {
    User.findById(req.user.id)
      .populate("cart")
      .then(user => {
        if (!user) {
          errors.nouser = "User not found";
          res.status(404).json(errors);
        }
        res.json(user);
      })
      .catch(err => res.status(404).json({ user: "User not found" }));
  }
};
