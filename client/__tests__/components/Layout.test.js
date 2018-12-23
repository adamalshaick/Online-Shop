import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import comfigureStore from "redux-mock-store";

import Landing from "../../src/components/layout/Landing";

let wrapped;

it("jd", () => {
  expect(wrapped.find(Landing).length).toEqual(1);
});
