import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";

import AllIssues from "./AllIssues";

configure({ adapter: new Adapter() });

const styles = {
  root: "",
};

const store = {
  issues: {
    issues: [
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
    ],
  },
  customize: {
    severity: true,
    status: true,
    createdDate: true,
    resolvedDate: true,
  },
  users: {
    authenticated: true,
    firstname: "TestFirstName",
  },
};

const props = {
  classes: styles,
};

const mockStore = configureStore();

describe("Navigation Bar Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(
      <Provider store={mockStore(store)}>
        <BrowserRouter>
          <AllIssues {...props} />
        </BrowserRouter>
      </Provider>
    );
  });

  it("Should render h4 tag if authenticated", () => {
    expect(wrapper.find("h4").length).toEqual(1);
  });

  it("Should render h4 tag if authenticated along with firstname in HTML Content", () => {
    expect(wrapper.find("h4").children().length).toEqual(3);
  });

  it("Should render Customize Fields Component", () => {
    expect(wrapper.find("CustomizeFields").length).toEqual(1);
  });

  it("Should render Charts Component", () => {
    expect(wrapper.find("IssuesChart").length).toEqual(1);
  });

  test("Should Render All Issues", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
