import { Link } from "react-router-dom";

function ReadingJournal() {
    return (
        <div className="container">
            <br></br>
            <h2>Sobre</h2><br>
            </br>
            <div className="about-container">
                <h2>📚 Reading Journal</h2>
                <p>O Reading Journal é um sistema simples e eficiente para gerenciar suas leituras. Com ele, você pode registrar livros que já leu, está lendo ou pretende ler no futuro.</p>
                <p><strong>Funcionalidades:</strong></p>
                <ul style={{ textAlign: "left", listStyle: "none", padding: 0 }}>
                    <li>✅ Adicionar livros com título, autor, gênero e data de cadastro</li>
                    <li>✅ Listar os livros cadastrados</li>
                    <li>✅ Excluir livros que não deseja mais manter no histórico</li>
                </ul>
                <p>Comece agora: cadastre um novo livro ou visualize sua lista na aba de navegação!</p>
            </div>
        </div>
    );
}
export default ReadingJournal;