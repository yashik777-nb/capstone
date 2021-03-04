import React from "react";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";

import About from "./About";

configure({ adapter: new Adapter() });

describe("About Page Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(<About />);
  });

  it("Should render one h4", () => {
    expect(wrapper.find("h4").length).toEqual(1);
  });

  it("Should render one h6", () => {
    expect(wrapper.find("h6").length).toEqual(1);
  });

  test("Should Render About page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
