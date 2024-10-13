import React, { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

function SearchPage({ books, onShelfChange }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Handle search
  const handleSearch = (query) => {
    setQuery(query);
    if (query) {
      BooksAPI.search(query, 20).then((results) => {
        if (results.error) {
          setSearchResults([]);
        } else {
          // Sync search results with current books on shelves
          const updatedResults = results.map((result) => {
            const foundBook = books.find((b) => b.id === result.id);
            return foundBook ? foundBook : { ...result, shelf: "none" };
          });
          setSearchResults(updatedResults);
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href="/">
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map((book) => (
            <li key={book.id}>
              <Book book={book} onShelfChange={onShelfChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;
