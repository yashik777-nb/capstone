import React from "react";
import { Provider } from "react-redux";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import configureStore from "redux-mock-store";

import CustomizeFields, { BlueCheckBox } from "./CustomizeFields";

configure({ adapter: new Adapter() });

const store = {};

const props = {
  severity: false,
  status: false,
  createdDate: false,
  resolvedDate: false,
  severityHandler: () => {},
  statusHandler: () => {},
  createdDateHandler: () => {},
  resolvedDateHandler: () => {},
};

const mockStore = configureStore();

describe("Customize Fields Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(
      <Provider store={mockStore(store)}>
        <CustomizeFields {...props} />
      </Provider>
    );
  });

  it("Should render the severity checkbox as unchekced", () => {
    expect(wrapper.find(BlueCheckBox).at(0).props().checked).toEqual(false);
  });

  it("Should render the status checkbox as unchekced", () => {
    expect(wrapper.find(BlueCheckBox).at(1).props().checked).toEqual(false);
  });

  it("Should render the created date checkbox as unchekced", () => {
    expect(wrapper.find(BlueCheckBox).at(2).props().checked).toEqual(false);
  });

  it("Should render the resolved date checkbox as unchekced", () => {
    expect(wrapper.find(BlueCheckBox).at(3).props().checked).toEqual(false);
  });

  test("Should Render Customize Fields Component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
