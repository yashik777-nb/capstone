import React from "react";
import { configure } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import moxios from "moxios";
import toJson from "enzyme-to-json";

import IssueForm from "./IssueForm";

configure({ adapter: new Adapter() });

const styles = {
  paper: "",
  avatar: "",
  form: "",
  submit: "",
  register: "",
  formControl: "",
  helperText: "",
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
        <IssueForm {...props} onSave={mockFn} />
      </BrowserRouter>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("Should Have Issue Title Required for Registartion", () => {
    expect(wrapper.find(TextField).at(0).props().required).toEqual(true);
  });

  it("Should Have Issue Description Required for Adding a New Issue", () => {
    expect(wrapper.find(TextField).at(1).props().required).toEqual(true);
  });

  it("Registration Form Test", () => {
    wrapper
      .find(TextField)
      .at(0)
      .simulate("change", {
        target: { value: "Test One" },
      });
    wrapper
      .find(TextField)
      .at(1)
      .simulate("change", {
        target: { value: "Test Description One" },
      });
    wrapper
      .find(FormControl)
      .at(0)
      .simulate("change", {
        target: { value: "Critical" },
      });
    wrapper
      .find(FormControl)
      .at(1)
      .simulate("change", {
        target: { value: "Open" },
      });
    wrapper
      .find(FormControl)
      .at(2)
      .simulate("change", {
        target: { value: "28/02/2021" },
      });
    wrapper
      .find(FormControl)
      .at(3)
      .simulate("change", {
        target: { value: "29/03/2021" },
      });
    wrapper.update();
    wrapper.find(Button).simulate("submit");
    moxios.wait(() => {
      let request = moxios.requests.mostRecent();
      wrapper.update();
      expect(JSON.parse(request.config.data)).toMatchObject({
        id: 1,
        title: "Test One",
        issueDescription: "Test Description One",
        severity: "Critical",
        status: "Open",
        createdDate: "28/02/2021",
        resolvedDate: "29/03/2021",
        views: 5,
        backGroundColor: "#7828BF",
        hoverBackGroundColor: "#9C5BB7",
      });
      done();
    });
  });

  test("Should Render Issue Form page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
