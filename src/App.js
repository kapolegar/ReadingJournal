import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NavBar from "./components/NavBar/NavBar";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";

function App() {
  const [books, setBooks] = useState([]);

  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<BookList books={books} setBooks={setBooks} />} />
        <Route path="/add" element={<BookForm books={books} setBooks={setBooks} />} />
      </Routes>
    </Router>
  );
}
export default App;