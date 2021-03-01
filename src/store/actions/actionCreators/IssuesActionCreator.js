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

const updateIssues = (updatedIssue) => {
  console.log("3.[Update Issue]", updatedIssue);
  return {
    type: actionTypes.UPDATE_ISSUE,
    updatedIssue: updatedIssue,
  };
};

const deletedIssue = (id) => {
  return {
    type: actionTypes.DELETE_ISSUE,
    deletedId: id,
  };
};

export const getIssues = () => {
  return (dispatch) => {
    return CapstoneAPI.getAllIssues()
      .then((issues) => dispatch(loadIssues(issues)))
      .catch((err) => console.log(err));
  };
};

export const deleteIssue = (id) => {
  return (dispatch) => {
    return CapstoneAPI.deleteIssue(id)
      .then((id) => dispatch(deletedIssue(id)))
      .catch((err) => console.log(err));
  };
};

export const updateIssue = (issue) => {
  console.log("1.[Update Issue]", issue);
  return (dispatch) => {
    return CapstoneAPI.updateIssue(issue)
      .then((updatedIssue) => {
        console.log("2.[Update Issue]", updatedIssue);
        return dispatch(updateIssues(updatedIssue));
      })
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

export const filterIssues = (issueDescription) => {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.FILTER_ISSUE,
      searchValue: issueDescription,
    });
  };
};
