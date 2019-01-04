import {SET_CURRENT_USERS, GET_ERRORS} from "../../actions/types"
import {setCurrentUser} from "../../actions/authActions"

describe("setCurrentUser", () => {
  it("has a correct type", () => {
    const action = setCurrentUser();
    expect(action.type).toEqual(SET_USERS);
  });

  it("has a correct payload", () => {
    const action = setCurrentUser("New Comment");
    expect(action.payload).toEqual("New Comment");
  });
});
