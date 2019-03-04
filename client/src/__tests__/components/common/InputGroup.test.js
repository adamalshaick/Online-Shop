import React from "react";
import InputGroup from "../../../components/common/InputGroup";
import renderer from "react-test-renderer";

const wrapper = renderer.create(<InputGroup />).toJSON();

describe("render component", () => {
  it("renders component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
