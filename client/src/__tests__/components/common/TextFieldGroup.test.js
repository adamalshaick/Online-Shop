import React from "react";
import TextFieldGroup from "../../../components/common/TextFieldGroup";
import renderer from "react-test-renderer";

const wrapper = renderer.create(<TextFieldGroup />).toJSON();
describe("render component", () => {
  it("renders component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
