import React from 'react';

const Features = () => {
  return (
    <section
      id="home"
      className="bg-white dark:bg-gray-dark mt-10 mb-10"
      style={{ minHeight: '50vh', width: '100vw', overflowX: 'hidden', position: 'relative' }}
    >
      {/* Background image */}
      <img
        src="/images/hero/Component1.png"
        alt="Background Image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Overlay image centered at the top (smaller size) */}
      <img
        src="/images/hero/transparentbottle.png"
        alt="Overlay Image"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translate(-50%, 0)',
          maxWidth: '60%',  // Adjust the width percentage as needed
          maxHeight: '60%',  // Adjust the height percentage as needed
        }}

        
        
      />

<img
        src="/images/hero/transparentbottle.png"
        alt="Overlay Image"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translate(-50%, 0)',
          maxWidth: '60%',  // Adjust the width percentage as needed
          maxHeight: '60%',  // Adjust the height percentage as needed
        }}

        
        
      />
    </section>
  );
};

export default Features;