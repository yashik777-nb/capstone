import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";

import NewIssue from "./NewIssue";

configure({ adapter: new Adapter() });

const props = {
  addIssue: () => {},
};

const store = {};
const mockStore = configureStore();

const mockFm = jest.fn();

describe("New Issue Form Container Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(
      <Provider store={mockStore(store)}>
        <BrowserRouter>
          <NewIssue {...props} onSave={mockFm} />
        </BrowserRouter>
      </Provider>
    );
  });

  it("Should render New Issue Form", () => {
    expect(wrapper.find("IssueForm").length).toEqual(1);
  });

  test("Should Render New Issue Form Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
