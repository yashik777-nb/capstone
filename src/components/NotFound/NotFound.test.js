import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";

import NotFound from "./NotFound";

configure({ adapter: new Adapter() });

describe("NotFound Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(<NotFound />);
  });

  it("Should render one not found", () => {
    expect(wrapper.find("h1").length).toEqual(1);
  });

  test("Should Render Not Found page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
