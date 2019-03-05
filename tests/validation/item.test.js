const validateItemInput = require("../../validation/item");

describe("correct input", () => {
  const data = {
    text: "texttexttexttext",
    title: "title",
    price: "5",
    category: "category"
  };
  const file = new FormData();
  file.append("item", "item");
  it("returns correct values", () => {
    expect(validateItemInput(data, file)).toEqual({
      errors: {},
      isValid: true
    });
  });
});
