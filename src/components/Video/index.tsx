"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 overflow-hidden">
      {/* Image Container */}
      <div className="relative">
        <Image src="/images/hero/water.png" alt="video image" layout="responsive" width={1920} height={1080} objectFit="cover" />
        <div className="absolute bottom-0 left-0 p-8 text-left text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">BE PART OF A <br /> SOCIAL CAUSE</h2>
          <p className="text-lg md:text-xl lg:text-2xl">With every bottle sold, we donate a <br /> bottle to the people who truly need it</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <SectionTitle
          title="Do you know that 75.8 million people in India are forced to buy water at high prices or use contaminated supplies."
          paragraph=""
          center
          className="text-xs md:text-sm lg:text-base" // Adjusting the text size via className
        />
      </div>

                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  {/* <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button> */}
                </div>
              

    

      {/* <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div> */}
    </section>
  );
};

export default Video;
