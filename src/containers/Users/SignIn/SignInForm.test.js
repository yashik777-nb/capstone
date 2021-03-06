import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";

import SignInForm from "./SignInForm";

configure({ adapter: new Adapter() });

const props = {
  authenticateUser: () => {},
};

const store = {};
const mockStore = configureStore();

describe("Sign In Form Container Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(
      <Provider store={mockStore(store)}>
        <BrowserRouter>
          <SignInForm {...props} />
        </BrowserRouter>
      </Provider>
    );
  });

  it("Should render Sign In Form", () => {
    expect(wrapper.find("SignIn").length).toEqual(1);
  });

  test("Should Render SignIn Form Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
