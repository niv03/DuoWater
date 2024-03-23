import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      {/* Header space placeholder */}
      <div style={{ height: '150px' }}></div>

      {/* Title and subtitle */}
      <section className="text-left px-10 mt-[90px] "> {/* marginTop ensures space after the header */}
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
      <section className="flex justify-center mt-[150px]">
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
      <div className="bg-white py-8 mt-[100px] flex justify-center mb-[100px]" >
      <div className="w-full max-w-2xl p-8 shadow-md rounded-lg" style={{ backgroundColor: '#F9F9F9' }}>
        {/* Heading with underline */}
        <h2 className="text-center font-bold text-3xl mb-6 inline-block">
          <span className="border-b-4" style={{ borderColor: '#FFBA08' }}>
            Connect with Us
          </span>
        </h2>
        
        {/* Form */}
        <form className="flex flex-col mt-4">
          <div className="flex flex-wrap -mx-2">
            {/* Name */}
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="name" className="font-bold text-sm mb-2 block">Name</label>
              <input type="text" placeholder="Your Name here" className="w-full rounded-lg border px-4 py-2" style={{ backgroundColor: '#F3F3F3' }} />
            </div>
            {/* E-Mail */}
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="email" className="font-bold text-sm mb-2 block">E-Mail</label>
              <input type="email" placeholder="youremail@mail.com" className="w-full rounded-lg border px-4 py-2" style={{ backgroundColor: '#F3F3F3' }} />
            </div>
          </div>
          
          <div className="flex flex-wrap -mx-2">
            {/* Phone Number */}
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="phone" className="font-bold text-sm mb-2 block">Phone Number</label>
              <div className="flex">
                <select className="rounded-lg border mr-2 px-4 py-2" style={{ backgroundColor: '#F3F3F3' }}>
                  <option value="+91">+91</option>
                  {/* ... other options ... */}
                </select>
                <input type="tel" placeholder="Phone Number" className="w-full rounded-lg border px-4 py-2" style={{ backgroundColor: '#F3F3F3' }} />
              </div>
            </div>
            {/* Name of Organization */}
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="organization" className="font-bold text-sm mb-2 block">Name of Organization</label>
              <input type="text" placeholder="Name of Organization" className="w-full rounded-lg border px-4 py-2" style={{ backgroundColor: '#F3F3F3' }} />
            </div>
          </div>
          
          {/* Comments */}
          <div className="px-2 mb-4">
            <label htmlFor="comments" className="font-bold text-sm mb-2 block">Comments</label>
            <textarea placeholder="Leave a Note" className="w-full rounded-lg border px-4 py-2" rows={4} style={{ backgroundColor: '#F3F3F3' }}></textarea>
          </div>
          
          {/* Submit Button */}
          <div className="px-2">
            <button type="submit" className="w-full md:w-1/2 rounded-lg px-4 py-2 text-white font-semibold" style={{ backgroundColor: '#FFBA08' }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
