import React from "react";
import Image from "next/image";
import download1 from '../../../../public/images/download1.png';
import recatangle1 from '../../../../public/images/Rectangle1.png'
import { FiUser, FiHeart } from "react-icons/fi";

export default function TargetAudience() {
  return (
    <section className="w-full min-h-screen relative flex flex-col items-start justify-start px-4 sm:px-6 lg:px-16 py-12 lg:py-24">
      <Image
        src={recatangle1}
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10"
        quality={90}
      />

      <div className="absolute bottom-0 right-0 w-[60%] sm:w-[50%] lg:w-[45%] xl:w-[40%] h-auto aspect-square  -z-5">
        <Image
          src={download1}
          alt="SJ Watermark"
          fill
          className="object-contain object-bottom-right"
          quality={90}
        />
      </div>
      {/* Heading */}
      <div className="w-full xl:max-w-[1440px] mx-auto md:flex mb-12 lg:mb-12 px-4 md:px-44">
        <h2 className="text-[42px] sm:text-[50px] md:text-[65px] lg:text-[75px] xl:text-[90px] font-bold italic leading-tight tracking-wide text-[#1e1e1eb2] font-['Arimo_Hebrew_Subset_Italic'] mb-6 xl:mb-0 slide-in-left">
          Target <br />
          Audience
        </h2>

        <div className="xl:flex xl:flex-col justify-center xl:mt-10 xl:ml-12 md:mt-0 md:ml-0">
          <p className="text-[18px] sm:text-[20px] lg:text-[23px] leading-relaxed text-[#1e1e1eaf] font-['Inter'] ">
            Since Shrinath Jewels caters to both everyday jewellery buyers and
            wedding / premium buyers, here's how you can present your user
            personas, including shopping behaviour, pain points, and goals for
            each.
          </p>
        </div>
      </div>

      {/* Personas & Goals */}
      <div className="w-full flex flex-col lg:flex-row gap-10 lg:px-6 xl:px-44 text-black">
        {/* Left Column: Personas */}
        <div className="flex flex-col gap-8 lg:w-[55%]">
          {/* Persona Row */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Persona 1 */}
            <div className="relative group rounded-2xl  overflow-hidden  hover:shadow-2xl transition-all duration-500 md:w-[20vw]">

              <div className="absolute inset-0 bg-linear-to-br from-violet-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

              <FiUser className="absolute -top-8 -right-8 text-9xl text-slate-100 group-hover:text-violet-300 group-hover:rotate-12 transition-all duration-500 z-10 opacity-70" />

              <div className="relative z-20 p-6 slide-up">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors duration-300 font-['Roboto']">
                  Purva, 28
                </h3>
                <p className="text-sm font-light text-slate-600 group-hover:text-violet-100 transition-colors duration-300 mt-1 font-['Roboto']">
                  Physiotherapist
                </p>

                <h4 className="text-base font-medium mt-6 mb-3 text-slate-800 group-hover:text-white transition-colors duration-300">
                  Shopping Behavior
                </h4>
                <ol className="text-sm space-y-2 list-decimal ml-5 text-slate-700 group-hover:text-violet-50 transition-colors duration-300">
                  <li>Prefers elegant, minimal jewellery suitable for daily wear or office use.</li>
                  <li>Looks for affordable luxury — values both design and practicality.</li>
                  <li>Often browses Instagram or brand websites before visiting the store.</li>
                  <li>Likes clear product visuals, simple navigation, and quick checkout.</li>
                </ol>

                <h4 className="text-base font-medium mt-6 mb-3 text-slate-800 group-hover:text-white transition-colors duration-300">
                  Pain Points
                </h4>
                <ol className="text-sm space-y-2 list-decimal ml-5 text-slate-700 group-hover:text-violet-50 transition-colors duration-300">
                  <li>Feels overwhelmed by overly grand jewellery collections online.</li>
                  <li>Finds it hard to identify authentic materials and purity online.</li>
                  <li>Limited trust in smaller jewellery websites without strong brand cues.</li>
                </ol>
              </div>
            </div>

            {/* Persona 2 */}
            <div className="flex-1 slide-down ">
              <div className="relative group rounded-2xl md:w-[17vw] overflow-hidden hover:shadow-2xl transition-all duration-500">

                {/* Gradient that slides up on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-violet-600 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                {/* Big floating heart icon in background */}
                <FiHeart className="absolute -top-10 -right-10 text-9xl text-slate-100 group-hover:text-pink-300 group-hover:rotate-12 transition-all duration-500 z-10 opacity-70" />

                {/* All your original content */}
                <div className="relative z-20 p-6">
                  <h3 className=" text-2xl font-bold leading-[24px] text-black group-hover:text-white transition-colors duration-300 font-['Roboto']">
                    Anvita, 23
                  </h3>
                  <p className="text-sm leading-[15px] text-black group-hover:text-pink-100 transition-colors duration-300 font-['Roboto']">
                    Marketing Intern
                  </p>

                  <h4 className="font-normal mt-4 mb-2 text-black group-hover:text-white transition-colors duration-300">
                    Shopping Behavior
                  </h4>
                  <ol className="text-sm font-normal space-y-1 list-decimal ml-5 text-slate-700 group-hover:text-pink-50 transition-colors duration-300">
                    <li>Visits stores with family and takes time to make big purchase decisions.</li>
                    <li>Seeks unique bridal and statement pieces with emotional and cultural value.</li>
                    <li>Compares multiple jewellers for purity, price, and customisation options.</li>
                    <li>Likes a personalized, luxury experience both online and offline.</li>
                  </ol>

                  <h4 className=" font-normal mt-4 mb-2 text-black group-hover:text-white transition-colors duration-300">
                    Pain Points
                  </h4>
                  <ol className="text-sm font-normal space-y-1 list-decimal ml-5 text-slate-700 group-hover:text-pink-50 transition-colors duration-300">
                    <li>Feels most websites don't showcase heavy jewellery clearly or realistically.</li>
                    <li>Difficult to visualise how pieces will look when worn.</li>
                    <li>Too much focus on price, not enough on craftsmanship or story.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Goals */}
        <div className="lg:w-[50%] flex flex-col items-start gap-6 slide-up">
          <h3 className="text-[20px] font-normal leading-[24px] text-black font-['Roboto']">
            Goal
          </h3>
          <p className="text-[12px] sm:text-[14px] leading-[18px] text-black font-['Roboto']">
            The collective goal of Shrinath Jewels' users is to find jewellery
            that{" "}
            <span className="font-bold italic font-['Arimo_Hebrew_Subset']">
              balances authenticity, aesthetics, and emotional value
            </span>
            . Whether purchasing for everyday wear or special occasions, users
            seek a{" "}
            <span className="font-bold italic font-['Arimo_Hebrew_Subset']">
              trustworthy brand experience that feels both premium and
              personal
            </span>
            . They want jewellery that reflects their{" "}
            <span className="font-bold italic font-['Arimo_Hebrew_Subset']">
              individuality, offers transparent quality assurance, and
              provides a seamless shopping journey
            </span>
            .
          </p>
          <Image
            src="/images/Rectangle2.png"
            alt="Goals illustration"
            width={488}
            height={278}
            className="w-full max-w-[488px] object-contain rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
}