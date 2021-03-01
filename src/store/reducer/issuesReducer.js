import * as actionTypes from "../actions/actionTypes";

const intialState = {
  issues: [],
  issuesCopy: [],
  searchValue: "",
};

const issuesReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE:
      const getIssues = action.issues.filter(
        (issue) => issue.title !== undefined
      );
      return {
        ...state,
        issues: [...getIssues],
        issuesCopy: [...getIssues],
      };
    case actionTypes.UPDATE_ISSUE:
      const updatedIssues = state.issuesCopy.map((issue) => {
        if (issue.id === action.updatedIssue.id) return action.updatedIssue;
        else return issue;
      });
      return {
        ...state,
        issues: [...updatedIssues],
        issuesCopy: [...updatedIssues],
      };
    case actionTypes.DELETE_ISSUE:
      const deletedIssues = state.issuesCopy.filter(
        (issue) => issue.id !== action.deletedId
      );
      console.log("1.[Reducer]", deletedIssues);
      return {
        ...state,
        issues: [...deletedIssues],
        issuesCopy: [...deletedIssues],
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
