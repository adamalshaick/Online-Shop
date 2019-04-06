import React from "react";
import { ItemFeed } from "../../../components/items/ItemFeed.js";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const Props = {
  currentUser: {},
  items: []
};

const wrapper = shallow(<ItemFeed {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
