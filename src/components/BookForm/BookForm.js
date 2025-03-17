import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookForm({ books, setBooks }) {
    const [book, setBook] = useState({ title: "", author: "", genre: "", date: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!book.title || !book.author || !book.genre || !book.date) return;
        setBooks([...books, book]);
        navigate("/books");
    };

    return (
        <div className="form-container">
            <br></br>
            <h2>Cadastrar</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Título" onChange={handleChange} />
                <input name="author" placeholder="Autor" onChange={handleChange} />
                <input name="genre" placeholder="Gênero" onChange={handleChange} />

                {/* Texto explicativo */}
                <label className="date-label">Data de Cadastro:</label>
                <input name="date" type="date" onChange={handleChange} />

                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}

export default BookForm;