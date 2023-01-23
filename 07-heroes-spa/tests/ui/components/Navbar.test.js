import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Tests on <Navbar />", () => {
  const contextValue = {
    logged: true,
    user: {
      id: "ABC",
      name: "Andres Poblete",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("should show user name", () => {
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(contextValue.user.name)).toBeTruthy();
  });

  test("should call logout function and navigate to login page", () => {
    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutButton = screen.getByRole("button");
    fireEvent.click(logoutButton);
    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockedNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
