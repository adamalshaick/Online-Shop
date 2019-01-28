import errorReducer from "../../reducers/errorReducer";
import * as types from "../../actions/types";

describe("INITIAL_STATE", () => {
  it("returns initial state", () => {
    const action = { type: "dummy_action" };
    const initialState = {};
    expect(errorReducer(undefined, action)).toEqual(initialState);
  });
});

describe("GET_ERRORS", () => {
  it("returns the correct state", () => {
    const initialState = {};
    const action = { type: types.GET_ERRORS, payload: "error data" };
    const expectedState = "error data";

    expect(errorReducer(initialState, action)).toEqual(expectedState);
  });
});
