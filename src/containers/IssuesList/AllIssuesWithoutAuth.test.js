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
    authenticated: false,
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

  it("Should not render h4 tag if not authenticated", () => {
    expect(wrapper.find("h4").length).toEqual(0);
  });

  test("Should Render All Issues Without Auth", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
