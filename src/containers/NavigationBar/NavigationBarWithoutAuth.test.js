import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";

import NavigationBar from "./NavigationBar";

configure({ adapter: new Adapter() });

const styles = {
  navDisplayFlex: "Connect(NavigationBar)-navbarDisplayFlex-58",
  navbarDisplayFlex: "Connect(NavigationBar)-navDisplayFlex-57",
  linkText: "Connect(NavigationBar)-linkText-59",
  capStoneText: "Connect(NavigationBar)-capStoneText-60",
  homeButton: "Connect(NavigationBar)-homeButton-61",
};

const store = {
  users: {
    authenticated: false,
  },
};

const props = {
  classes: styles,
  authenticated: false,
  onSearchIssue: () => {},
  logoutUser: () => {},
};

const mockStore = configureStore();

const theme = createMuiTheme({
  props: { MuiWithWidth: { initialWidth: "lg" } },
});

describe("Navigation Bar Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(
      <Provider store={mockStore(store)}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <NavigationBar {...props} />
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  });

  it("Should render seven NavLinks if authenticated", () => {
    expect(wrapper.find("NavLink").length).toEqual(6);
  });

  it("Navlink path check", () => {
    expect(wrapper.find("NavLink").get(0).props.to).toEqual("/");
  });

  it("Navlink path check for Sign In", () => {
    expect(wrapper.find("NavLink").get(3).props.to).toEqual("/signin");
  });

  test("Should Render navigation Bar without Auth", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
