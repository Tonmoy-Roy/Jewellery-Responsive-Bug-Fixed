"use client"

import React from "react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { num: "01", title: "Discovery" },
    { num: "02", title: "UX Design" },
    { num: "03", title: "UI Design" },
    { num: "04", title: "Implementation" },
  ];

  const descriptions = [
    // Discovery
    [
      { text: "Conducted client interviews", bold: true, rest: " to understand the brand vision, target audience, and product range." },
      { text: "Analyzed competitors and market trends", bold: true, rest: " to identify opportunities." },
      { text: "Defined user needs, goals, and pain points", bold: true, rest: " to inform the design direction." },
    ],
    // UX Design
    [
      { text: "Created user personas", bold: true, rest: " representing both everyday buyers and premium/wedding customers." },
      { text: "Prioritized usability, accessibility, and information hierarchy", bold: true, rest: " to enhance the shopping experience." },
    ],
    // UI Design
    [
      { text: "Designed a premium, elegant visual language", bold: true, rest: " aligned with brand identity — color palette, typography, and imagery." },
      { text: "cohesive design system", bold: true, rest: " for consistency across the website.", prefix: "Ensured a " },
    ],
    // Implementation
    [
      { text: "Tested interactions and visuals across devices.", bold: false },
      { text: "Launched a polished digital presence reflecting Shrinath Jewels' luxury and craftsmanship.", bold: false },
    ],
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="w-full bg-[#1e1e1ebf] py-10 md:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* === STEP HEADINGS === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative flex flex-col items-start justify-end h-[80px] sm:h-[90px] md:h-[100px]"
            >
              <span className="text-[28px] sm:text-[36px] md:text-[40px] font-bold italic text-[#ffffff4c] font-['Arimo_Hebrew_Subset_Italic'] absolute top-0 left-0">
                {step.num}
              </span>
              <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold italic text-white font-['Arimo_Hebrew_Subset'] absolute bottom-0 left-10 whitespace-nowrap">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* === PROGRESS BARS === */}
        <div className="flex flex-col items-end space-y-3 mb-10 pr-[8%]">
          <div className="w-full h-[10px] bg-[#d9d9d9]"></div>
          <div className="w-[72%] h-[10px] bg-[#d9d9d9]"></div>
          <div className="w-[44%] h-[10px] bg-[#d9d9d9]"></div>
          <div className="w-[17%] h-[10px] bg-[#d9d9d9]"></div>
        </div>

        {/* === STEP DESCRIPTIONS === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {descriptions.map((desc, i) => (
            <motion.ol
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="list-decimal pl-4 space-y-2 text-white text-[14px] leading-[24px] font-['Roboto']"
            >
              {desc.map((item, j) => (
                <li key={j}>
                  {item.prefix && item.prefix}
                  {item.bold ? (
                    <>
                      <span className="font-medium">{item.text}</span>
                      {item.rest}
                    </>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </motion.ol>
          ))}
        </div>

        <div className="col-span-4 row-span-3 row-start-4">
          <div className="relative w-full h-auto md:h-[400px] lg:h-[424px] flex flex-col md:flex-col items-start md:items-end mt-6 lg:mt-10">

            {/* Mobile Layout (stacked) */}
            <div className="flex flex-col gap-4 md:hidden px-2">

              {/* Med */}
              <h3 className="text-4xl font-semibold text-[#ffffff4c] leading-tight">
                Med
                <br />^^
              </h3>

              {/* Instrumental Serif */}
              <div>
                <h3 className="text-4xl font-semibold text-[#ffffff4c] leading-tight">
                  Instrumental
                </h3>
                <h3 className="text-4xl font-semibold text-[#ffffff4c] leading-tight mt-[-6px]">
                  Serif
                </h3>
              </div>

              {/* abcdefg> */}
              <h3 className="text-4xl font-semibold text-[#ffffff4c] leading-tight">
                abcdefg&gt;
              </h3>

              {/* Raleway */}
              <div>
                <h3 className="text-4xl font-semibold text-white leading-tight">
                  Raleway <br /> Bold
                </h3>
                <h3 className="text-4xl font-normal text-[#ffffffbc] leading-tight">
                  Regular @9*
                </h3>
              </div>
            </div>

            {/* ---------------- PC/LARGE SCREEN LAYOUT ---------------- */}
            <div className="hidden md:block">

              {/* Med */}
              <div className="absolute left-4 bottom-4">
                <h3 className="text-7xl lg:text-[96px] font-semibold leading-tight text-[#ffffff4c]">
                  Med
                  <br />^^
                </h3>
              </div>

              {/* Instrumental / Serif */}
              <div className="absolute right-0 top-0 p-2">
                <h3 className="text-7xl lg:text-[96px] font-semibold leading-tight text-[#ffffff4c]">
                  Instrumental
                </h3>
                <h3 className="text-7xl lg:text-[96px] font-semibold leading-tight text-[#ffffff4c] mt-[-12px] mr-3">
                  Serif
                </h3>
              </div>

              {/* abcdefg> */}
              <h3 className="absolute top-2 left-2 text-7xl lg:text-[96px] font-semibold text-[#ffffff4c] leading-tight">
                abcdefg&gt;
              </h3>

              {/* Raleway */}
              <div className="absolute top-[110px] left-[140px] lg:top-[131px] lg:left-[280px]">
                <h3 className="text-6xl lg:text-[90px] font-semibold text-white leading-snug">
                  Raleway <br /> Bold
                </h3>
                <h3 className="text-6xl lg:text-[90px] font-normal text-[#ffffffbc] leading-snug">
                  Regular @9*
                </h3>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}