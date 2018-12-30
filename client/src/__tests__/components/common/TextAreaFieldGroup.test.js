import React from "react";
import { shallow } from "enzyme";
import TextAreaFieldGroup from "../../../components/common/TextAreaFieldGroup";
import renderer from "react-test-renderer";

const Props = {
  value: "new value",
  name: "new name",
  onChange: e => {
    e.target.name = e.target.value;
  }
};

describe("Render TextAreaFieldGroup", () => {
  it("render text area field group component", () => {
    const TextAreaFieldGroupComponent = renderer
      .create(<TextAreaFieldGroup />)
      .toJSON();
    expect(TextAreaFieldGroupComponent).toMatchSnapshot();
  });
});
