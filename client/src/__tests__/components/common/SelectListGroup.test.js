import React from "react";
import SelectListGroup from "../../../components/common/SelectListGroup";
import renderer from "react-test-renderer";

const Props = {
  options: []
};

const wrapper = renderer.create(<SelectListGroup {...Props} />).toJSON();

describe("render component", () => {
  it("renders component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
