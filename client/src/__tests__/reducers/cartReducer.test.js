import cartReducer from "../../reducers/cartReducer";
import * as types from "../../actions/types";

describe("INITIAL_STATE", () => {
  it("returns initial state", () => {
    const action = { type: "dummy_action" };
    const initialState = { cart: [] };
    expect(cartReducer(undefined, action)).toEqual(initialState);
  });
});

describe("CART_LOADING", () => {
  it("returns the correct state", () => {
    const initialState = { cart: [] };
    const action = { type: types.CART_LOADING };
    const expectedState = { cart: [], loading: true };

    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("GET_CART", () => {
  it("returns the correct state", () => {
    const initialState = { cart: [] };
    const action = { type: types.GET_CART, payload: "cart item" };
    const expectedState = { cart: "cart item", loading: false };

    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("ADD_ITEM_TO_CART", () => {
  const initialState = { cart: ["first item", "second item"] };
  const action = { type: types.ADD_ITEM_TO_CART, payload: "new item" };
  const expectedState = {
    cart: ["new item", "first item", "second item"]
  };
  expect(cartReducer(initialState, action)).toEqual(expectedState);
});

describe("REMOVE_ITEM_FROM_CART", () => {
  const initialState = {
    cart: [{ _id: "first item" }, { _id: "second item" }]
  };
  const action = { type: types.REMOVE_ITEM_FROM_CART, payload: "first item" };
  const expectedState = {
    cart: [{ _id: "second item" }]
  };
  expect(cartReducer(initialState, action)).toEqual(expectedState);
});
