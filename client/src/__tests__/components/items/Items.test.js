import React from "react";
import { Items } from "../../../components/items/Items.js";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const Props = {
  item: { items: [] },
  user: { currentUser: {} }
};

const wrapper = shallow(<Items {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
