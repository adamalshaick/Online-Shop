import React from "react";
import { mount } from "enzyme";
import { shallow } from "enzyme";
import EditProfile from "../../../components/edit-profile/EditProfile";
import store from "../../../store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TextFieldGroup from "../../../components/common/TextFieldGroup";

const wrapped = mount(
  <Router>
    <EditProfile store={store} />
  </Router>
);
// const component = wrapped.dive();

it("has a text area and a button", () => {
  //   expect(wrapped.find(<TextFieldGroup />).length).toEqual(0);
  //   //   expect(component.find("button").length).toEqual(2);
});

wrapped.unmount();
