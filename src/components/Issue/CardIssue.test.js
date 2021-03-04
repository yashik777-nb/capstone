import React from "react";
import { configure } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMount } from "@material-ui/core/test-utils";
import Typography from "@material-ui/core/Typography";

import CardIssue from "./CardIssue";

configure({ adapter: new Adapter() });

const styles = {
  root: "",
  title: "",
  pos: "",
  issueDescription: "",
};

const props = {
  classes: styles,
  customize: {
    severity: true,
    status: true,
    createdDate: true,
    resolvedDate: true,
  },
  id: 1,
  title: "Issue One",
  issueDescription: "Issue Description One",
  severity: "Critical",
  status: "Open",
  createdDate: "28/02/2021  ",
  resolvedDate: "29/03/2021",
  views: 5,
  backGroundColor: "#7828BF",
  hoverBackGroundColor: "#9C5BB7",
};

describe("About Page Tests", () => {
  let wrapper;

  beforeEach(() => {
    const render = createMount();
    wrapper = render(
      <BrowserRouter>
        <CardIssue {...props} />
      </BrowserRouter>
    );
  });

  it("Should render six Typography", () => {
    expect(wrapper.find(Typography).length).toEqual(6);
  });

  test("Should Render a Card Issue", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
