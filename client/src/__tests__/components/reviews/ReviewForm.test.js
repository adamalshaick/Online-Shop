import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ReviewForm } from "../../../components/reviews/ReviewForm";

const Props = {
  review: {}
};

const wrapper = shallow(<ReviewForm {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
