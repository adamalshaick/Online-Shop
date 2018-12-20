const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateItemInput(data, formData, uploadError) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.category = !isEmpty(data.category) ? data.category : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = "Name field is required";
  }

  if (!Validator.isLength(data.text, { min: 10, max: 400 })) {
    errors.text = "Item description must be between 10 and 400 characters";
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

  if (formData === undefined) {
    errors.file = "Image is required";
  }

  if (uploadError) {
    errors.file = uploadError;
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Select a category";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
