import React from "react";
import { Cart } from "../../../components/cart/Cart";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const mockCartfn = jest.fn();
const Props = {
  cart: {},
  loading: false
};

const wrapper = shallow(<Cart {...Props} getItemsFromCart={mockCartfn} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
