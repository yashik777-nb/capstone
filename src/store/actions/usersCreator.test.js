import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import * as actionCreators from "./actionsIndex";
import * as actionTypes from "./actionTypes";

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Users Action Creators", () => {
  // AUTHENTICATE USER
  it("Authnticate User Action Creator", () => {
    const userData = {
      username: "yash@abc.com",
      password: "yash",
      firstname: "Yash",
      lastname: "IK",
      mobileNumber: 12121212,
    };
    const store = mockStore(userData);
    const expectedAction = {
      type: actionTypes.AUTHENTICATED_USER,
      userData,
    };

    expect(store.dispatch(actionCreators.authenticateUser(userData))).toEqual(
      expectedAction
    );
  });

  // LOGOUT USER
  it("Logout User Action Creator", () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.LOGOUT_USER,
    };

    expect(store.dispatch(actionCreators.logoutUser())).toEqual(expectedAction);
  });
});
