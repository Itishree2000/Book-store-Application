import React, { useState } from 'react';
import axios from 'axios';

function Navbar({ setBooks }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="navbar">
      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Navbar;
