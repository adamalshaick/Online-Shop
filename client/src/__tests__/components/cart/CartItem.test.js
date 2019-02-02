import React from "react";
import { CartItem } from "../../../components/cart/CartItem";
import { shallow } from "enzyme";

const mockDeletefn = jest.fn();

const Props = {
  item: {}
};

const wrapper = shallow(
  <CartItem {...Props} removeItemFromCart={mockDeletefn} />
);

it("displays a button", () => {
  expect(wrapper.find("button").length).toEqual(1);
});

it("should call the mock delete function", () => {
  wrapper.find("button").simulate("click");
  expect(mockDeletefn.mock.calls.length).toBe(1);
});
