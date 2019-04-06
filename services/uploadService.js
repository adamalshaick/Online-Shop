const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const awsKeys = require("../config/keys");

aws.config.update({
  secretAccessKey: awsKeys.secretAccessKey,
  accessKeyId: awsKeys.accessKeyId,
  region: "us-east-1"
});
const s3 = new aws.S3();

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

module.exports = {
  upload: multer({
    storage: multerS3({
      s3: s3,
      bucket: "adam-al-shaick-online-shop",
      acl: "public-read",
      metadata: function(req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function(req, file, cb) {
        cb(null, Date.now().toString());
      }
    }),
    limits: { fileSize: 2000000 },
    fileFilter: function(req, file, cb) {
      checkFileType(file, cb);
    }
  }).single("myImage")
};
