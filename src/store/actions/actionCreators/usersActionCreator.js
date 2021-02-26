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

const addUserDispatch = (userData) => {
  return {
    type: actionTypes.REGISTER_USER,
    ...userData,
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

export const addUser = (user) => {
  return (dispatch) => {
    return CapstoneAPI.addUser(user)
      .then((userData) => dispatch(addUserDispatch(userData)))
      .catch((err) => console.log(err));
  };
};
