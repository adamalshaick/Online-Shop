const validateRegisterInput = require("../../validation/register");

describe("correct input", () => {
  const data = {
    name: "name",
    email: "email@gmail.com",
    password: "password",
    password2: "password"
  };
  it("returns correct values", () => {
    expect(validateRegisterInput(data)).toEqual({ errors: {}, isValid: true });
  });
});
