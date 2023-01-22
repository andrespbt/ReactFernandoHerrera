import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { PublicRoute } from "../../../src/router/PublicRoute";

describe("Tests on <PublicRoute/>", () => {
  test("should show the children if it's not authenticated ", () => {
    const contextValue = { logged: false };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Public Route")).toBeTruthy();
  });

  test("should navigate if user is authenticated", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Andres",
        id: "ABC123",
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<h1>Public route</h1>} />
            </Route>
            <Route path="/" element={<h1>Marvel Page</h1>} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Marvel Page")).toBeTruthy();
  });
});
