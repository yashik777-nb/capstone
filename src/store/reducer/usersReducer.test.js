import usersReducer from "./usersReducer";
import * as actionTypes from "../actions/actionTypes";

describe("Users Reducer", () => {
  // Default State
  it("Default State", () => {
    const expectedState = {
      authenticated: false,
      username: "",
      firstname: "",
      lastname: "",
      location: "",
      mobileNumber: null,
    };
    expect(usersReducer(undefined, {})).toEqual(expectedState);
  });

  // Authenticated User
  it("Authenticate User State", () => {
    const expectedState = {
      authenticated: true,
      username: "yash@abc.com",
      firstname: "Yash",
      lastname: "IK",
      location: "UK",
      mobileNumber: 12121212,
    };
    expect(
      usersReducer(
        {
          authenticated: false,
          username: "",
          firstname: "",
          lastname: "",
          location: "",
          mobileNumber: null,
        },
        {
          type: actionTypes.AUTHENTICATED_USER,
          userData: [
            {
              username: "yash@abc.com",
              firstname: "Yash",
              lastname: "IK",
              location: "UK",
              mobileNumber: 12121212,
            },
          ],
        }
      )
    ).toEqual(expectedState);
  });

  // Authenticated User
  it("Register User State", () => {
    const expectedState = {
      authenticated: true,
      username: "yash@abc.com",
      firstname: "Yash",
      lastname: "IK",
      location: "UK",
      mobileNumber: 12121212,
    };
    expect(
      usersReducer(
        {
          authenticated: false,
          username: "",
          firstname: "",
          lastname: "",
          location: "",
          mobileNumber: null,
        },
        {
          type: actionTypes.REGISTER_USER,

          username: "yash@abc.com",
          firstname: "Yash",
          lastname: "IK",
          location: "UK",
          mobileNumber: 12121212,
        }
      )
    ).toEqual(expectedState);
  });

  // Authenticated User
  it("Logout User State", () => {
    const expectedState = {
      authenticated: false,
      username: "",
      firstname: "",
      lastname: "",
      location: "",
      mobileNumber: null,
    };
    expect(
      usersReducer(
        {
          authenticated: true,
          username: "yash@abc.com",
          firstname: "Yash",
          lastname: "IK",
          location: "UK",
          mobileNumber: 12121212,
        },
        {
          type: actionTypes.LOGOUT_USER,
        }
      )
    ).toEqual(expectedState);
  });
});
