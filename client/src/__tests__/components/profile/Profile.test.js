import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Profile } from "../../../components/profile/Profile";

const Props = {
  user: { user: {} }
};

const wrapper = shallow(<Profile {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
