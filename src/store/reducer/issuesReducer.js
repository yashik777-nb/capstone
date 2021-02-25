import * as actionTypes from "../actions/actionTypes";

const intialState = {
  issues: [],
};

const issuesReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE:
      return {
        issues: [...action.issues],
      };
    case actionTypes.ADD_ISSUE:
      return {
        issues: state.issues.concat(action.issue),
      };
    default:
      return state;
  }
};

export default issuesReducer;
