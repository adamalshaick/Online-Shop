import React from "react";
import SelectListGroup from "../../../components/common/SelectListGroup";
import renderer from "react-test-renderer";

const wrapper = renderer.create(<SelectListGroup />).toJSON();

describe("render component", () => {
  it("renders component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
