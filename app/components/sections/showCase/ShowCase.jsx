import React from "react";
import Image from "next/image";

export default function ShowCase(){
    return (
      <section className="w-full">
        <div className="w-full max-h-[652px] flex items-stretch justify-center">
          <Image
            src="/images/Rectangle4.png"
            alt="Product showcase left"
            width={666}
            height={652}
            className="w-1/2 block"
          />
          <Image
            src="/images/Rectangle6.png"
            alt="Product showcase right"
            width={666}
            height={652}
            className="w-1/2 block"
          />
        </div>
      </section>
    );
}