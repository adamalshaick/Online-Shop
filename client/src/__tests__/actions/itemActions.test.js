import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";

import * as itemActions from "../../actions/itemActions";
import { ADD_ITEM } from "../../actions/types";
const middlewares = [thunk];

const mockStore = configureStore(middlewares);

it("200 type", () => {
    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
            status: 200,
            response: {}
        })
    })
})



describe("addItem", () => {
  it("Dispatches the correct type and payload", () => {
    const action = [
      {
        payload: 1,
        type: "ADD_ITEM"
      }
    ];
    store.dispatch(itemActions.addItem(1));
    expect(store.getActions()).toEqual(action);
  });

  beforeEach(() => {
    store.clearActions();
  });
});
