import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookForm from "./BookForm";

function EditBookWrapper() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    
    useEffect(() => {
        axios.get(`http://localhost:5000/books/${id}`)
            .then((response) => setBook(response.data))
            .catch(() => alert("Erro ao carregar livro."));
    }, [id]);

    const handleEditBook = async (updatedBook) => {
        await axios.put(`http://localhost:5000/books/${id}`, updatedBook);
    };

    if (!book) return <p>Carregando...</p>;

    return <BookForm bookData={book} onSubmit={handleEditBook} />;
}

export default EditBookWrapper;
