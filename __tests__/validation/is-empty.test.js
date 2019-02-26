const isEmpty = require("../../validation/is-empty");

describe("is empty test", () => {
  it("has correct value on empty", () => {
    expect(isEmpty("")).toEqual(true);
  });
  it("has correct value on undefined", () => {
    expect(isEmpty(undefined)).toEqual(true);
  });
  it("has correct value on null", () => {
    expect(isEmpty(null)).toEqual(true);
  });
  it("has correct value on empty arr", () => {
    expect(isEmpty([])).toEqual(true);
  });
  it("has correct value on not empty", () => {
    expect(isEmpty("not empty")).toEqual(false);
  });
  it("has correct value on not empty object", () => {
    expect(isEmpty({ text: "not empty" })).toEqual(false);
  });
  it("has correct value on not empty arr", () => {
    expect(isEmpty(["not empty"])).toEqual(false);
  });
});
