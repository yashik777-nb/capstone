import * as actionTypes from "../actionTypes";
import CapstoneAPI from "../../../data/CapstoneAPI";

const loggedInUser = (userData) => {
  return {
    type: actionTypes.AUTHENTICATED_USER,
    userData,
  };
};

const userDoesNotExist = (error) => {
  return {
    type: actionTypes.USER_DOES_NOT_EXIST,
    error: error,
  };
};

export const authenticateUser = (user) => {
  return async (dispatch) => {
    return await CapstoneAPI.checkUser(user.id)
      .then((data) => {
        if (user.password === data.password)
          return dispatch(loggedInUser(data));
        else return dispatch(userDoesNotExist("UserDoesNotExist"));
      })
      .catch((err) => console.log(err));
  };
};
