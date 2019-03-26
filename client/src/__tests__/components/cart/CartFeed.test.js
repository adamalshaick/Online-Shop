import React from "react";
import { CartFeed } from "../../../components/cart/CartFeed";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const Props = {
  cartItems: []
};

const wrapper = shallow(<CartFeed {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
