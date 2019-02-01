import React from "react";
import { Login } from "../../../components/auth/Login";
import { shallow } from "enzyme";

const mockLoginfn = jest.fn();
const Props = {
  auth: {
    isAuthenticated: false
  },
  errors: {}
};
let wrapper;

wrapper = shallow(<Login {...Props} loginUser={mockLoginfn} />);

it("displays TextFieldGroups and a button", () => {
  expect(wrapper.find("form").length).toEqual(1);
});

it("should call the mock login function", () => {
  wrapper.find("form").simulate("submit", { preventDefault() {} });
  expect(mockLoginfn.mock.calls.length).toBe(1);
});

wrapper
  .find("#email")
  .simulate("change", { target: { name: "email", value: "test@gmail.com" } });

wrapper
  .find("#password")
  .simulate("change", { target: { name: "password", value: "passwordTest" } });

it("calls function with correct date", () => {
  expect(mockLoginfn.mock.calls[0][0]).toEqual({
    email: "test@gmail.com",
    password: "passwordTest"
  });
});
