import React from "react";
import Login from "../../../components/auth/Login";
import { Provider } from "react-redux";
import store from "../../../store";
import { mount } from "enzyme";
import TextFieldGroup from "../../../components/common/TextFieldGroup";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Provider store={store}>
      <Login />
    </Provider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("displays TextFieldGroups and a button", () => {
  expect(wrapped.find(TextFieldGroup).length).toEqual(2);
  expect(wrapped.find("button").length).toEqual(1);
});
