import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookForm from "../components/BookForm/BookForm";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

describe("BookForm", () => {
  it("envia o formulário corretamente", async () => {
    // Mock da resposta do axios
    axios.post.mockResolvedValue({
      data: { id: 1, title: "Livro Teste", author: "Autora Teste" },
    });

    render(
      <BrowserRouter>
        <BookForm />
      </BrowserRouter>
    );

    // Preenche os campos do formulário
    fireEvent.change(screen.getByLabelText(/título/i), {
      target: { value: "Livro Teste" },
    });

    fireEvent.change(screen.getByLabelText(/autor/i), {
      target: { value: "Autora Teste" },
    });

    // Clica no botão de salvar
    fireEvent.click(screen.getByRole("button", { name: /salvar|adicionar/i }));

    // Espera o axios.post ser chamado corretamente
    await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith(
          "http://localhost:5000/books",
          expect.objectContaining({
            title: "Livro Teste",
            author: "Autora Teste",
          })
        );
      });

    // Você pode também verificar se algo acontece após o envio, como:
    // expect(screen.getByText(/livro adicionado/i)).toBeInTheDocument();
  });
});
