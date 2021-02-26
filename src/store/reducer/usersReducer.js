import * as actionTypes from "../actions/actionTypes";

const userInitalState = {
  authenticated: false,
  message: "",
  id: "",
  username: "",
  firstname: "",
  lastname: "",
  mobileNumber: null,
};

const usersReducer = (state = userInitalState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATED_USER:
      return {
        ...state,
        authenticated: true,
        username: action.userData.username,
        firstName: action.userData.firstName,
        lastName: action.userData.lastName,
        location: action.userData.location,
        mobileNumber: action.userData.mobileNumber,
      };
    case actionTypes.USER_DOES_NOT_EXIST:
      return {
        ...state,
        authenticated: false,
        message: action.error,
      };
    case actionTypes.REGISTER_USER:
      console.log(state, action);
      return {
        ...state,
        authenticated: true,
        username: action.username,
        firstName: action.firstName,
        lastName: action.lastName,
        location: action.location,
        mobileNumber: action.mobileNumber,
      };
    default:
      return state;
  }
};

export default usersReducer;
