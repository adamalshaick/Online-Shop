const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const multer = require("multer");
const path = require("path");

// Item model
const Uploader = require("../../models/Uploader");
// Profile model
const Profile = require("../../models/Profile");

// Validation
const validateItemInput = require("../../validation/item");

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: "./client/public/uploads/post_image/",
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single("myImage");

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// @route POST api/items/upload
router.post("/", (req, res) => {
  upload(req, res, error => {
    if (error) {
      console.log("errors", error);
      res.json({ error: error });
    } else {
      // If File not found
      if (req.file === undefined) {
        console.log("Error: No File Selected");
        res.json("Error: No File Selected");
      } else {
        // If Success
        const data = new Uploader({
          itemImage: req.file.filename
        });
        data.save().then(file => res.json(file));
      }
    }
  });
});

module.exports = router;
