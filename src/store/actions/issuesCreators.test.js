import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import * as actionCreators from "./actionsIndex";
import * as actionTypes from "./actionTypes";

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Issues Action Creators", () => {
  // GET ISSUES
  it("Get Issues Action Creator", () => {
    const issues = [
      {
        id: 1,
        title: "Issue One",
        issueDescription: "Issue Description One",
        severity: "Critical",
        status: "Open",
        createdDate: "28/02/2021  ",
        resolvedDate: "29/03/2021",
        views: 5,
        backGroundColor: "#7828BF",
        hoverBackGroundColor: "#9C5BB7",
      },
      {
        id: 2,
        title: "Issue Two",
        issueDescription: "Issue Description Two",
        severity: "Minor",
        status: "Closed",
        createdDate: "2/3/2021",
        resolvedDate: "3/3/2021",
        views: 9,
        backGroundColor: "#a03919",
        hoverBackGroundColor: "#d8587a",
      },
      {
        id: 3,
        title: "Issue Three",
        issueDescription: "Issue Description Three",
        severity: "Minor",
        status: "Closed",
        createdDate: "11/3/2021",
        resolvedDate: "12/3/2021",
        views: 4,
        backGroundColor: "#4c77b2",
        hoverBackGroundColor: "#2c1393",
      },
      {
        id: 4,
        title: "Issue Four",
        issueDescription: "Issue Description Four",
        severity: "Minor",
        status: "Closed",
        createdDate: "11/3/2021",
        resolvedDate: "12/3/2021",
        views: 4,
        backGroundColor: "#74ed90",
        hoverBackGroundColor: "#2cb215",
      },
      {
        title: "Issue Five",
        issueDescription: "Issue Description Five",
        severity: "Minor",
        status: "In Progress",
        createdDate: "1/3/2021",
        resolvedDate: "31/3/2021",
        views: 1,
        id: "b014be9d-151d-4c70-b5e2-854c948c2021",
        backGroundColor: "#3059dd",
        hoverBackGroundColor: "#5759d6",
      },
    ];
    const store = mockStore(issues);
    const expectedAction = {
      type: actionTypes.INITIALIZE,
      issues: issues,
    };
    return store.dispatch(actionCreators.getIssues()).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction);
    });
  });

  // UPDATE ISSUE
  it("Update Issue Action Creator", () => {
    const issues = [
      {
        id: 1,
        title: "Issue One",
        issueDescription: "Issue Description One",
        severity: "Critical",
        status: "Open",
        createdDate: "28/02/2021  ",
        resolvedDate: "29/03/2021",
        views: 5,
        backGroundColor: "#7828BF",
        hoverBackGroundColor: "#9C5BB7",
      },
    ];

    const store = mockStore(issues);
    const expectedAction = {
      type: actionTypes.UPDATE_ISSUE,
      updatedIssue: issues[0],
    };

    return store.dispatch(actionCreators.updateIssue(issues[0])).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction);
    });
  });
});
