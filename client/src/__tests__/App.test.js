import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import toJson from "enzyme-to-json";

const wrapper = shallow(<App />);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
