import { useState } from "react";

function BookList({ books, setBooks }) {
    const handleDelete = (index) => {
        setBooks(books.filter((_, i) => i !== index));
    };
    return (
        <div className="container">
            <br></br>
            <h2>Lista de Livros</h2>
            <br></br>
            <div className="book-container">
                <div className="book-list">
                    {books.map((book, index) => (
                        <div className="book-item" key={index}>
                            <span className="book-title">{`${book.title} - ${book.author} - ${book.genre} - ${book.date}`}</span>
                            <button className="delete-button" onClick={() => handleDelete(index)}>Excluir</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
export default BookList;