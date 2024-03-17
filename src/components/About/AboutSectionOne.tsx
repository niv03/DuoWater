// AboutSectionOne.js
import React from 'react';

const AboutSectionOne = () => {
  return (
    <section id="about" className="relative pt-[86px] pb-[50px] md:pt-[86px] lg:pt-[86px]"> {/* Added bottom padding */} {/* Padding top equivalent to header's height */}
      <div className="container mx-auto relative">
        {/* Title "Want your Brand to flow seamlessly?" */}
        <h2 style={{
          position: 'absolute',
          width: '545px',
          height: '106px',
          left: '122px',
          top: '274px',
          fontFamily: "'Gotham Black', sans-serif",
          fontWeight: 500,
          fontSize: '48px',
          lineHeight: '53px',
          color: '#333333',
        }}>
          Want your Brand to flow seamlessly?
        </h2>

        {/* Subtitle "Let’s hydrate your Marketing Strategy!" */}
        <h2 style={{
          position: 'absolute',
          width: '656px',
          height: '142px',
          left: '122px',
          top: '405px',
          fontFamily: "'Gotham Black', sans-serif",
          fontWeight: 500,
          fontSize: '64px',
          lineHeight: '71px',
          textDecoration: 'underline',
          color: '#FFBA08',
        }}>
          Let’s hydrate your Marketing Strategy!
        </h2>

        {/* Additional content can go here */}
      </div>
    </section>
  );
};

export default AboutSectionOne;
