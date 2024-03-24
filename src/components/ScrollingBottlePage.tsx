'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ScrollingBottlePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bottleRotation = (degrees) => {
    // This will rotate the bottle as the user scrolls
    let rotation = degrees - (scrollY / 10); // Start at 90 degrees minus 0.1 per pixel scrolled
    if (rotation > degrees) rotation = degrees; // Limit rotation to starting degrees
    if (rotation < -degrees) rotation = -degrees; // Limit rotation to -starting degrees
    return rotation;
  };

  // Define the height of the scrollable area based on the desired end point
  const scrollableHeight = 5000; // The height in pixels of the scrollable area

  const bottleStyle = {
    transform: `rotate(${bottleRotation(90)}deg)`, // Rotate the bottle
    transition: 'transform 0.2s linear',
    position: 'sticky', // Make the bottle stick to the screen center as you scroll
    top: '50vh', // Center vertically in the viewport
    left: '50%', // Center horizontally in the container
    transformOrigin: 'center center', // Set the origin of transform to bottle's center
    zIndex: 10, // Ensure the bottle is above other content
  };

  return (
    <div style={{ height: `${scrollableHeight}px`, background: 'white' }}>
      {/* A container for the bottle that sticks to the screen center as the user scrolls */}
      <div style={bottleStyle}>
        <Image
          src="/images/hero/transparentbottle.png" // The path to your bottle image
          alt="Animated Bottle"
          width={500} // Set the size of the bottle
          height={1000} // Maintain the aspect ratio
        />
      </div>
      {/* Add more content here if needed to extend the page height */}
    </div>
  );
};

export default ScrollingBottlePage;
