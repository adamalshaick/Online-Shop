const Validator = require("validator");
const isEmpty = require("./is-empty");

const Item = require("../models/Item");

module.exports = function validateCardInput(data) {
  let errors = {};

  data.id = !isEmpty(data.id) ? data.id : "";
  data.price = !isEmpty(data.price) ? data.price : "";

  if (Validator.isEmpty(data.id)) {
    errors.id = "Id field is required";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
