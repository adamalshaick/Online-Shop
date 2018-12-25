import React from "react";
import { shallow } from "enzyme";
import App from "../../App";
import Navbar from "../../components/layout/Navbar";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  expect(wrapped.find(Navbar).length).toEqual(1);
});
