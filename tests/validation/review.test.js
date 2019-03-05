const validateReviewInput = require("../../validation/review");

describe("correct input", () => {
  const data = {
    text: "more than 10 characters",
    rate: "5"
  };
  it("returns correct values", () => {
    expect(validateReviewInput(data)).toEqual({ errors: {}, isValid: true });
  });
});

describe("incorrect input", () => {
  it("returns correct errors on empty input", () => {
    const data = {
      text: "",
      rate: ""
    };
    expect(validateReviewInput(data)).toEqual({
      errors: { text: "Text field is required", rate: "Rate is required" },
      isValid: false
    });
  });
  it("returns correct errors on incorrect inputs", () => {
    const data = {
      text: "text",
      rate: "55"
    };
    expect(validateReviewInput(data)).toEqual({
      errors: {
        text: "Review must be between 10 and 200 characters",
        rate: "Rate must be between 1 and 5"
      },
      isValid: false
    });
  });
  it("returns correct errors when rate is not a number", () => {
    const data = {
      text: "text",
      rate: "rate"
    };
    expect(validateReviewInput(data)).toEqual({
      errors: {
        text: "Review must be between 10 and 200 characters",
        rate: "Rate must be a number"
      },
      isValid: false
    });
  });
});
