"use client";
import React from "react";
import Image from "next/image";
import Ellipse1 from "@/public/images/Ellipse1.png";
import Ellipse2 from "@/public/images/Ellipse2.png";
import Ellipse3 from "@/public/images/Ellipse3.png";
import Ellipse4 from "@/public/images/Ellipse4.png";
import Ellipse5 from "@/public/images/Ellipse5.png";
import Rectangle21 from "@/public/images/Rectangle21.png";
import Rectangle22 from "@/public/images/Rectangle22.png";
import Rectangle23 from "@/public/images/Rectangle23.png";
import Rectangle25 from "@/public/images/Rectangle25.png";
import Rectangle26 from "@/public/images/Rectangle26.png";
import Rectangle27 from "@/public/images/Rectangle27.png";
import Rectangle29 from "@/public/images/Rectangle29.png";
import Rectangle30 from "@/public/images/Rectangle30.png";
import Rectangle31 from "@/public/images/Rectangle31.png";
import { motion } from "framer-motion";

export default function WebsiteShowcase() {
  const image = [Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5];
  const product = [
    { src: Rectangle21, name: "Rings" },
    { src: Rectangle22, name: "Necklaces" },
    { src: Rectangle23, name: "Earrings" },
  ];
  const works = [Rectangle25, Rectangle26, Rectangle27];
  const collection = [Rectangle29, Rectangle30, Rectangle31];
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren", 
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const legacySectionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren", 
        staggerChildren: 0.2, 
      },
    },
  };

  const legacyItemSlideInVariants = {
    hidden: { opacity: 0, x: -50 }, 
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    }, 
  };

  const legacyTextFadeInVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    }, 
  };
  return (
    <section className="bg-[url(/images/Rectangle14.png)] w-full h-full bg-cover bg-center bg-no-repeat relative flex flex-col items-center justify-start">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[184px] flex flex-col items-center">
        <div className="relative bg-[url(/images/Rectangle15.png)] w-full min-h-[500px] md:h-[700px] bg-contain bg-center bg-no-repeat flex items-center justify-center text-black p-4">
          <p className="absolute top-5 left-42 text-[16px] font-normal leading-relaxed text-white font-[Cactus Classical Serif]">
            ShrinathJewels
          </p>

          <motion.div
            className="bg-white/15 backdrop-blur-none w-full max-w-[740px] min-h-[350px] md:h-[449px] rounded-3xl border mb-20 flex flex-col items-center pt-4 sm:pt-6 px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.nav
              className="bg-white/30 backdrop-blur-none w-[650px] h-[50px] rounded-4xl border-1 border-white flex items-center justify-evenly"
              variants={itemVariants}
            >
              <motion.button
                className="text-[16px] font-medium leading-[19px] text-left text-white font-['Roboto']"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Home
              </motion.button>
              <motion.button
                className="text-[16px] font-medium leading-[19px] text-left text-white font-['Roboto']"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                About Us
              </motion.button>
              <motion.button
                className="text-[16px] font-medium leading-[19px] text-left text-white font-['Roboto']"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Collection
              </motion.button>
              <motion.button
                className="text-[16px] font-medium leading-[19px] text-left text-white font-['Roboto']"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Customization
              </motion.button>
              <motion.button
                className="text-[16px] font-medium leading-[19px] text-left text-white font-['Roboto']"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Materials
              </motion.button>
              <motion.button
                className="text-[16px] font-medium leading-[19px] text-left text-white font-['Roboto']"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.nav>

            <motion.div className="w-[650px] mt-6" variants={itemVariants}>
              <div className="w-[300px] h-[200px] flex flex-col justify-start pt-4">
                <motion.h1
                  className="text-[48px] text-left text-white italic font-['Gentium_Book_Basic']"
                  // You can also add variants to individual children
                  variants={itemVariants}
                >
                  Our Luxury Collection
                </motion.h1>
                <motion.div
                  className="flex items-center gap-4"
                  variants={itemVariants}
                >
                  <motion.button
                    className="bg-white rounded-xl text-[10px] font-normal text-black font-['Roboto'] p-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore more
                  </motion.button>
                  <motion.button
                    className="bg-white rounded-xl text-[10px] font-normal text-black font-['Roboto'] p-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book an appointment
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="w-[650px] h-[120px] flex flex-row"
              variants={itemVariants}
            >
              <div className="w-[400px] h-[60px] flex justify-start">
                <p className="text-[13px] font-semibold leading-relaxed text-left text-[#EFE7E7] font-['inter']">
                  Discover exquisite diamond and gold jewelry designed to
                  celebrate every moment from everyday elegance to life's
                  grandest occasions.
                </p>
              </div>
              <div className="w-[250px] h-[60px] flex justify-start ml-4">
                <div className="w-[130px] h-[40px] bg-white/30 backdrop-blur-none rounded-4xl border-1 border-white flex justify-center items-center">
                  {image.map((imgSrc, index) => (
                    <div
                      key={index}
                      className={`w-[24px] h-[24px] rounded-full overflow-hidden ml-[-6px] ${
                        index === 0 ? "ml-0" : ""
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`Ellipse ${index + 1}`}
                        width={24}
                        height={24}
                      />
                    </div>
                  ))}
                  <div className="bg-white w-[24px] h-[24px] rounded-full overflow-hidden ml-[-6px] text-center">
                    +
                  </div>
                </div>
                <div className="text-left text-white italic font-['Gentium_Book_Basic'] flex flex-col gap-y-1 mt-1 ml-1">
                  <p className="text-[30px] font leading-none">300+</p>
                  <p className="text-[10px] text-left text-white font-normal font-['Roboto'] leading-none">
                    Happy Client
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-[580px] flex flex-row-reverse items-center"
              variants={itemVariants}
            >
              <div className="bg-white rounded-xl w-[250px] h-[65px] flex justify-start relative -translate-y-8">
                <div className="flex relative -translate-y-[-4px]">
                  <Image
                    src="/images/Rectangle20.png"
                    alt="Decoration"
                    className="rounded-xl"
                    width={120}
                    height={40}
                  />
                </div>
                <div className="flex flex-col p-1">
                  <p className="text-[10px] text-black font-normal font-['Roboto']">
                    Beautiful In Every <br /> Detail
                  </p>
                  <p className="flex items-center gap-1 text-[7px] text-[#444343] font-normal italic font-['Amiro Hebrew Subset']">
                    Read More
                    <button className="flex items-center justify-center w-4 h-4 border border-gray-400 text-black rounded-full bg-white hover:bg-gray-100 transition">
                      <span className="text-[8px]">→</span>
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        {/* this next section */}
        <div className="relative bg-[url(/images/unnamed10.png)] w-[1080px] h-[1450px] bg-contain bg-center bg-repeat flex flex-col items-center justify-start">
          <motion.div
            className="mt-[-90px] w-[740px] h-[273px] mb-20 flex flex-row items-center justify-center pt-6"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {product.map((item, index) => (
              <motion.div
                key={index}
                className="p-2 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }} 
              >
                <div className="relative inline-block">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={240}
                    height={225}
                  />
                  <p className="absolute bottom-2 left-2 font-bold text-black text-[16px] italic font-['Amiro Hebrew_Subset'] px-2 py-1">
                    {item.name}
                  </p>
                </div>

                <motion.button
                  className="mt-3 bg-white border rounded-lg text-[14px] font-semibold text-black font-['Roboto'] p-2 px-7"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Check More Products
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
          {/* this next section */}
          <motion.div
            className="w-[900px] h-[420px] flex flex-row items-center"
            variants={legacySectionContainerVariants}
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }} 
          >
            <motion.div
              className="w-[300px] h-[397px]"
              variants={legacyItemSlideInVariants} 
            >
              <Image
                src="/images/Rectangle24.png"
                alt="Showcase"
                width={300}
                height={400}
              />
            </motion.div>
            <motion.div
              className="w-[600px] h-[400px] flex flex-col"
              variants={legacyItemSlideInVariants} 
            >
              <motion.div
                className="text-left font-['Gentium_Book_Basic'] flex flex-col gap-y-1 mt-1 ml-8"
                variants={legacyTextFadeInVariants} // Inner text fades in
              >
                <h1 className="italic text-[35px] text-[#2E6D39] pb-6">
                  A Legacy Of Shine
                </h1>
                <p className="text-[16px] font-semibold pb-1">
                  Founded by Bina Toshniwal, Shrinath Jewels began as a small
                  passion project and grew into a trusted name in fine
                  jewellery.
                </p>
                <p className="text-[16px] font-semibold">
                  Each piece reflects artistry, purity, and an unwavering
                  commitment to quality crafted to adorn generations.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-row justify-between gap-3 mt-4 ml-6"
                variants={legacyTextFadeInVariants} 
              >
                {works.map((workSrc, index) => (
                  <motion.div key={index} variants={legacyTextFadeInVariants}>
                    {" "}
                    <Image
                      src={workSrc}
                      alt={`Work ${index + 1}`}
                      width={199}
                      height={250}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          {/* this next section */}
          <div className="w-[850px] h-[700px] flex flex-col justify-around items-center pt-8">
            <div className="bg-[url(/images/Rectangle28.png)] w-[850px] h-[300px] rounded-4xl flex flex-row justify-start">
              <div className="w-[300px]">
                <h1 className="text-[35px] italic text-[#2E6D39] font-['Gentium_Book_Basic'] ml-6 mt-4">
                  Our collection
                </h1>
                <p className="text-[12px] font-normal font-['comme'] text-black ml-6 mt-2">
                  At Shrinath Jewels, every collection is a celebration of
                  timeless beauty and fine craftsmanship. From radiant diamonds
                  to pure gold creations, each piece is thoughtfully designed to
                  blend tradition with contemporary elegance.
                </p>
                <p className="text-[12px] font-normal font-['comme'] text-black ml-6 mt-2">
                  Whether it's a statement for your special day or a touch of
                  sparkle for everyday wear, our jewellery reflects the
                  artistry, purity, and passion that define Shrinath Jewels.
                </p>
              </div>
              <div className="w-[500px] flex flex-col items-center justify-center ml-6">
                <div className="w-[450px] h-[40px] flex flex-row justify-end mt-6">
                  {/* Scroll button */}
                  <button
                    onClick={() => {
                      const container =
                        document.getElementById("collection-scroll");
                      container.scrollBy({ left: -180, behavior: "smooth" });
                    }}
                    className="absolute bg-[#1A4521] hover:bg-[#416E49] text-white text-[24px] rounded-full w-10 h-10 flex items-center justify-center shadow-md mr-12"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => {
                      const container =
                        document.getElementById("collection-scroll");
                      container.scrollBy({ left: 180, behavior: "smooth" });
                    }}
                    className="absolute bg-[#1A4521] hover:bg-[#416E49] text-white text-[24px] rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                  >
                    →
                  </button>
                </div>
                <div className="relative w-[450px] h-full overflow-hidden ml-6 mt-8">
                  {/* Scrollable row */}
                  <div
                    id="collection-scroll"
                    className="flex flex-row overflow-x-scroll scroll-smooth no-scrollbar"
                  >
                    {collection.map((item, index) => (
                      <Image
                        key={index}
                        src={item}
                        alt={`Collection ${index + 1}`}
                        width={162}
                        height={191}
                        className="object-cover flex-shrink-0 mr-2"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[url(/images/Rectangle28.png)] w-[850px] h-[300px] rounded-4xl flex flex-col justify-start">
              <div className="w-[300px]">
                <h1 className="text-[35px] italic text-[#2E6D39] font-['Gentium_Book_Basic'] ml-6 mt-4">
                  Client Stories
                </h1>
              </div>
              <div className="w-[800px] h-[280px] flex flex-row">
                <div className="w-[181px] h-[172px] m-2 ml-12">
                  <Image
                    src="/images/Rectangle33.png"
                    alt="Client 1"
                    width={181}
                    height={172}
                    className="rounded-4xl"
                  />
                </div>
                <div className="w-[181px] h-[172px] mt-10">
                  <Image
                    src="/images/Rectangle34.png"
                    alt="Client 1"
                    width={181}
                    height={172}
                    className="rounded-4xl"
                  />
                </div>
                <div className="w-[270px] h-[172px] mt-16 ml-8">
                  <p className="relative text-[12px] font-medium font-['comme'] text-black ml-6 mt-2 before:content-['“'] after:content-['”'] before:text-[70px] after:text-[70px] before:text-black after:text-black before:absolute after:absolute before:-left-10 after:-right-[-110px] before:top-[-40px] after:top-9 before:font-['Geist_Mono'] after:font-['Geist_Mono']">
                    I wore my Shrinath Jewels necklace on my wedding day, it
                    made me feel like royalty. With the help of customization, I
                    felt so special!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* this next section */}
        <div className="w-[1080px] h-[400px] bg-[#444343] flex flex-row justify-start">
          <div className="w-[450px] h-[400px]">
            <Image
              src="/images/Group3.png"
              alt="Showcase"
              width={450}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-start items-center w-[48%] m-14">
            <div className="flex flex-col gap-[12px] justify-start items-start w-full ml-[40px]">
              <h2 className="text-[20px] font-normal italic leading-[24px] text-left text-white font-['Gentium_Book_Basic']">
                Visit Our Studio or Connect With Us
              </h2>
              <p className="text-[12px] font-normal leading-[14px] text-left text-white font-['Gentium_Book_Basic'] mb-[4px]">
                We're here to help you find the perfect piece for every
                occasion.
              </p>
            </div>
            <div className="flex flex-col justify-start items-center w-full ml-10">
              <div className="flex flex-col justify-start items-center w-full mt-6">
                <div className="flex justify-start items-center w-full pt-[8px] pb-[20px]">
                  <Image
                    src="/icon/Vector3.svg"
                    alt="Phone icon"
                    width={12}
                    height={12}
                  />
                  <p className="text-[12px] font-normal leading-[14px] text-left text-white font-['Gentium_Book_Basic'] ml-[6px]">
                    +880 1537-570379
                  </p>
                </div>
                <div className="flex justify-start items-center w-full mt-[-6px] pb-[16px]">
                  <div className="flex justify-start items-center w-full">
                    <Image
                      src="/icon/Vector2.svg"
                      alt="Location icon"
                      width={12}
                      height={12}
                    />
                    <p className="text-[12px] font-normal leading-[14px] text-left text-white font-['Gentium_Book_Basic'] ml-[6px]">
                      House D/36, Block E, Lalmatia,Dhaka-1207
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center w-full">
                <Image
                  src="/icon/Vector1.svg"
                  alt="Email icon"
                  width={12}
                  height={12}
                />
                <p className="text-[12px] font-normal leading-[14px] text-left text-white font-['Gentium_Book_Basic'] ml-[6px]">
                  info@deshit-bd.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
