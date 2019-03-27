import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Landing } from "../../../components/layout/Landing";

const wrapper = shallow(<Landing />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
