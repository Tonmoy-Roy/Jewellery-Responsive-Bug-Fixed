import React from "react";
import Image from "next/image";
import unnamed1 from '../../../../public/images/unnamed1.png'

export default function Quote() {
  return (
    <section className="w-full relative">
      {/* Background Image */}
      <Image
        src={unnamed1}
        alt="Background"
        fill
        className="object-cover object-center -z-10"
        quality={90}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-24 md:py-40 text-center">
        <div className="flex flex-col gap-6 md:gap-8 w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold italic leading-tight text-black">
            Just like fine jewellery, this design is crafted to fit
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal italic leading-snug text-[#1e1e1e]">
            the user, the purpose, and the brand's story
          </h2>
        </div>
      </div>
    </section>
  );
}