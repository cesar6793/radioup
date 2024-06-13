import React from 'react';

const Radiografia = ({ imageUrl }) => {
  return (
    <div className="radiografia-container">
      <img src={imageUrl} alt="Radiografía" />
    </div>
  );
};

export default Radiografia;
