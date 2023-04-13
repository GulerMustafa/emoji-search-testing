import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// Bir emojiye tıklandığında başarıyla kopyalandığını test eder
describe("Emoji Copy Test", () => {
  // her testten önce çalışarak App dosyasını render eder
  beforeEach(() => {
    render(<App />);
  });

  test("When emoji clicked it must be copied", () => {
    const emoji = screen.getByText("Wink"); // test için wink isimli emoji verisi çekildi
    fireEvent.click(emoji); // çekilen emojiye tıklandı
    expect(emoji.parentElement.getAttribute("data-clipboard-text")).toMatch(
      "😉"
    ); // kopyalanan emojinin doğruluğu test edildi
  });
});
