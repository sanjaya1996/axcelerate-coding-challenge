import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchField from "./SearchField";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

jest.useFakeTimers();

describe("SearchField", () => {
  it("renders with initial value and placeholder", () => {
    render(
      <SearchField
        value="initial"
        onSearch={jest.fn()}
        placeholder="Search here..."
      />
    );

    const input = screen.getByPlaceholderText(
      "Search here..."
    ) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("initial");
  });

  it("calls onSearch immediately when debounce is 0", () => {
    const mockSearch = jest.fn();
    render(<SearchField value="" onSearch={mockSearch} debounceDelay={0} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "hello" } });

    expect(mockSearch).toHaveBeenCalledWith("hello");
  });

  it("calls onSearch after debounce delay", () => {
    const mockSearch = jest.fn();
    render(<SearchField value="" onSearch={mockSearch} debounceDelay={300} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "debounce" } });

    expect(mockSearch).not.toHaveBeenCalled();

    jest.advanceTimersByTime(300);
    expect(mockSearch).toHaveBeenCalledWith("debounce");
  });

  it("clears previous timeout when input changes quickly", () => {
    const mockSearch = jest.fn();
    render(<SearchField value="" onSearch={mockSearch} debounceDelay={300} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "d" } });
    fireEvent.change(input, { target: { value: "de" } });
    fireEvent.change(input, { target: { value: "deb" } });

    jest.advanceTimersByTime(299);
    expect(mockSearch).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(mockSearch).toHaveBeenCalledWith("deb");
    expect(mockSearch).toHaveBeenCalledTimes(1);
  });
});
