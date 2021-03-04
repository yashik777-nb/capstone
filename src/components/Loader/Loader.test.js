import React from "react";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";

import Loader from "./Loader";

configure({ adapter: new Adapter() });

describe("Loader Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(<Loader />);
  });

  it("Should render one image", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });

  test("Should Render Loader page", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
