import React from 'react';

function BookDetail({ book }) {
  const { volumeInfo } = book;

  const handleReadNow = () => {
    window.open(volumeInfo.previewLink, '_blank');
  };

  return (
    <div className="book-detail">
      <div className="book-cover">
        {/* Book Cover Image */}
        <img src={volumeInfo.imageLinks.thumbnail} alt="Book Cover" />
      </div>
      <div className="book-info">
        {/* Book Details */}
        <h2>{volumeInfo.title}</h2>
        <p>Author: {volumeInfo.authors && volumeInfo.authors.join(', ')}</p>
        <p>Publisher: {volumeInfo.publisher}</p>
        <p>Language: {volumeInfo.language}</p>
        {/* Additional Book Information */}
        <p>Average Rating: {volumeInfo.averageRating || '4.5'}</p>
        <p>Rating Count: {volumeInfo.ratingsCount || '92'}</p>
        {/* Buttons */}
        <button onClick={handleReadNow}>Read Now</button>
      </div>
    </div>
  );
}

export default BookDetail;
