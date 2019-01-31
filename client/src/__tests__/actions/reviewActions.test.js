import configureMockStore from "redux-mock-store";
import * as reviewActions from "../../actions/reviewActions";
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

describe("basic review actions", () => {
  it("sets review loading", () => {
    const action = reviewActions.setReviewLoading();
    expect(action).toEqual({ type: types.REVIEW_LOADING });
  });
});

describe("adding review actions", () => {
  const reviewData = {
    text: "textTest",
    id: "1234"
  };

  const errorData = {
    error: "error message"
  };

  it("adds review", async () => {
    httpMock.onPost(`/api/reviews/${reviewData.id}`, reviewData).reply(200, {
      reviewData
    });

    reviewActions.addReview(reviewData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.ADD_REVIEW, payload: { reviewData } }
    ]);
  });

  it("doesn't add review on error", async () => {
    httpMock.onPost(`/api/reviews/${reviewData.id}`, reviewData).reply(400, {
      errorData
    });

    reviewActions.addReview(reviewData)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.GET_ERRORS, payload: { errorData } }
    ]);
  });
});
