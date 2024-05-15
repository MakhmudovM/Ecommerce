import React, { useState } from 'react';

import hero1 from '../assets/images/image-product-1.jpg'
import hero1min from '../assets/images/image-product-1-thumbnail.jpg'
import hero2min from '../assets/images/image-product-2-thumbnail.jpg'
import hero3min from '../assets/images/image-product-3-thumbnail.jpg'
import hero4min from '../assets/images/image-product-4-thumbnail.jpg'

function Gallery() {
  const [mainPhoto, setMainPhoto] = useState({hero1});
  const thumbnails = [
    hero1min,
    hero2min,
   hero3min,
   hero4min,
  ];

  const changeMainPhoto = (newPhoto) => {
    setMainPhoto(newPhoto);
  };

  return (
    <div>
      <div className="main-photo">
        <img src={mainPhoto} alt="Основное фото" />
      </div>
      <div className="thumbnails">
        {thumbnails.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Маленькое фото ${index + 1}`}
            onClick={() => changeMainPhoto(photo)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
