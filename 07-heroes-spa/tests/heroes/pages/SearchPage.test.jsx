import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("Tests on SearchPage", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should show default values correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test("should show input and queryString with value 'Batman' ", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=Batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByLabelText("searchInput");
    const img = screen.getByRole("img");

    expect(input.value).toBe("Batman");
    expect(img.src).toContain("/heroes/dc-batman.jpg");
  });

  test("should show error when hero is not found ", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=asdasd"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const div = screen.getByLabelText("errorMsg");

    expect(div).toBeTruthy();
    expect(div.innerHTML).toBe("Hero called <b>asdasd</b> doesn't exist");
  });

  test("should navigate to new screen ", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=asdasd"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByLabelText("searchInput");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: "Batman" } });
    fireEvent.submit(form);

    expect(mockedNavigate).toHaveBeenCalledWith("?q=batman");
  });
});
