import reviewReducer from "../../reducers/reviewReducer";
import * as types from "../../actions/types";

describe("INITIAL_STATE", () => {
  it("returns initial state", () => {
    const action = { type: "dummy_action" };
    const initialState = { reviews: [], loading: false };
    expect(reviewReducer(undefined, action)).toEqual(initialState);
  });
});

describe("REVIEW_LOADING", () => {
  it("returns the correct state", () => {
    const initialState = { reviews: [] };
    const action = { type: types.REVIEW_LOADING };
    const expectedState = { reviews: [], loading: true };

    expect(reviewReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("GET_REVIEWS", () => {
  it("returns the correct state", () => {
    const initialState = { reviews: [] };
    const action = { type: types.GET_REVIEWS, payload: "review" };
    const expectedState = { reviews: "review", loading: false };

    expect(reviewReducer(initialState, action)).toEqual(expectedState);
  });
});

describe("ADD_REVIEW", () => {
  const initialState = { reviews: ["first review", "second review"] };
  const action = { type: types.ADD_REVIEW, payload: "new review" };
  const expectedState = {
    reviews: ["new review", "first review", "second review"]
  };
  expect(reviewReducer(initialState, action)).toEqual(expectedState);
});
