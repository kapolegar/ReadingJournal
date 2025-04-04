import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

jest.mock("axios");

test("exibe o texto 'Reading Journal' no cabeçalho", () => {
  render(

      <App />

  );

  expect(screen.getByText(/Cadastrar/i)).toBeInTheDocument();
});
