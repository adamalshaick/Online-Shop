const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateReviewInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";
  data.rate = !isEmpty(data.rate) ? data.rate : "";

  if (!Validator.isLength(data.text, { min: 10, max: 200 })) {
    errors.text = "Review must be between 10 and 200 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  if (data.rate < 1 || data.rate > 5) {
    errors.rate = "Rate must be between 1 and 5";
  }

  if (isNaN(data.rate)) {
    errors.rate = "Rate must be a number";
  }

  if (Validator.isEmpty(data.rate)) {
    errors.rate = "Rate is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
