import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { PrivateRoute } from "../../../src/router/PrivateRoute";

describe("Tests on <PrivateRoute/>", () => {
  test("should show the children if it's not authenticated ", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = { logged: true, user: { id: "ABC", name: "Andres" } };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(localStorage.setItem).toHaveBeenCalledWith(
      "lastPath",
      "/search?q=batman"
    );
    expect(localStorage.setItem).toHaveBeenCalledWith("userName", "Andres");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });
});
