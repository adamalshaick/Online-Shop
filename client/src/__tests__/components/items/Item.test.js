import React from "react";
import { Item } from "../../../components/items/Item";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const mockAddToCart = jest.fn();
const mockDelete = jest.fn();

describe("render component", () => {
  const Props = {
    item: {},
    currentUser: {}
  };

  const wrapper = shallow(
    <Item {...Props} deleteItem={mockDelete} addItemToCart={mockAddToCart} />
  );

  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("user owns the item", () => {
  const Props = {
    item: {
      user: "currentUser"
    },
    currentUser: {
      id: "currentUser"
    }
  };

  const wrapper = shallow(
    <Item {...Props} deleteItem={mockDelete} addItemToCart={mockAddToCart} />
  );

  it("displays delete button", () => {
    expect(wrapper.find("#deleteItem").length).toEqual(1);
  });

  it("calls mock delete function", () => {
    wrapper.find("#deleteItem").simulate("click", { preventDefault() {} });
    expect(mockDelete.mock.calls.length).toEqual(1);
  });

  it("doesn't display add to cart button", () => {
    expect(wrapper.find("#addToCart").length).toEqual(0);
  });
});

describe("user doesn't own the item", () => {
  describe("item is inside current users cart", () => {
    const PropsWithItemInCart = {
      item: {
        user: "anotherUser",
        _id: "itemInCart"
      },
      currentUser: {
        id: "currentUser",
        cart: [{ _id: "itemInCart" }, { _id: "anotherItem" }]
      }
    };

    const wrapper = shallow(
      <Item
        {...PropsWithItemInCart}
        deleteItem={mockDelete}
        addItemToCart={mockAddToCart}
      />
    );

    it("renders component", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("doesn't display delete button", () => {
      expect(wrapper.find("#deleteItem").length).toEqual(0);
    });

    it("doesn't display add to cart button", () => {
      expect(wrapper.find("#addToCart").length).toEqual(0);
    });
  });

  describe("item is not inside current users cart", () => {
    const PropsWithoutItemInCart = {
      item: {
        user: "anotherUser",
        _id: "itemNotInCart"
      },
      currentUser: {
        id: "currentUser",
        cart: [{ _id: "itemInCart" }, { _id: "anotherItem" }]
      }
    };

    const wrapper = shallow(
      <Item
        {...PropsWithoutItemInCart}
        deleteItem={mockDelete}
        addItemToCart={mockAddToCart}
      />
    );

    it("doesn't display delete button", () => {
      expect(wrapper.find("#deleteItem").length).toEqual(0);
    });

    it("displays add to cart button", () => {
      expect(wrapper.find("#addToCart").length).toEqual(1);
    });

    it("calls mock add to cart function", () => {
      wrapper.find("#addToCart").simulate("click", { preventDefault() {} });
      expect(mockAddToCart.mock.calls.length).toEqual(1);
    });
  });
});
