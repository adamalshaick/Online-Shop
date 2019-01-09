import configureMockStore from "redux-mock-store";
import * as profileActions from "../../actions/profileActions";
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

describe("basic profile actions", () => {
  it("sets profile loading", () => {
    const action = profileActions.setProfileLoading();
    expect(action).toEqual({ type: types.PROFILE_LOADING });
  });

  it("clears current profile", () => {
    const action = profileActions.clearCurrentProfile();
    expect(action).toEqual({ type: types.CLEAR_CURRENT_PROFILE });
  });
});

describe("get profile actions", () => {
  it("gets profile by handle", async () => {
    const handle = "testhandle";
    httpMock.onGet(`/api/profile/handle/${handle}`).reply(200, {
      profile: { name: "testprofile" }
    });

    profileActions.getProfileByHandle(handle)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.PROFILE_LOADING },
      {
        payload: { profile: { name: "testprofile" } },
        type: types.GET_PROFILE
      }
    ]);
  });

  it("doesn't get profile on error", async () => {
    const handle = "testhandle";
    httpMock.onGet(`/api/profile/handle/${handle}`).reply(400, {
      profile: { name: "testprofile" }
    });

    profileActions.getProfileByHandle(handle)(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.PROFILE_LOADING },
      { payload: null, type: types.GET_PROFILE }
    ]);
  });

  it("gets current profile", async () => {
    httpMock.onGet("/api/profile").reply(200, {
      profile: { name: "testprofile" }
    });

    profileActions.getCurrentProfile()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.PROFILE_LOADING },
      {
        payload: { profile: { name: "testprofile" } },
        type: types.GET_PROFILE
      }
    ]);
  });

  it("doesn't get current profile on error", async () => {
    httpMock.onGet("/api/profile").reply(400, {
      profile: { name: "testprofile" }
    });

    profileActions.getCurrentProfile()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      { type: types.PROFILE_LOADING },
      {
        payload: {},
        type: types.GET_PROFILE
      }
    ]);
  });
});
