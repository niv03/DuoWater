"use client"
import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

const Features = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      const currentScrollPercentage = (scrollPosition / maxScroll) * 100;
      setScrollPercentage(currentScrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="bg-white dark:bg-gray-dark mt-2 mb-2"
      style={{ minHeight: '50vh', width: '100vw', overflowX: 'hidden', position: 'relative' }}
    >
      {/* Background image */}
      <img
        src="/images/hero/Component1.png"
        alt="Background Image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Top boundary element */}
      <Element name="top" />

      {/* Overlay image (bottle) */}
      <div
        style={{
          position: 'absolute',
          top: `${Math.min(scrollPercentage, 42)}%`, // Limit top position to 100% (bottom of section)
          left: '50%',
          transform: 'translate(-50%, 0)',
          maxWidth: '20%',
          maxHeight: '20%',
        }}
      >
        <img
          src="/images/hero/transparentbottle.png"
          alt="Overlay Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Bottom boundary element */}
      <Element name="bottom" style={{ position: 'absolute', bottom: 0,left: '50%',
          transform: 'translate(-50%, 0)',}} />
    </section>
  );
};

export default Features;
