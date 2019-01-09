import configureMockStore from "redux-mock-store";
import * as authActions from "../../actions/authActions";
import * as types from "../../actions/types";
import mockAdapter from "axios-mock-adapter";
import axios from "axios";

let store;
let httpMock;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

beforeEach(() => {
  httpMock = new mockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
});

describe("login actions", () => {
  it("sets current user", () => {
    const decoded = "1234";
    const action = authActions.setCurrentUser(decoded);
    expect(action).toEqual({ type: types.SET_CURRENT_USER, payload: decoded });
  });
});
