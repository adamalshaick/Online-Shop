const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data, uploadError) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 40 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Username is required";
  }

  if (uploadError) {
    errors.file = uploadError;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
