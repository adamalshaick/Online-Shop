const mongoose = require("mongoose");
const passport = require("passport");

module.exports = {
  createFields: (user, data, file) => {
    // Get fields
    const profileFields = {};
    profileFields.user = user;
    if (data.handle) profileFields.handle = data.handle;
    if (data.location) profileFields.location = data.location;
    if (data.bio) profileFields.bio = data.bio;
    if (file) profileFields.profileImage = file;
    return profileFields;
  },

  updateFields: (user, data) => {
    // Get fields
    const profileFields = {};
    profileFields.user = user;
    if (data.handle) profileFields.handle = data.handle;
    if (data.location) profileFields.location = data.location;
    if (data.bio) profileFields.bio = data.bio;
    return profileFields;
  }
};
