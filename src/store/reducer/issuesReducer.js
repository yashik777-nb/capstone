import * as actionTypes from "../actions/actionTypes";

const intialState = {
  issues: [],
  issuesCopy: [],
  searchValue: "",
};

const issuesReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE:
      return {
        ...state,
        issues: [...action.issues],
        issuesCopy: [...action.issues],
      };
    case actionTypes.ADD_ISSUE:
      return {
        ...state,
        issues: state.issues.concat(action.issue),
        issuesCopy: state.issues.concat(action.issue),
      };
    case actionTypes.FILTER_ISSUE:
      const filteredIssues = state.issuesCopy.filter((issue) =>
        issue.issueDescription
          .toLowerCase()
          .includes(action.searchValue.toLowerCase())
      );
      return {
        ...state,
        issues: [...filteredIssues],
        searchValue: action.searchValue,
      };
    default:
      return state;
  }
};

export default issuesReducer;
