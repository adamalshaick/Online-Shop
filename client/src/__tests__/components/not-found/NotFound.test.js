import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NotFound from "../../../components/not-found/NotFound";

const wrapper = shallow(<NotFound />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
