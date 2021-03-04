import React from "react";
import { Provider } from "react-redux";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import configureStore from "redux-mock-store";

import CustomizeFields, { BlueCheckBox } from "./CustomizeFields";

configure({ adapter: new Adapter() });

const store = {
  severity: true,
  status: true,
  createdDate: true,
  resolvedDate: true,
};

const props = {
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
});
