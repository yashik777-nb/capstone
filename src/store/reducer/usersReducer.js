import * as actionTypes from "../actions/actionTypes";

const usersInitalState = {
  user: {
    authenticated: false,
    message: "",
    id: "",
    username: "",
    firstname: "",
    lastname: "",
    mobileNumber: null,
  },
};

const usersReducer = (state = usersInitalState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATED_USER:
      return {
        ...state,
        authenticated: true,
        username: action.userData.username,
      };
    case actionTypes.USER_DOES_NOT_EXIST:
      return {
        ...state,
        authenticated: false,
        message: action.error,
      };
    default:
      return state;
  }
};

export default usersReducer;
