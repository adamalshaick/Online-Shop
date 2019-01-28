import authReducer from "../../reducers/authReducer";
import * as types from "../../actions/types";

describe("INITIAL_STATE", () => {
  it("returns initial state", () => {
    const action = { type: "dummy_action" };
    const initialState = {
      isAuthenticated: false,
      user: {}
    };
    expect(authReducer(undefined, action)).toEqual(initialState);
  });
});

describe("SET_CURRENT_USER", () => {
  it("returns the correct state", () => {
    const initialState = {
      isAuthenticated: false,
      user: {}
    };
    const action = { type: types.SET_CURRENT_USER, payload: "new user" };
    const expectedState = { user: "new user", isAuthenticated: true };

    expect(authReducer(initialState, action)).toEqual(expectedState);
  });
});
