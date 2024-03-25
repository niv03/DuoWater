import React from 'react';

const Features = () => {
  return (
    <section
      id="home"
      className="bg-white dark:bg-gray-dark mt-10 mb-10"
      style={{ minHeight: '10vh', width: '100vw', overflowX: 'hidden' }}
    >
      <div className="w-full h-full overflow-auto flex justify-center items-start md:items-center"> 
        <img
          src="/images/hero/Component1.png"
          alt="Image"
          className="min-h-full min-w-full md:h-auto md:max-w-none object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Features;
