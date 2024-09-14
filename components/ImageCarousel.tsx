'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import Slick Carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import Slick Carousel theme styles

// Sample images for the carousel
const images = [
  '/kkp/home2.jfif',
  '/kkp/home2.jfif',
  '/kkp/home2.jfif',
  '/kkp/home2.jfif',

  
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds per slide
  };

  return (
    <div className="relative w-full h-[50vh]"> {/* Set height to 50% of viewport height */}
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover" // Ensure image covers the container without distortion
            />
            {/*{index === 0 && (
               <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <h1 className="text-xs md:text-sm lg:text-base font-extrabold text-white p-4 rounded">
                  Welcome to KKP, the World of TRUST
                </h1>
            </div>
            )}*/}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
