import React from "react";
import { shallow } from "enzyme";
import InputGroup from "../../../components/common/InputGroup";
import renderer from "react-test-renderer";

const Props = {
  value: "new value",
  name: "new name",
  onChange: e => {
    e.target.name = e.target.value;
  }
};

describe("Render InputGroup", () => {
  it("render input group component", () => {
    const InputGroupComponent = renderer.create(<InputGroup />).toJSON();
    expect(InputGroupComponent).toMatchSnapshot();
  });
});
// beforeEach(() => {
//   wrapped = shallow(<TextAreaFieldGroup {...Props} />);
// });

// it("can type", () => {
//   wrapped.find("textarea").simulate("change", {
//     target: { value: "new input" }
//   });
//   wrapped.update();
//   expect(wrapped.find("textarea").prop("value")).toEqual("new value");
// });
