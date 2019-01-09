import configureMockStore from "redux-mock-store";
import * as itemActions from "../../actions/itemActions";
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

describe("basic item actions", () => {
  it("sets item loading", () => {
    const action = itemActions.setItemLoading();
    expect(action).toEqual({ type: types.ITEM_LOADING });
  });
});

describe("getting items actions", () => {
  it("fetches items", async () => {
    httpMock.onGet("/api/items").reply(200, {
      items: [{ name: "item #1" }, { name: "iem #2" }]
    });
    itemActions.getItems()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.ITEM_LOADING },
      {
        type: types.GET_ITEMS,
        payload: { items: [{ name: "item #1" }, { name: "iem #2" }] }
      }
    ]);
  });

  it("doesn't fetch items on error", async () => {
    httpMock.onGet("/api/items").reply(400, {
      items: [{ name: "item #1" }, { name: "iem #2" }]
    });
    itemActions.getItems()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.ITEM_LOADING },
      { type: types.GET_ITEMS, payload: null }
    ]);
  });

  it("fetches one item", async () => {
    const id = "5c30067f986d6054c862d812";
    httpMock.onGet(`/api/items/${id}`).reply(200, {
      item: { name: "item" }
    });

    itemActions.getItem(id)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.ITEM_LOADING },
      { payload: { item: { name: "item" } }, type: types.GET_ITEM }
    ]);
  });

  it("doesn't fetch one item on error", async () => {
    const id = "5c30067f986d6054c862d812";
    httpMock.onGet(`/api/items/${id}`).reply(400, {
      item: { name: "item" }
    });

    itemActions.getItem(id)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.ITEM_LOADING },
      { payload: null, type: types.GET_ITEM }
    ]);
  });
});

describe("adding items actions", () => {
  const itemData = {
    name: "item"
  };

  const errorData = {
    error: "error message"
  };

  it("adds an item", async () => {
    httpMock.onPost("/api/items", itemData).reply(200, {
      itemData
    });

    itemActions.addItem(itemData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.ADD_ITEM, payload: { itemData } }
    ]);
  });

  it("doesn't add an item on error", async () => {
    httpMock.onPost("/api/items", itemData).reply(400, {
      errorData
    });

    itemActions.addItem(itemData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.GET_ERRORS, payload: { errorData } }
    ]);
  });
});

describe("deleting items actions", () => {
  const id = "5c30067f986d6054c862d812";

  const errorData = {
    error: "error message"
  };

  it("deletes an item", async () => {
    httpMock.onDelete(`/api/items/${id}`).reply(200, {
      id
    });

    itemActions.deleteItem(id)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.DELETE_ITEM, payload: id }
    ]);
  });

  it("doesn't delete an item on error", async () => {
    httpMock.onDelete(`/api/items/${id}`).reply(400, {
      errorData
    });

    itemActions.deleteItem(id)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.GET_ERRORS, payload: { errorData } }
    ]);
  });
});
