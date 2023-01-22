import { types } from "../../../src/auth/types/types";

describe('Tests on "types"', () => {
  test("should return this types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
