import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import * as actionCreators from "./actionsIndex";
import * as actionTypes from "./actionTypes";

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Customize Action Creators", () => {
  // TOGGLE SEVERITY
  it("Check Severity Action Dispatcher", () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.TOGGLE_SEVERITY,
    };
    expect(store.dispatch(actionCreators.severityHandler())).toEqual(
      expectedAction
    );
  });

  // TOGGLE SEVERITY
  it("Check Status Action Dispatcher", () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.TOGGLE_STATUS,
    };
    expect(store.dispatch(actionCreators.statusHandler())).toEqual(
      expectedAction
    );
  });

  // TOGGLE CREATED_DATE
  it("Check Created Date Action Dispatcher", () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.TOGGLE_CREATED_DATE,
    };
    expect(store.dispatch(actionCreators.createdDateHandler())).toEqual(
      expectedAction
    );
  });

  // TOGGLE RESOLVED_DATE
  it("Check Resolved Date Action Dispatcher", () => {
    const store = mockStore({});
    const expectedAction = {
      type: actionTypes.TOGGLE_RESOLVED_DATE,
    };
    expect(store.dispatch(actionCreators.resolvedDateHandler())).toEqual(
      expectedAction
    );
  });
});
