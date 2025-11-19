'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Rectangle14 from '../../../../public/images/Rectangle14.png'
import Rectangle15 from '../../../../public/images/Rectangle15.png'
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const legacySectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const legacyItemSlideInVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const legacyTextFadeInVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function WebsiteShowcase() {
  const image = [
    "/images/Ellipse1.png",
    "/images/Ellipse2.png",
    "/images/Ellipse3.png",
    "/images/Ellipse4.png"
  ];

  const product = [
    { src: "/images/Rectangle21.png", name: "Necklace" },
    { src: "/images/Rectangle22.png", name: "Earrings" },
    { src: "/images/Rectangle23.png", name: "Rings" }
  ];

  const works = ["/images/Rectangle25.png", "/images/Rectangle26.png", "/images/Rectangle27.png"];

  const collection = [
    "/images/Rectangle29.png",
    "/images/Rectangle30.png",
    "/images/Rectangle31.png",
    "/images/Rectangle32.png",
    "/images/Rectangle29.png",
    "/images/Rectangle30.png"
  ];

  return (
    <section className="relative items-start">
      {/* Background Image */}
      <Image
        src={Rectangle14}
        alt="Background"
        className="md:w-screen object-cover object-center -z-10 h-[800vh] md:h-[400vh]"
      />

      <div className="absolute inset-0 w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-[184px] flex flex-col items-center">

        {/* Background Image for Hero */}
        <div className="relative flex justify-center items-center border border-amber-600 ">
          <p className="absolute top-2 left-2 text-sm sm:text-base text-white">
            ShrinathJewels
          </p>
          <div>
            <Image
              src={Rectangle15}
              alt="Hero Background"
              className="w-full h-[99vh] sm:h-auto object-cover object-center border border-red-600 md:w-[70.2vw]"
              priority
            />
          </div>

          <div className="absolute p-5">
            {/* Main Glass Card */}
            <motion.div
              className="bg-white/15 rounded-3xl border border-black sm:mb-20 md:flex flex-col items-center justify-center pt-4 sm:pt-6 px-4 md:w-[39vw]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Navigation */}
              <motion.nav
                className="bg-white/30 backdrop-blur w-full max-w-[650px] rounded-3xl border border-white/30 flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-evenly p-2 sm:p-0 gap-2 sm:gap-0"
                variants={itemVariants}
              >
                {["Home", "About Us", "Collection", "Customization", "Materials", "Contact Us"].map((item) => (
                  <motion.button
                    key={item}
                    className="text-xs sm:text-sm md:text-base font-medium text-white px-2 py-1"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </motion.nav>

              {/* Hero Title & Buttons */}
              <motion.div className="w-full max-w-[650px] mt-6" variants={itemVariants}>
                <div className="flex flex-col justify-start pt-4 px-4 sm:px-0">
                  <motion.h1
                    className="text-3xl lg:text-5xl text-left text-white italic"
                    variants={itemVariants}
                  >
                    Our Luxury Collection
                  </motion.h1>
                  <motion.div
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-4"
                    variants={itemVariants}
                  >
                    <motion.button
                      className="bg-white rounded-xl text-xs sm:text-sm font-normal text-black px-4 py-2"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore more
                    </motion.button>
                    <motion.button
                      className="bg-white rounded-xl text-xs sm:text-sm font-normal text-black px-4 py-2"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book an appointment
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Description & Happy Clients */}
              <motion.div
                className="w-full max-w-[650px] flex flex-col lg:flex-row gap-4 mt-6 px-4 sm:px-0"
                variants={itemVariants}
              >
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed text-left text-white/90">
                    Discover exquisite diamond and gold jewelry designed to celebrate every moment from everyday elegance to life's grandest occasions.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/30 backdrop-blur-sm rounded-full border border-white/30 flex items-center px-2 py-1">
                    {image.map((imgSrc, index) => (
                      <div
                        key={index}
                        className={`w-6 h-6 rounded-full overflow-hidden border-2 border-white ${index === 0 ? "" : "-ml-2"}`}
                      >
                        <Image src={imgSrc} alt={`Client ${index + 1}`} width={24} height={24} />
                      </div>
                    ))}
                    <div className="bg-white w-6 h-6 rounded-full -ml-2 flex items-center justify-center text-xs font-bold">
                      +
                    </div>
                  </div>
                  <div className="text-left text-white italic flex flex-col">
                    <p className="text-2xl sm:text-3xl font-bold leading-none">300+</p>
                    <p className="text-[10px] font-normal leading-none">Happy Client</p>
                  </div>
                </div>
              </motion.div>

              {/* Featured Card */}
              <motion.div
                className="w-full max-w-[580px] flex justify-end mt-6 px-4 sm:px-0"
                variants={itemVariants}
              >
                <div className="bg-white rounded-xl w-full sm:w-[250px] flex items-center gap-2 p-2 -mb-8">
                  <Image
                    src="/images/Rectangle20.png"
                    alt="Featured"
                    className="rounded-xl object-cover"
                    width={100}
                    height={60}
                  />
                  <div className="flex flex-col">
                    <p className="text-[10px] sm:text-xs text-black font-normal">
                      Beautiful In Every <br /> Detail
                    </p>
                    <p className="flex items-center gap-1 text-[8px] text-gray-600 font-normal italic">
                      Read More
                      <button className="w-4 h-4 border border-gray-400 text-black rounded-full bg-white hover:bg-gray-100 flex items-center justify-center">
                        <span className="text-[8px]">→</span>
                      </button>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>


        {/* Products Section */}
        <div className="border border-green-600 relative w-full max-w-[1080px] flex flex-col items-center justify-start bg-white">
          <Image
            src="/images/unnamed10.png"
            alt="Section Background"
            fill
            className="object-contain object-top -z-10"
            quality={90}
          />

          <motion.div
            className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 px-4 mt-4 lg:-mt-[90px] mb-12 lg:mb-20"
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
                  <Image src={item.src} alt={item.name} width={240} height={225} className="rounded-lg" />
                  <p className="absolute bottom-2 left-2 font-bold text-black text-base italic px-2 py-1 bg-white/70 rounded">
                    {item.name}
                  </p>
                </div>
                <motion.button
                  className="mt-3 bg-white border rounded-lg text-sm font-semibold text-black px-6 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Check More Products
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Legacy Section */}
          <motion.div
            className="w-full max-w-[900px] flex flex-col lg:flex-row items-center gap-6 lg:gap-0 px-4 mb-12"
            variants={legacySectionContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="w-full lg:w-[300px]" variants={legacyItemSlideInVariants}>
              <Image src="/images/Rectangle24.png" alt="Legacy" width={300} height={400} className="rounded-lg w-full" />
            </motion.div>
            <motion.div className="w-full lg:w-[600px] flex flex-col lg:ml-8" variants={legacyItemSlideInVariants}>
              <motion.div className="text-left flex flex-col gap-y-2" variants={legacyTextFadeInVariants}>
                <h1 className="italic text-2xl sm:text-3xl lg:text-4xl text-[#2E6D39] pb-4">
                  A Legacy Of Shine
                </h1>
                <p className="text-sm sm:text-base font-semibold pb-1 text-black">
                  Founded by Bina Toshniwal, Shrinath Jewels began as a small passion project and grew into a trusted name in fine jewellery.
                </p>
                <p className="text-sm sm:text-base font-semibold text-black">
                  Each piece reflects artistry, purity, and an unwavering commitment to quality crafted to adorn generations.
                </p>
              </motion.div>
              <motion.div className="flex flex-col sm:flex-row gap-3 mt-4" variants={legacyTextFadeInVariants}>
                {works.map((workSrc, index) => (
                  <motion.div key={index} variants={legacyTextFadeInVariants} className="flex-1">
                    <Image src={workSrc} alt={`Work ${index + 1}`} width={199} height={250} className="rounded-lg w-full" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Collection & Client Stories */}
          <div className="w-full max-w-[850px] flex flex-col gap-6 lg:gap-8 px-4 pt-8">
            {/* Our Collection */}
            <div className="relative bg-[#F5F1ED] w-full rounded-3xl flex flex-col lg:flex-row justify-start p-4 lg:p-6 overflow-hidden">
              <Image src="/images/Rectangle28.png" alt="Collection BG" fill className="object-cover -z-10" quality={90} />

              <div className="w-full lg:w-[300px] mb-4 lg:mb-0">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl italic text-[#2E6D39]">
                  Our collection
                </h1>
                <p className="text-xs sm:text-sm font-normal text-black mt-2">
                  At Shrinath Jewels, every collection is a celebration of timeless beauty and fine craftsmanship. From radiant diamonds to pure gold creations, each piece is thoughtfully designed to blend tradition with contemporary elegance.
                </p>
                <p className="text-xs sm:text-sm font-normal text-black mt-2">
                  Whether it's a statement for your special day or a touch of sparkle for everyday wear, our jewellery reflects the artistry, purity, and passion that define Shrinath Jewels.
                </p>
              </div>

              <div className="w-full lg:w-[500px] flex flex-col items-center justify-center lg:ml-6">
                <div className="w-full flex justify-end gap-2 mb-4">
                  <button
                    onClick={() => {
                      const container = document.getElementById("collection-scroll");
                      container.scrollBy({ left: -180, behavior: "smooth" });
                    }}
                    className="bg-[#1A4521] hover:bg-[#416E49] text-white text-xl rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => {
                      const container = document.getElementById("collection-scroll");
                      container.scrollBy({ left: 180, behavior: "smooth" });
                    }}
                    className="bg-[#1A4521] hover:bg-[#416E49] text-white text-xl rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                  >
                    →
                  </button>
                </div>
                <div className="relative w-full overflow-hidden">
                  <div
                    id="collection-scroll"
                    className="flex gap-2 overflow-x-scroll scroll-smooth no-scrollbar"
                  >
                    {collection.map((item, index) => (
                      <Image
                        key={index}
                        src={item}
                        alt={`Collection ${index + 1}`}
                        width={162}
                        height={191}
                        className="object-cover flex-shrink-0 rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Client Stories */}
            <div className="relative bg-[#F5F1ED] w-full rounded-3xl flex flex-col p-4 lg:p-6 overflow-hidden mb-20">
              <Image src="/images/Rectangle28.png" alt="Client Stories BG" fill className="object-cover -z-10" quality={90} />

              <h1 className="text-2xl sm:text-3xl lg:text-4xl italic text-[#2E6D39] mb-4">
                Client Stories
              </h1>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="w-full sm:w-[181px]">
                  <Image src="/images/Rectangle33.png" alt="Client 1" width={181} height={172} className="rounded-2xl w-full" />
                </div>
                <div className="w-full sm:w-[181px]">
                  <Image src="/images/Rectangle34.png" alt="Client 2" width={181} height={172} className="rounded-2xl w-full" />
                </div>
                <div className="flex-1 relative">
                  <p className="text-xs sm:text-sm font-medium text-black px-4 relative before:text-5xl after:text-5xl before:text-black/30 after:text-black/30 before:absolute after:absolute before:-left-2 after:-right-2 before:-top-6 after:bottom-0">
                    I wore my Shrinath Jewels necklace on my wedding day, it made me feel like royalty. With the help of customization, I felt so special!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full max-w-[1080px] bg-[#444343] flex flex-col lg:flex-row overflow-hidden">
          <div className="w-full lg:w-[450px] h-[300px] lg:h-[400px] relative">
            <Image
              src="/images/Group3.png"
              alt="Contact"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center items-start w-full lg:w-[48%] p-6 lg:p-14 gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-lg sm:text-xl font-normal italic text-white">
                Visit Our Studio or Connect With Us
              </h2>
              <p className="text-xs sm:text-sm font-normal text-white">
                We're here to help you find the perfect piece for every occasion.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-2">
                <Image src="/icon/Vector3.svg" alt="Phone" width={12} height={12} />
                <p className="text-xs sm:text-sm text-white">+880 1537-570379</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/icon/Vector2.svg" alt="Location" width={12} height={12} />
                <p className="text-xs sm:text-sm text-white">House D/36, Block E, Lalmatia, Dhaka-1207</p>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/icon/Vector1.svg" alt="Email" width={12} height={12} />
                <p className="text-xs sm:text-sm text-white">info@deshit-bd.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style> */}
    </section >


  );
}