import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// Tests that clicking an emoji successfully copied
describe("Emoji Copy Test", () => {
  // renders the App file by running before each test
  beforeEach(() => {
    render(<App />);
  });

  test("Clicked action must be copied", () => {
    const emoji = screen.getByText("Grin"); // Emoji named wink was retrieved for testing
    fireEvent.click(emoji); // clicked on the drawn emoji
    expect(emoji.parentElement.getAttribute("data-clipboard-text")).toMatch(
      "😁"
    ); // the correctness of the copied emoji is tested
  });
});
