'use client'
import React,{ useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [submissionMessage, setSubmissionMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionMessage("Sending...");
  
    const formData = new FormData(e.target); // Automatically captures all form fields with 'name' attribute
    formData.append("access_key", "18b77347-f4f3-45ec-95bc-76716027b83e"); // Replace with your actual access key

    // Now, use `formData` directly in your fetch request
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
   
      body: formData,
    });
  
    const result = await response.json();
  
    if (result.success) {
      setSubmissionMessage("Thank you for contacting us!");
      e.target.reset(); // Clear the form fields
    } else {
      setSubmissionMessage("There was an error sending your message.");
    }
  }
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28 bg-white" style={{ marginTop: '110px' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-bold lg:text-3xl xl:text-5xl" style={{ color: '#FFBA08' }}>
          Reach Out to US
        </h2>

        <div className="flex flex-wrap items-start justify-center lg:justify-between mt-12">
          {/* Image container */}
          <div className="w-full lg:w-1/2 lg:pr-20 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="w-full lg:max-w-md">
              {/* Include your image path in the src */}
              <Image
                src="/images/hero/Group1.jpg"
                alt="Contact Image"
                width={500}
                height={204}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Form container */}
          <div className="w-full lg:w-1/2 lg:pl-20 flex justify-center lg:justify-start">
            <div className="w-full lg:max-w-md">
              <form className="flex flex-col items-stretch" onSubmit={handleSubmit}>
                {/* Name field */}
                <label htmlFor="name" className="mb-2 font-bold text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name here"
                  className="w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color mb-6 outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary dark:focus:shadow-none"
                />

                {/* E-Mail field */}
                <label htmlFor="email" className="mb-2 font-bold text-black">
                  E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@mail.com"
                  className="w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color mb-6 outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary dark:focus:shadow-none"
                />

                {/* Comments field */}
                <label htmlFor="message" className="mb-2 font-bold text-black">
                  Comments
                </label>
                <textarea
                  rows={3}
                  name="comments"
                  placeholder="Leave a Note"
                  className="w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color mb-8 outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary dark:focus:shadow-none"
                ></textarea>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 text-center"
                  style={{ backgroundColor: '#FFBA08', justifyContent: 'center' }}
                >
                  Submit
                </button>
              </form>
              {submissionMessage && <div className="text-center my-4">{submissionMessage}</div>}
            </div>
          </div>
        </div>

      </div>
   
    </section>
  );
};

export default Contact;


