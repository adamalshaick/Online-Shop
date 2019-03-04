import React from "react";
import TextAreaFieldGroup from "../../../components/common/TextAreaFieldGroup";
import renderer from "react-test-renderer";

const wrapper = renderer.create(<TextAreaFieldGroup />).toJSON();

describe("render component", () => {
  it("renders component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
