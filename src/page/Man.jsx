
import hero1 from '../assets/images/image-product-1.jpg'
import hero1min from '../assets/images/image-product-1-thumbnail.jpg'
import hero2min from '../assets/images/image-product-2-thumbnail.jpg'
import hero3min from '../assets/images/image-product-3-thumbnail.jpg'
import hero4min from '../assets/images/image-product-4-thumbnail.jpg'

import React, { useState } from 'react';

function Gallery() {
  const [mainPhoto, setMainPhoto] = useState({hero1});

  const changeMainPhoto = (newPhoto) => {
    setMainPhoto(newPhoto);
  };

  return (
    <div>
      <div className="main-photo">
        <img src={mainPhoto} alt="Основное фото" />
      </div>
      <div className="thumbnails">
        <img
          src={hero1min}
          alt="Маленькое фото 1"
          onClick={() => changeMainPhoto({hero1min})}
        />
        <img
          src={hero2min}
          alt="Маленькое фото 2"
          onClick={() => changeMainPhoto({hero2min})}
        />
        <img
          src={hero3min}
          alt="Маленькое фото 3"
          onClick={() => changeMainPhoto({hero3min})}
        />
        <img
          src={hero4min}
          alt="Маленькое фото 4"
          onClick={() => changeMainPhoto({hero4min})}
        />
      </div>
    </div>
  );
}

export default Gallery;
