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
    issues: [],
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

  it("Should render h5 if no data is passed", () => {
    expect(wrapper.find("h5").length).toEqual(1);
  });

  test("Should Render All Issues Without Auth and without Data", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
