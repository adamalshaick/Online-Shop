const multer = require("multer");
const path = require("path");

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
  // Init Upload
  upload: multer({
    storage: storage,
    limits: { fileSize: 2000000 },
    fileFilter: function(req, file, cb) {
      checkFileType(file, cb);
    }
  }).single("myImage")
};
