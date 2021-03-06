import React from "react";
import { configure } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import moxios from "moxios";
import toJson from "enzyme-to-json";

import SignIn from "./SignIn";

configure({ adapter: new Adapter() });

const styles = {
  paper: "",
  avatar: "",
  form: "",
  submit: "",
  register: "",
};

const props = {
  classes: styles,
};

const mockFn = jest.fn();

describe("Sign In Component Tests", (done) => {
  let wrapper;

  beforeEach(() => {
    const mount = createMount();
    wrapper = mount(
      <BrowserRouter>
        <SignIn {...props} onSave={mockFn} />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("Should Have Username Required", () => {
    expect(wrapper.find(TextField).at(0).props().required).toEqual(true);
  });

  it("Update Username to have have On Change method called", () => {
    wrapper
      .find(TextField)
      .at(0)
      .simulate("change", {
        target: { value: "yash@abc.com" },
      });
    wrapper
      .find(TextField)
      .at(1)
      .simulate("change", {
        target: { value: "yash" },
      });
    wrapper.update();
    wrapper.find(Button).simulate("submit");
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      wrapper.update();
      expect(JSON.parse(request.config.data)).toMatchObject({
        id: 1,
        username: "yash@abc.com",
        password: "yash",
        firstname: "Yash",
        lastname: "IK",
        location: "UK",
        mobileNumber: 12121212,
      });
      done();
    });
  });

  it("Should Have Password Required", () => {
    expect(wrapper.find(TextField).at(1).props().required).toEqual(true);
  });

  // it("If not Authenticated Should push sign in page", () => {
  //   const button = wrapper.find(Button).at(0);
  //   console.log(button);
  //   const mockFn = jest.fn();
  //   console.log(mockFn);
  //   button.simulate("click");
  //   expect(mockFn).toHaveBeenCalledWith("/signin");
  // });

  test("Should Render Sign In page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
