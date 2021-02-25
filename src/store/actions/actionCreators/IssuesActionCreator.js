import * as actionTypes from "../actionTypes";
import CapstoneAPI from "../../../data/CapstoneAPI";

const loadIssues = (issues) => {
  return {
    type: actionTypes.INITIALIZE,
    issues: issues,
  };
};

const saveIssue = (issue) => {
  return {
    type: actionTypes.ADD_ISSUE,
    issue: issue,
  };
};

export const getIssues = () => {
  return (dispatch) => {
    return CapstoneAPI.getAllIssues()
      .then((issues) => dispatch(loadIssues(issues)))
      .catch((err) => console.log(err));
  };
};

export const addIssue = (issue) => {
  return (dispatch) => {
    return CapstoneAPI.addIssue(issue)
      .then((issue) => dispatch(saveIssue(issue)))
      .catch((err) => console.log(err));
  };
};
