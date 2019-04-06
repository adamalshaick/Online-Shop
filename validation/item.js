const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateItemInput(data, formData, uploadError) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.category = !isEmpty(data.category) ? data.category : "";

  if (!Validator.isLength(data.name, { min: 2, max: 20 })) {
    errors.name = "Name must be between 2 and 20 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!Validator.isLength(data.text, { min: 10, max: 400 })) {
    errors.text = "Item description must be between 10 and 400 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Item description is required";
  }

  if (!Validator.isLength(data.price, { min: 1, max: 9 })) {
    errors.price = "9 characters maximum";
  }

  if (isNaN(data.price)) {
    errors.price = "Price must be a number";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required";
  }

  if (formData === undefined) {
    errors.file = "Image is required";
  }

  if (uploadError) {
    errors.file = uploadError;
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Select category";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
