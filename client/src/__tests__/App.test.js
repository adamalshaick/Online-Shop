import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import Navbar from "../components/layout/Navbar";
import Login from "../components/auth/Login";
import TextFieldGroup from "../components/common/TextFieldGroup";
import { Provider } from "react-redux";
import store from "../store";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  expect(wrapped.find(Navbar).length).toEqual(1);
});
