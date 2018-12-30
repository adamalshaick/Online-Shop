import React from "react";
import { shallow } from "enzyme";
import UploadFileGroup from "../../../components/common/UploadFileGroup";
import renderer from "react-test-renderer";

const Props = {
  value: "new value",
  name: "new name",
  onChange: e => {
    e.target.name = e.target.value;
  }
};

describe("Render UploadFileGroup", () => {
  it("render upload file group component", () => {
    const UploadFileComponent = renderer.create(<UploadFileGroup />).toJSON();
    expect(UploadFileComponent).toMatchSnapshot();
  });
});

// beforeEach(() => {
//   wrapped = shallow(<TextFieldGroup {...Props} />);
// });

// it("can type", () => {
//   wrapped.find("input").simulate("change", {
//     target: { value: "new input" }
//   });
//   wrapped.update();
//   expect(wrapped.find("input").prop("value")).toEqual("new value");
// });
