import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Book from './components/Book';
import './App.css';


function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response1 = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=harry+potter'
        );
        const response2 = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes'
        );

        const booksData = [
          ...response1.data.items,
          ...response2.data.items,
        ];
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  // Function to handle book click
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  // Function to handle search
  const handleSearch = async (searchQuery) => {
    try {
      const searchResponse = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
      );
      setBooks(searchResponse.data.items);
      setSelectedBook(null); // Clear selected book on new search
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  // Other logic for handling book click, search, etc.

  return (
    <div className="App">
      <Navbar setQuery={handleSearch} />
      {selectedBook ? (
        <BookDetail book={selectedBook} />
      ) : (
        <BookList books={books} handleBookClick={handleBookClick} />
      )}
    </div>
  );
}

export default App;
