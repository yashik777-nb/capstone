import * as actionTypes from "../actions/actionTypes";

const intialState = {
  severity: true,
  status: true,
  createdDate: true,
  resolvedDate: true,
};

const customizeFiledsReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SEVERITY:
      return {
        ...state,
        severity: !state.severity,
      };
    case actionTypes.TOGGLE_STATUS:
      return {
        ...state,
        status: !state.status,
      };
    case actionTypes.TOGGLE_CREATED_DATE:
      return {
        ...state,
        createdDate: !state.createdDate,
      };
    case actionTypes.TOGGLE_RESOLVED_DATE:
      return {
        ...state,
        resolvedDate: !state.resolvedDate,
      };
    default:
      return state;
  }
};

export default customizeFiledsReducer;
