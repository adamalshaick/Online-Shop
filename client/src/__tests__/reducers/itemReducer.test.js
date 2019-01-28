import itemReducer from "../../reducers/itemReducer";
import * as types from "../../actions/types";

describe("INITIAL_STATE", () => {
  it("returns initial state", () => {
    const action = { type: "dummy_action" };
    const initialState = { items: [], loading: false };
    expect(itemReducer(undefined, action)).toEqual(initialState);
  });
});

describe("ITEM_LOADING", () => {
  it("returns the correct state", () => {
    const initialState = { items: [] };
    const action = { type: types.ITEM_LOADING };
    const expectedState = { items: [], loading: true };

    expect(itemReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("GET_ITEMS", () => {
  it("returns the correct state", () => {
    const initialState = { items: [] };
    const action = { type: types.GET_ITEMS, payload: "new item" };
    const expectedState = { items: "new item", loading: false };

    expect(itemReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("ADD_ITEM", () => {
  const initialState = { items: ["first item", "second item"] };
  const action = { type: types.ADD_ITEM, payload: "new item" };
  const expectedState = {
    items: ["new item", "first item", "second item"]
  };
  expect(itemReducer(initialState, action)).toEqual(expectedState);
});

describe("DELETE_ITEM", () => {
  const initialState = {
    items: [{ _id: "first item" }, { _id: "second item" }]
  };
  const action = { type: types.DELETE_ITEM, payload: "first item" };
  const expectedState = {
    items: [{ _id: "second item" }]
  };
  expect(itemReducer(initialState, action)).toEqual(expectedState);
});
