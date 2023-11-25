import React, { useState } from 'react';

function Book({ book, handleBookClick }) {
  const { volumeInfo } = book;
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    handleBookClick(book);
    setExpanded(!expanded);
  };

  const handleReadNow = (e) => {
    e.stopPropagation();
    window.open(volumeInfo.previewLink, '_blank');
  };

  const handleMoreInfo = (e) => {
    e.stopPropagation();
    window.open(volumeInfo.infoLink, '_blank');
  };

  return (
    <div className={`book ${expanded ? 'expanded' : ''}`} onClick={handleClick}>
      <h2>{volumeInfo.title}</h2>
      <p>{volumeInfo.authors && volumeInfo.authors.join(', ')}</p>
      {/* Display more book details */}
      {expanded && (
        <div className="details">
          {/* Display detailed book information */}
          <button onClick={handleReadNow}>Read Now</button>
          <button onClick={handleMoreInfo}>More Info</button>
        </div>
      )}
    </div>
  );
}

export default Book;
