import React from "react";
import { CartItem } from "../../../components/cart/CartItem";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const mockRemovefn = jest.fn();

const Props = {
  item: {}
};

const wrapper = shallow(
  <CartItem {...Props} removeItemFromCart={mockRemovefn} />
);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

it("should call remove item function", () => {
  wrapper.find("button").simulate("click", { preventDefault() {} });
  expect(mockRemovefn.mock.calls.length).toEqual(1);
});
