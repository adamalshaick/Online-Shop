import React from "react";
import { shallow } from "enzyme";
import SelectListGroup from "../../../components/common/SelectListGroup";

let wrapped;

const Props = {
  value: "new value",
  name: "new name",
  options: [
    { label: "option a", option: "option a" },
    { label: "option b", option: "option b" }
  ],
  onChange: e => {
    e.target.name = e.target.value;
  }
};

beforeEach(() => {
  wrapped = shallow(<SelectListGroup {...Props} />);
});

it("can type", () => {
  wrapped.find("select").simulate("change", {
    target: { value: "new input" }
  });
  wrapped.update();
  expect(wrapped.find("select").prop("value")).toEqual("new value");
});
