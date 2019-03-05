const validateLoginInput = require("../../validation/login");

describe("correct input", () => {
  const data = {
    email: "email@gmail.com",
    password: "password"
  };
  it("returns correct values", () => {
    expect(validateLoginInput(data)).toEqual({ errors: {}, isValid: true });
  });
});

describe("incorrect input", () => {
  it("returns correct errors on empty input", () => {
    const data = {
      email: "",
      password: ""
    };
    expect(validateLoginInput(data)).toEqual({
      errors: {
        email: "Email field is required",
        password: "Password field is required"
      },
      isValid: false
    });
  });
  it("returns correct errors on incorrect inputs", () => {
    const data = {
      text: "email",
      password: "password"
    };
    expect(validateLoginInput(data)).toEqual({
      errors: {
        email: "Email field is required"
      },
      isValid: false
    });
  });
});
