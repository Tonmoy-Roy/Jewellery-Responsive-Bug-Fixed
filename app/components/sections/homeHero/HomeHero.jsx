"use client";
import React from "react";
import Image from "next/image";
import banner from '../../../../public/images/Rectangle3.png';
import { motion, useMotionValue } from "framer-motion";

export default function HomeHero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
  // const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = (e.clientX - (rect.left + rect.width / 2)) / 10;
    const offsetY = (e.clientY - (rect.top + rect.height / 2)) / 10;

    x.set(offsetX);
    y.set(offsetY);
  };

  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <section>
      <Image
        src={banner}
        alt="Hero background"
        className="md:h-screen h-80"
      />

      <div className="absolute top-6 right-2 md:w-[36vw] md:h-[22vh] p-5">
        <div className="md:flex">
          <motion.h2
            className=""
            initial={{ x: 300, opacity: 0 }}   // start from LEFT
            animate={{ x: 0, opacity: 1 }}      // move to CENTER
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="mb-3">
              <p className="md:w-[9vw] ">UI UX Design</p>
              <p>Web Design</p>
            </div>
            <div>
              <p>I have designed the website with a premium and elegant aesthetic to reflect Shrinath Jewels' brand identity highlighting its craftsmanship, timeless appeal, and commitment to quality in every detail.</p>
            </div>
          </motion.h2>
        </div>
      </div>
    </section>
  );
}