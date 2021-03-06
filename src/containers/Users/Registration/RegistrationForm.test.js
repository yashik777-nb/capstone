import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";

import RegistrationForm from "./RegistrationForm";

configure({ adapter: new Adapter() });

const props = {
  registerUser: () => {},
};

const store = {};
const mockStore = configureStore();

describe("Registration Form Container Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(
      <Provider store={mockStore(store)}>
        <BrowserRouter>
          <RegistrationForm {...props} />
        </BrowserRouter>
      </Provider>
    );
  });

  it("Should render Registration Form", () => {
    expect(wrapper.find("Registration").length).toEqual(1);
  });

  test("Should Render Registration Form Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
