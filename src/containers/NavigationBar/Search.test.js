import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Search from "./Search";

configure({ adapter: new Adapter() });

describe("Search Input Tests", () => {
  let wrapperCheck;

  beforeEach(() => {
    wrapperCheck = shallow(<Search />);
  });

  it("Should render one input", () => {
    expect(wrapperCheck.find("div").length).toEqual(3);
  });
});
