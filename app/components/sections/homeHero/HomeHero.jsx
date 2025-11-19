import React from "react";
import Image from "next/image";
import banner from '../../../../public/images/Rectangle3.png'
export default function HomeHero() {
  return (
    <section>
      <Image
        src={banner}
        alt="Hero background"
        className="md:h-screen h-80"
      />
      <div className="absolute top-6 right-2 md:w-[36vw] md:h-[22vh] p-5">
        <div className="md:flex">
          <div className="mb-3">
            <p className="md:w-[9vw] ">UI UX Design</p>
            <p>Web Design</p>
          </div>
          <div>
            <p>I have designed the website with a premium and elegant aesthetic to reflect Shrinath Jewels' brand identity highlighting its craftsmanship, timeless appeal, and commitment to quality in every detail.</p>
          </div>
        </div>
      </div>
    </section>
  );
}