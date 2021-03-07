import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Drawer } from "@material-ui/core";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";

import MobileNavigationBar from "./MobileNavigationBar";

configure({ adapter: new Adapter() });

const navLinks = [
  { title: `About`, path: `/about`, toolTip: `About Application` },
  { title: `Issues`, path: `/issues`, toolTip: `Issues in the Applicaiton` },
  { title: `SignIn`, path: `/signin`, toolTip: `Sign In to Applciaiton` },
  { title: `Register`, path: `/register`, toolTip: `Register Yourself` },
];

const styles = {
  list: "",
  linkText: "",
};

const store = {
  users: {
    authenticated: true,
  },
};

const props = {
  classes: styles,
  authenticated: true,
  navLinks: navLinks,
};

const mockStore = configureStore();

describe("Mobile Navigation Bar Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(
      <Provider store={mockStore(store)}>
        <BrowserRouter>
          <MobileNavigationBar {...props} />
        </BrowserRouter>
      </Provider>
    );
  });

  it("Should render seven NavLinks if authenticated for Mobile", () => {
    expect(wrapper.find(Drawer).length).toEqual(1);
  });

  test("Should Render Mobile navigation Bar", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
