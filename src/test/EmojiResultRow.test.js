import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// Sayfa yüklendiğinde emoji listesinin düzgün görüntülenmesini kontrol eder
describe("Emoji list render process", () => {
  test("Emoji list must be rendered properly", () => {
    render(<App />); // kontrol edilecek dosya render edilir
    const listItems = screen.getAllByTestId("row"); // test id bilgisine göre list itemları çekildi
    expect(listItems.length).toEqual(20); // çekilen list itemlarının sayısının denkliği kontrol edildi
  });
});
