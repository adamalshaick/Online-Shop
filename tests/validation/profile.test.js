const validateProfileInput = require("../../validation/profile");

describe("correct input", () => {
  const data = {
    handle: "handle"
  };
  it("returns correct values", () => {
    expect(validateProfileInput(data)).toEqual({ errors: {}, isValid: true });
  });
});
