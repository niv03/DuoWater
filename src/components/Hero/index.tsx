import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[110px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[250px] 2xl:pt-[350px] "
        style={{
          backgroundImage: 'url("/images/hero/untitled2cc1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '115px',
        
        }}
      >
        
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight text-left" style={{ maxWidth: 'max-content' ,fontFamily: "'Gotham Black', sans-serif", fontWeight: 500}}>
  <span className="text-white font-bold">EVERY HAND<br />HAS </span>
  <span className="text-black font-bold">YOUR<br />BRAND</span>
</h1>


                {/* <p className="mb-5 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                </p> */}
                <div className="flex justify-start items-center space-x-0 space-y-4 sm:space-y-0 sm:space-x-4  ">
                 
                  <Link
                    href="/about"
                    className="inline-block text-left rounded-lg px-8 py-4 font-semibold text-white "
                    style={{ backgroundColor: '#FFBA08' }}
                  >

                    Advertise with US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default Hero;
