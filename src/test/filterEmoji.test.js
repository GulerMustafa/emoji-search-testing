import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// Checks the correctness of the filtering operation
describe("Filtered Emoji Test", () => {
  // Renders the App file by running before each test
  beforeEach(() => {
    render(<App />);
  });

  test("filtering must be rendered", () => {
    const emojiInput = screen.getByPlaceholderText("Search Emoji"); // Search Emoji input reached
    const emoji = "Joy"; // The data to be filtered is defined
    fireEvent.change(emojiInput, emoji); // Filtering done
    expect(screen.getByText(emoji)).toBeInTheDocument(); // Checked the successful display of the filtered emoji
  });
});
