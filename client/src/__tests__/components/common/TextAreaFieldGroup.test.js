import React from "react";
import { shallow } from "enzyme";
import TextAreaFieldGroup from "../../../components/common/TextAreaFieldGroup";

let wrapped;

const Props = {
  value: "new value",
  name: "new name",
  onChange: e => {
    e.target.name = e.target.value;
  }
};

beforeEach(() => {
  wrapped = shallow(<TextAreaFieldGroup {...Props} />);
});

it("can type", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new input" }
  });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("new value");
});
