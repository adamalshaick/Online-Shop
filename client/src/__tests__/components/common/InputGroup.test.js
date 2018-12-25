import React from "react";
import { shallow } from "enzyme";
import InputGroup from "../../../components/common/InputGroup";

let wrapped;

const Props = {
  value: "new value",
  name: "new name",
  onChange: e => {
    e.target.name = e.target.value;
  }
};

beforeEach(() => {
  wrapped = shallow(<InputGroup {...Props} />);
});

it("can type", () => {
  wrapped.find("input").simulate("change", {
    target: { value: "new input" }
  });
  wrapped.update();
  expect(wrapped.find("input").prop("value")).toEqual("new value");
});
