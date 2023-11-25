import React from 'react';
import Book from './Book';

function BookList({ books, handleBookClick }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.id} book={book} handleBookClick={handleBookClick} />
      ))}
    </div>
  );
}

export default BookList;
