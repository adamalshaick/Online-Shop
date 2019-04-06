import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Review } from "../../../components/reviews/Review";

const Props = {
  review: {}
};

const wrapper = shallow(<Review {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
