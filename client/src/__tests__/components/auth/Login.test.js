import React from "react";
import Login from "../../../components/auth/Login";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import TextFieldGroup from "../../../components/common/TextFieldGroup";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";

const mockStore = configureStore();
const initialState = {
  auth: {},
  errors: {}
};

const store = mockStore(initialState);

let wrapped;

it("displays TextFieldGroups and a button", () => {
  const wrapped = shallow(<Login store={store} />);

  const component = wrapped.dive();

  expect(toJson(wrapped)).toMatchSnapshot();
  expect(toJson(component)).toMatchSnapshot();
  // expect(wrapped.find(TextFieldGroup).length).toEqual(2);
  // expect(wrapped.find("button").length).toEqual(1);
});
