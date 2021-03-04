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
  severity: true,
  status: true,
  createdDate: true,
  resolvedDate: true,
  severityHandler: () => {},
  statusHandler: () => {},
  createdDateHandler: () => {},
  resolvedDateHandler: () => {},
};

const mockStore = configureStore();

describe("Navigation Bar Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(
      <Provider store={mockStore(store)}>
        <CustomizeFields {...props} />
      </Provider>
    );
  });

  it("Should render four BlueCheckbox components", () => {
    expect(wrapper.find(BlueCheckBox).length).toEqual(4);
  });

  it("Should render the severity checkbox as checked", () => {
    expect(wrapper.find(BlueCheckBox).at(0).props().checked).toEqual(true);
  });

  it("Should render the status checkbox as checked", () => {
    expect(wrapper.find(BlueCheckBox).at(1).props().checked).toEqual(true);
  });

  it("Should render the created date checkbox as checked", () => {
    expect(wrapper.find(BlueCheckBox).at(2).props().checked).toEqual(true);
  });

  it("Should render the resolved date checkbox as checked", () => {
    expect(wrapper.find(BlueCheckBox).at(3).props().checked).toEqual(true);
  });

  test("Should Render Customize Fields Component With Props as true", () => {
    expect(wrapper).toMatchSnapshot();
  });

});
