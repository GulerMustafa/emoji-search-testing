import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

// Header kısmının doğru bir şekilde render edildiğini kontrol eder
test("Header rendering", () => {
  render(<Header />); // kontrol edilecek dosya render edilir
  const headerText = screen.getByText(/Emoji Search/i); // başlıkta yazan veriye ulaşıldı
  expect(headerText).toBeInTheDocument(); // ulaşılan verinin sayfada görüntülendiği kontrol edildi
});
