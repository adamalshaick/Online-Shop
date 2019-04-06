import React from "react";
import { Dashboard } from "../../../components/dashboard/Dashboard";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const Props = {
  user: {
    currentUser: {
      cart: []
    }
  }
};

const wrapper = shallow(<Dashboard {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
