const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateReviewInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";
  data.rate = !isEmpty(data.rate) ? data.rate : "";

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  if (Validator.isEmpty(data.rate)) {
    errors.rate = "Rate is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
