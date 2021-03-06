import React from "react";
import { configure } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import moxios from "moxios";
import toJson from "enzyme-to-json";

import Registration from "./Registration";

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

describe("Registration Component Tests", (done) => {
  let wrapper;

  beforeEach(() => {
    const mount = createMount();
    wrapper = mount(
      <BrowserRouter>
        <Registration {...props} onSave={mockFn} />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("Should Have Username Required for Registartion", () => {
    expect(wrapper.find(TextField).at(0).props().required).toEqual(true);
  });

  it("Registration Form Test", () => {
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
    wrapper
      .find(TextField)
      .at(2)
      .simulate("change", {
        target: { value: "Yash" },
      });
    wrapper
      .find(TextField)
      .at(3)
      .simulate("change", {
        target: { value: "IK" },
      });
    wrapper
      .find(TextField)
      .at(4)
      .simulate("change", {
        target: { value: "UK" },
      });
    wrapper
      .find(TextField)
      .at(1)
      .simulate("change", {
        target: { value: 12121212 },
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

  it("Should Have Password Required for Registration", () => {
    expect(wrapper.find(TextField).at(1).props().required).toEqual(true);
  });

  test("Should Render Registration page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
