import * as actionTypes from "../actionTypes";

export const severityHandler = () => {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.TOGGLE_SEVERITY,
    });
  };
};

export const statusHandler = () => {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.TOGGLE_STATUS,
    });
  };
};

export const createdDateHandler = () => {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.TOGGLE_CREATED_DATE,
    });
  };
};

export const resolvedDateHandler = () => {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.TOGGLE_RESOLVED_DATE,
    });
  };
};
