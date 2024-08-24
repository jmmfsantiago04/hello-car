import React, { useState, useEffect, useRef } from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';

const InfiniteCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const banners = [<Banner key="1" />, <Banner2 key="2" />];
  const length = banners.length;

  const extendedBanners = [banners[length - 1], ...banners, banners[0]];
  const transitionDuration = 2000;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (containerRef.current) {
        if (activeIndex === 0) {
          setActiveIndex(length);
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = `translateX(-${length * 100}%)`;
        } else if (activeIndex === length + 1) {
          setActiveIndex(1);
          containerRef.current.style.transition = 'none';
          containerRef.current.style.transform = `translateX(-100%)`;
        }
      }
    };

    if (containerRef.current) {
      containerRef.current.style.transition = `transform ${transitionDuration}ms ease`;
      containerRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
      containerRef.current.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, [activeIndex, length]);

  return (
    <div className="relative w-full max-w-[87.5rem] mx-auto h-[50vw] max-h-[40rem] overflow-hidden">
      <div ref={containerRef} className="flex">
        {extendedBanners.map((banner, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {banner}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
