import axios from "axios";
import { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Sidebar from "./components/Sidebar/Sidebar";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import EditBookWrapper from "./components/BookForm/EditBookWrapper";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  const handleCreateBook = async (newBook, navigate) => {    
    try {
      const response = await axios.post("http://localhost:5000/books", newBook);
      setBooks((prevBooks) => [...prevBooks, response.data]);
      navigate("/books");
    } catch (error) {
      console.error("Erro ao adicionar leitura:", error);
    }
  };

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<BookList books={books} setBooks={setBooks} />} />
        <Route path="/add" element={<BookForm onSubmit={handleCreateBook} />} />
        <Route path="/edit/:id" element={<EditBookWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
