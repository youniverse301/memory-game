import React from 'react';

const ImageCard = ({ imageUrl, title }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default ImageCard;
