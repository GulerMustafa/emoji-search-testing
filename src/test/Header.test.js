import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

// Checks that the header is rendered correctly
test("Header rendering", () => {
  render(<Header />); // The file to be checked is rendered
  const headerText = screen.getByText(/Emoji Search/i); // The data in the header has been reached
  expect(headerText).toBeInTheDocument(); // Checked that the reached data is displayed on the page
});
