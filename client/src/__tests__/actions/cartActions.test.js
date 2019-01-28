import configureMockStore from "redux-mock-store";
import * as cartActions from "../../actions/cartActions";
import * as types from "../../actions/types";
import axios from "axios";
import mockAdapter from "axios-mock-adapter";

let store;
let httpMock;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

beforeEach(() => {
  httpMock = new mockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
});

describe("basic cart actions", () => {
  it("sets cart loading", () => {
    const action = cartActions.setCartLoading();
    expect(action).toEqual({ type: types.CART_LOADING });
  });
});

describe("getting cart actions", () => {
  it("fetches cart", async () => {
    httpMock.onGet("/api/cart").reply(200, {
      cart: [{ name: "item #1" }, { name: "item #2" }]
    });
    cartActions.getItemsFromCart()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.CART_LOADING },
      {
        type: types.GET_CART,
        payload: { cart: [{ name: "item #1" }, { name: "item #2" }] }
      }
    ]);
  });

  it("doesn't fetch cart on error", async () => {
    httpMock.onGet("/api/cart").reply(400, {
      cart: [{ name: "item #1" }, { name: "item #2" }]
    });
    cartActions.getItemsFromCart()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.CART_LOADING },
      { type: types.GET_CART, payload: null }
    ]);
  });
});

describe("adding cart actions", () => {
  const cartData = {
    name: "item"
  };

  const errorData = {
    error: "error message"
  };

  it("adds item to cart", async () => {
    httpMock.onPost("/api/cart", cartData).reply(200, {
      cartData
    });

    cartActions.addItemToCart(cartData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.ADD_ITEM_TO_CART, payload: { cartData } }
    ]);
  });

  it("doesn't add an item to cart on error", async () => {
    httpMock.onPost("/api/cart", cartData).reply(400, {
      errorData
    });

    cartActions.addItemToCart(cartData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.GET_ERRORS, payload: { errorData } }
    ]);
  });
});

describe("removing items from cart actions", () => {
  const id = "5c30067f986d6054c862d812";

  const errorData = {
    error: "error message"
  };

  it("removes an item from cart", async () => {
    httpMock.onDelete(`/api/cart/${id}`).reply(200, {
      id
    });

    cartActions.removeItemFromCart(id)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.REMOVE_ITEM_FROM_CART, payload: id }
    ]);
  });

  it("doesn't remove an item on error", async () => {
    httpMock.onDelete(`/api/cart/${id}`).reply(400, {
      errorData
    });

    cartActions.removeItemFromCart(id)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.GET_ERRORS, payload: { errorData } }
    ]);
  });
});
