/* eslint-disable no-undef */
import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Test on authReducer", () => {
  const user = { id: "ABC", name: "Andres" };

  test("should return default state", () => {
    const initialState = {
      logged: false,
    };

    const newState = authReducer(initialState, { type: null });

    expect(newState).toEqual(initialState);
  });

  test("should call login, set user and put logged in true", () => {
    const initialState = {
      logged: false,
    };
    const newState = authReducer(initialState, {
      type: types.login,
      payload: user,
    });

    expect(newState.logged).toBeTruthy();
    expect(newState.user).toEqual(user);
  });

  test("should call logout, delete user and put logged in false", () => {
    const initialState = {
      logged: true,
      user,
    };

    const newState = authReducer(initialState, {
      type: types.logout,
    });

    expect(newState.logged).toBeFalsy();
    expect(newState).toEqual({ logged: false });
  });
});
