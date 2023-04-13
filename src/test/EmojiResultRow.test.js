import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// Controls the correct display of the emoji list when the page is loaded
describe("Emoji list render process", () => {
  test("Emoji list must be rendered properly", () => {
    render(<App />); // the file to be checked is rendered
    const listItems = screen.getAllByTestId("row"); // List items are pulled according to the test id information
    expect(listItems.length).toEqual(20); // check the equivalence of the number of selected list items
  });
});
