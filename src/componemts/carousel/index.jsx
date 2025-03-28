'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import './carousel.css';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg'
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-images">
          <img    
          src={images[currentIndex]}
          alt="carousel"
          width={1200} // Width for desktop view
          height={600} // Height for desktop view
          layout="intrinsic" // Ensures proper aspect ratio
          quality={100} // Maximize image quality (optional)
           />
        </div>
      </div>

      <button className="carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}
