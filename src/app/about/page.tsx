import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      {/* Header space placeholder */}
      <div style={{ height: '86px' }}></div>

      {/* Title and subtitle */}
      <section className="text-left px-20 mt-[90px] "> {/* marginTop ensures space after the header */}
        <h2 style={{
          fontFamily: "'Gotham Black', sans-serif",
          fontWeight: 500,
          fontSize: '48px',
          lineHeight: '53px',
          color: '#333333',
        }}>
          Want your Brand to <br />flow seamlessly?
        </h2>
        <h2 style={{
          fontFamily: "'Gotham Black', sans-serif",
          fontWeight: 500,
          fontSize: '64px',
          lineHeight: '71px',
          textDecoration: 'underline',
          color: '#FFBA08',
        }}>
          Let’s hydrate your <br />Marketing Strategy!
        </h2>
      </section>

      {/* First image */}
      <section className="flex justify-center mt-20">
        <div className="w-full">
          <div className="relative w-full h-[600px]">
            <Image src="/images/hero/Group11.png" alt="First Image" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span style={{
                fontFamily: "'Gotham', sans-serif",
                fontWeight: 700,
                fontSize: '56px',
                lineHeight: '100%', // or 56px
                color: '#FFBA08',
                textAlign: 'center',
              }}>
                Your<br />Ad<br />Here
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Second image */}
      <section className="flex justify-center mt">
        <div className="w-full">
          <div className="relative w-full h-[300px]">
            <Image src="/images/hero/Group12.png" alt="Second Image" layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>

      {/* Connect with Us form */}
      <section className="bg-white py-8 mt-4"> {/* mt-4 adds margin-top space between the image and this section */}
        <div className="container mx-auto">
          <h2 className="text-center font-bold text-3xl mb-6">Connect with Us</h2>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Name" className="p-4 border rounded" />
              <input type="email" placeholder="E-Mail" className="p-4 border rounded" />
              <textarea placeholder="Comments" className="p-4 border rounded"></textarea>
              <button type="submit" className="p-4 bg-yellow-400 rounded text-white">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
