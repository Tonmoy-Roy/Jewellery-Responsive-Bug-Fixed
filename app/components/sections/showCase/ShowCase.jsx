import React from "react";
import Image from "next/image";
import Rectangle4 from '../../../../public/images/Rectangle4.png'
import Rectangle6  from '../../../../public/images/Rectangle6.png'
export default function ShowCase() {
  return (
    <section>
      <div className="md:flex">
        <Image
          src={Rectangle4}
          alt="Product showcase left"
          className="md:w-[50vw]"
        />
        <Image
          src={Rectangle6}
          alt="Product showcase right"
          className="md:w-[50vw]"
        />
      </div>
    </section>
  );
}