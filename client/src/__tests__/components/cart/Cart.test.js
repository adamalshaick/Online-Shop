import React from "react";
import { Cart } from "../../../components/cart/Cart";
import { shallow } from "enzyme";

const mockCartfn = jest.fn();

const Props = {
  cart: {},
  loading: true
};

const wrapper = shallow(<Cart {...Props} getItemsFromCart={mockCartfn} />);

it("should call the mock cart function", () => {
  expect(mockCartfn.mock.calls.length).toBe(1);
});
