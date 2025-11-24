"use client";
import { useEffect } from "react";
import Image from "next/image";
import banner from '../../../../public/images/Rectangle3.png';
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function HomeHero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

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
  const COLORS_TOP = ["#E11D48", "#F59E0B", "#FCD34D", "#EC4899", "#8B5CF6"]; 

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);


  const backgroundImage = useMotionTemplate`radial-gradient(ellipse 180% 90% at 50% 0%, transparent 40%, ${color} 100%)`;
  const border = useMotionTemplate`1px solid ${color}40`;
  const boxShadow = useMotionTemplate`0px 8px 32px ${color}40`;

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={banner}
        alt="Shrinath Jewels - Luxury Collection"
        fill
        className="object-cover"
        priority
      />

      <motion.div
        style={{ backgroundImage, opacity: 0.4 }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="absolute inset-0 pointer-events-none">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={6}
            saturation={0}
            fade
            speed={1.5}
          />
        </Canvas>
      </div>

      <div className="absolute top-6 right-2 md:right-10 md:top-20 md:w-[40vw] lg:w-[36vw] p-6 md:p-10">
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8 text-white"
        >
          <div className="space-y-3 mt-40 md:mt-0">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-white via-yellow-100 to-amber-200 bg-clip-text text-transparent">
              UI/UX Design <br /> Web Design
            </h2>
          </div>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl drop-shadow-lg text-white">
            I have designed the website with a premium and elegant aesthetic to reflect Shrinath Jewels' brand identity — highlighting its craftsmanship, timeless appeal, and commitment to quality in every detail.
          </p>

          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md px-8 py-4 text-white font-medium transition-all hover:bg-white/20"
          >
            Explore Collection
            <FiArrowRight className="text-xl transition-transform group-hover:translate-x-2 group-hover:-rotate-45" />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </section >
  );
}