import * as actionTypes from "../actionTypes";

const commonUtility = (x) => {
  return {
    type: x,
  };
};

export const severityHandler = () => {
  return (dispatch) => {
    return dispatch(commonUtility(actionTypes.TOGGLE_SEVERITY));
  };
};

export const statusHandler = () => {
  return (dispatch) => {
    return dispatch(commonUtility(actionTypes.TOGGLE_STATUS));
  };
};

export const createdDateHandler = () => {
  return (dispatch) => {
    return dispatch(commonUtility(actionTypes.TOGGLE_CREATED_DATE));
  };
};

export const resolvedDateHandler = () => {
  return (dispatch) => {
    return dispatch(commonUtility(actionTypes.TOGGLE_RESOLVED_DATE));
  };
};
