import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// Filtreleme işleminin doğruluğunu kontrol eder
describe("Filter Emoji Test", () => {
  // her testten önce çalışarak App dosyasını render eder
  beforeEach(() => {
    render(<App />);
  });

  test("When filtering process start the emoji list must be rendered properly", () => {
    const emojiInput = screen.getByPlaceholderText("Search Emoji"); // Search Emoji inputuna ulaşıldı
    const emoji = "Grinning"; // filtrelenecek veri tanımlandı
    fireEvent.change(emojiInput, emoji); // filtreleme işlemi yapıldı
    expect(screen.getByText(emoji)).toBeInTheDocument(); // filtrelenen emojinin başarıyla görüntülenmesi kontrol edildi
  });
});
