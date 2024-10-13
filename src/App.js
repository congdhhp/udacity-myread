import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";
import SearchPage from "./SearchPage";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  // Fetch books when the app loads
  useEffect(() => {
    BooksAPI.getAll().then((data) => setBooks(data));
  }, []);

  // Function to handle changing shelf
  const handleShelfChange = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      // Update the shelf in state
      const updatedBooks = books.map((b) =>
        b.id === book.id ? { ...b, shelf: newShelf } : b
      );
      setBooks(updatedBooks);
    });
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Bookshelf
                  title="Currently Reading"
                  books={books.filter((book) => book.shelf === "currentlyReading")}
                  onShelfChange={handleShelfChange}
                />
                <Bookshelf
                  title="Want to Read"
                  books={books.filter((book) => book.shelf === "wantToRead")}
                  onShelfChange={handleShelfChange}
                />
                <Bookshelf
                  title="Read"
                  books={books.filter((book) => book.shelf === "read")}
                  onShelfChange={handleShelfChange}
                />
              </div>
              <div className="open-search">
                <a href="/search">Add a book</a>
              </div>
            </div>
          }
        />
        <Route
          path="/search"
          element={<SearchPage books={books} onShelfChange={handleShelfChange} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
