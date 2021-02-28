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
        username: action.userData[0].username,
        firstname: action.userData[0].firstname,
        lastname: action.userData[0].lastname,
        location: action.userData[0].location,
        mobileNumber: action.userData[0].mobileNumber,
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
        firstname: action.firstname,
        lastname: action.lastname,
        location: action.location,
        mobileNumber: action.mobileNumber,
      };
    default:
      return state;
  }
};

export default usersReducer;
