import React from "react";

export default function About() {
  return (
    <section className="md:h-[65vh] bg-[#1E1E1E] flex items-center justify-center p-5">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center gap-8 mx-auto md:w-[62.5vw] w-90">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic leading-tight text-white font-[Arimo Hebrew Subset Italic]">
          About
        </h1>
        <div className="w-full lg:w-[70%] text-center md:text-left">
          <p className="text-[18px] leading-relaxed text-white font-inter">
            I designed the website for Shrinath Jewels,{" "}
            <span className="font-bold">
              a fine jewellery brand specializing in diamond and gold pieces
            </span>
            . The goal was to{" "}
            <span className="font-bold">
              create a premium and elegant digital presence that reflects
              the brand's timeless identity and craftsmanship.
            </span>{" "}
            The design highlights the brand's legacy, attention to detail,
            and luxurious aesthetic while ensuring a smooth and visually
            engaging browsing experience for customers.
          </p>
        </div>
      </div>
    </section>
  );
}