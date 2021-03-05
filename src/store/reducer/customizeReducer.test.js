import customizeFieldsReducer from "./customizeFieldsReducer";
import * as actionTypes from "../actions/actionTypes";

describe("Customize Reducer", () => {
  // Default Return
  it("Should return default state", () => {
    const expectedState = {
      severity: true,
      status: true,
      createdDate: true,
      resolvedDate: true,
    };
    expect(customizeFieldsReducer(undefined, {})).toEqual(expectedState);
  });

  // Toggle Severity
  it("Should return toggle severity", () => {
    const expectedState = {
      severity: false,
      status: true,
      createdDate: true,
      resolvedDate: true,
    };
    expect(
      customizeFieldsReducer(
        {
          severity: true,
          status: true,
          createdDate: true,
          resolvedDate: true,
        },
        { type: actionTypes.TOGGLE_SEVERITY }
      )
    ).toEqual(expectedState);
  });

  // Toggle Status
  it("Should return toggle status", () => {
    const expectedState = {
      severity: true,
      status: false,
      createdDate: true,
      resolvedDate: true,
    };
    expect(
      customizeFieldsReducer(
        {
          severity: true,
          status: true,
          createdDate: true,
          resolvedDate: true,
        },
        { type: actionTypes.TOGGLE_STATUS }
      )
    ).toEqual(expectedState);
  });

  // Toggle CREATED DATE
  it("Should return toggle Created Date", () => {
    const expectedState = {
      severity: true,
      status: true,
      createdDate: false,
      resolvedDate: true,
    };
    expect(
      customizeFieldsReducer(
        {
          severity: true,
          status: true,
          createdDate: true,
          resolvedDate: true,
        },
        { type: actionTypes.TOGGLE_CREATED_DATE }
      )
    ).toEqual(expectedState);
  });

  // Toggle Resolved DATE
  it("Should return toggle Resolved Date", () => {
    const expectedState = {
      severity: true,
      status: true,
      createdDate: true,
      resolvedDate: false,
    };
    expect(
      customizeFieldsReducer(
        {
          severity: true,
          status: true,
          createdDate: true,
          resolvedDate: true,
        },
        { type: actionTypes.TOGGLE_RESOLVED_DATE }
      )
    ).toEqual(expectedState);
  });
});
