import issuesReducer from "./issuesReducer";
import * as actionTypes from "../actions/actionTypes";

describe("Issues Reducer", () => {
  // Default State
  it("Default State", () => {
    const expectedState = {
      issues: [],
      issuesCopy: [],
      searchValue: "",
    };
    expect(issuesReducer(undefined, {})).toEqual(expectedState);
  });

  // Initialize
  it("Initialize All Issues", () => {
    const expectedState = {
      issues: [
        {
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
        },
      ],
      issuesCopy: [
        {
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
        },
      ],
      searchValue: "",
    };
    expect(
      issuesReducer(
        {
          issues: [],
          issuesCopy: [],
          searchValue: "",
        },
        {
          type: actionTypes.INITIALIZE,
          issues: [
            {
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
            },
          ],
        }
      )
    ).toEqual(expectedState);
  });

  // Add An Issue
  it("Add An Issue", () => {
    const expectedState = {
      issues: [
        {
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
        },
      ],
      issuesCopy: [
        {
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
        },
      ],
      searchValue: "",
    };
    expect(
      issuesReducer(
        {
          issues: [],
          issuesCopy: [],
          searchValue: "",
        },
        {
          type: actionTypes.ADD_ISSUE,
          issue: {
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
          },
        }
      )
    ).toEqual(expectedState);
  });

  // Update An Issue
  it("Update An Issue", () => {
    const expectedState = {
      issues: [
        {
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
        },
      ],
      issuesCopy: [
        {
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
        },
      ],
      searchValue: "",
    };
    expect(
      issuesReducer(
        {
          issues: [
            {
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
            },
          ],
          issuesCopy: [
            {
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
            },
          ],
          searchValue: "",
        },
        {
          type: actionTypes.UPDATE_ISSUE,
          updatedIssue: {
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
          },
        }
      )
    ).toEqual(expectedState);
  });

  // Delete An Issue
  it("Delete An Issue", () => {
    const expectedState = {
      issues: [
        {
          id: 2,
          title: "Issue Two",
          issueDescription: "Issue Description Two",
          severity: "Minor",
          status: "Closed",
          createdDate: "2/3/2021",
          resolvedDate: "3/3/2021",
          views: 9,
          backGroundColor: "#a03919",
          hoverBackGroundColor: "#d8587a",
        },
      ],
      issuesCopy: [
        {
          id: 2,
          title: "Issue Two",
          issueDescription: "Issue Description Two",
          severity: "Minor",
          status: "Closed",
          createdDate: "2/3/2021",
          resolvedDate: "3/3/2021",
          views: 9,
          backGroundColor: "#a03919",
          hoverBackGroundColor: "#d8587a",
        },
      ],
      searchValue: "",
    };
    expect(
      issuesReducer(
        {
          issues: [
            {
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
            },
            {
              id: 2,
              title: "Issue Two",
              issueDescription: "Issue Description Two",
              severity: "Minor",
              status: "Closed",
              createdDate: "2/3/2021",
              resolvedDate: "3/3/2021",
              views: 9,
              backGroundColor: "#a03919",
              hoverBackGroundColor: "#d8587a",
            },
          ],
          issuesCopy: [
            {
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
            },
            {
              id: 2,
              title: "Issue Two",
              issueDescription: "Issue Description Two",
              severity: "Minor",
              status: "Closed",
              createdDate: "2/3/2021",
              resolvedDate: "3/3/2021",
              views: 9,
              backGroundColor: "#a03919",
              hoverBackGroundColor: "#d8587a",
            },
          ],
          searchValue: "",
        },
        {
          type: actionTypes.DELETE_ISSUE,
          deletedId: 1,
        }
      )
    ).toEqual(expectedState);
  });

  // Filter An Issue
  it("Filter An Issue", () => {
    const expectedState = {
      issues: [
        {
          id: 2,
          title: "Issue Two",
          issueDescription: "Issue Description Two",
          severity: "Minor",
          status: "Closed",
          createdDate: "2/3/2021",
          resolvedDate: "3/3/2021",
          views: 9,
          backGroundColor: "#a03919",
          hoverBackGroundColor: "#d8587a",
        },
      ],
      issuesCopy: [
        {
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
        },
        {
          id: 2,
          title: "Issue Two",
          issueDescription: "Issue Description Two",
          severity: "Minor",
          status: "Closed",
          createdDate: "2/3/2021",
          resolvedDate: "3/3/2021",
          views: 9,
          backGroundColor: "#a03919",
          hoverBackGroundColor: "#d8587a",
        },
      ],
      searchValue: "Two",
    };
    expect(
      issuesReducer(
        {
          issues: [
            {
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
            },
            {
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
            },
          ],
          issuesCopy: [
            {
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
            },
            {
              id: 2,
              title: "Issue Two",
              issueDescription: "Issue Description Two",
              severity: "Minor",
              status: "Closed",
              createdDate: "2/3/2021",
              resolvedDate: "3/3/2021",
              views: 9,
              backGroundColor: "#a03919",
              hoverBackGroundColor: "#d8587a",
            },
          ],
          searchValue: "",
        },
        {
          type: actionTypes.FILTER_ISSUE,
          searchValue: "Two",
        }
      )
    ).toEqual(expectedState);
  });
});
