import { render, screen, waitFor } from "@testing-library/react";
import BookList from "../components/BookList/BookList";
import axios from "axios";
import { BrowserRouter } from "react-router-dom"; // <== necessário!

jest.mock("axios");

describe("BookList", () => {
  it("renderiza os livros corretamente", async () => {
    const mockData = [
      { id: 1, title: "Livro 1", author: "Autor 1" },
      { id: 2, title: "Livro 2", author: "Autor 2" },
    ];

    axios.get.mockResolvedValue({ data: mockData }); // Simula a resposta da API

    render(
      <BrowserRouter>
        <BookList />
      </BrowserRouter>
    );

    // Espera os elementos aparecerem (depois do fetch)
    await waitFor(() => {
      expect(screen.getByText("Livro 1")).toBeInTheDocument();
      expect(screen.getByText("Autor 1")).toBeInTheDocument();
    });
  });
});
