const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateItemInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Item description must be between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  if (isNaN(data.price)) {
    errors.price = "Price must be a number";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
