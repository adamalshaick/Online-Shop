import profileReducer from "../../reducers/profileReducer";
import * as types from "../../actions/types";

describe("INITIAL_STATE", () => {
  it("returns initial state", () => {
    const action = { type: "dummy_action" };
    const initialState = { profile: null, profiles: null, loading: false };
    expect(profileReducer(undefined, action)).toEqual(initialState);
  });
});

describe("PROFILE_LOADING", () => {
  it("returns the correct state", () => {
    const initialState = { profile: null, profiles: null, loading: false };
    const action = { type: types.PROFILE_LOADING };
    const expectedState = {
      profile: null,
      profiles: null,
      loading: true
    };

    expect(profileReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("GET_PROFILE", () => {
  it("returns the correct state", () => {
    const initialState = { profile: null, profiles: null, loading: false };
    const action = { type: types.GET_PROFILE, payload: "new profile" };
    const expectedState = {
      profile: "new profile",
      profiles: null,
      loading: false
    };

    expect(profileReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("GET_PROFILES", () => {
  it("returns the correct state", () => {
    const initialState = { profile: null, profiles: null, loading: false };
    const action = { type: types.GET_PROFILES, payload: "new profile" };
    const expectedState = {
      profiles: "new profile",
      profile: null,
      loading: false
    };

    expect(profileReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("CLEAR_CURRENT_PROFILE", () => {
  it("returns the correct state", () => {
    const initialState = { profile: "current profile" };
    const action = { type: types.CLEAR_CURRENT_PROFILE };
    const expectedState = {
      profile: null
    };

    expect(profileReducer(initialState, action)).toEqual(expectedState);
  });
});
