import React from "react";
import { Cart } from "../../../components/cart/Cart";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const Props = {
  user: {
    currentUser: {
      cart: []
    }
  }
};

const wrapper = shallow(<Cart {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
