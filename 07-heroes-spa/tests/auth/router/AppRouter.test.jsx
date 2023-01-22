import { enableFetchMocks } from "jest-fetch-mock";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { AppRouter } from "../../../src/router/AppRouter";
import { MemoryRouter, Router } from "react-router-dom";

describe("Tests on <AppRouter/>", () => {
  enableFetchMocks();
  test("should render login if it is not authenticated", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(screen.getAllByText("Login")).toBeTruthy();
    expect(screen.getAllByText("LoginPage")).toBeTruthy();
  });

  test("should render marvel component if it is authenticated", () => {
    const contextValue = {
      logged: true,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(screen.getAllByText("Marvel")).toBeTruthy();
    expect(screen.getAllByText("Spider Man")).toBeTruthy();
  });
});
