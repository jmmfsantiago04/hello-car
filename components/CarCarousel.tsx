import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';

const CarCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const transitionDuration = 700;
  const waitDuration = 3000; 
  const cards = Array(8).fill(null); 
  const cardCount = cards.length;

  const calculateCardWidth = () => {
    if (window.innerWidth >= 1280) {
      return 'calc(12.5% - 3.84375rem)';
    } else if (window.innerWidth >= 1024) {
      return 'calc(16.6667% - 3.84375rem)'; 
    } else if (window.innerWidth >= 768) {
      return 'calc(25% - 3.84375rem)';
    } else {
      return 'calc(50% - 3.84375rem)'; 
    }
  };

  const calculateGap = () => {
    if (window.innerWidth >= 768) {
      return '3.84375rem';
    } else {
      return '1.5rem';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardCount);
    }, waitDuration + transitionDuration);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="container mx-auto px-[0.25rem]">
      <h1 className="text-center mt-[5rem] mx-auto font-bold leading-tight"
          style={{
            width: '90%',
            maxWidth: '46.9375rem',
            height: 'auto',
            fontSize: window.innerWidth >= 1280 ? '3.125rem' : window.innerWidth >= 768 ? '2.5rem' : '1.875rem', // Adjust font size
          }}
      >
        HELLO썸카만의 <span className="text-blue-600">베스트 차량</span>
      </h1>
      <div className="mt-[9.75rem] relative overflow-hidden">
        <div
          className="flex transition-transform duration-[700ms] ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardCount)}%)`,
            gap: calculateGap(),
          }}
        >
          {cards.map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0 mb-[9.375rem]"
              style={{
                minWidth: calculateCardWidth(),
              }}
            >
              <CarCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCarousel;
