import React from "react";
import Image from "next/image";

export default function Quote(){
    return (
      // <section className="w-full bg-cover bg-center bg-no-repeat bg-[url(/images/unnamed1.png)]">
      //   <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[182px] pr-[56px] pb-[182px] pl-[56px] flex justify-center items-end">
      //     <div className="flex flex-col gap-[30px] justify-start items-center w-[64%] mt-[14px]">
      //       <p className="text-[36px] font-bold italic leading-[14px] text-left text-black font-[Arimo Hebrew Subset Italic] w-full mb-4">
      //         Just like fine jewellery, this design is crafted to fit
      //       </p>
      //       <h2 className="text-[30px] font-normal italic leading-[35px] text-center text-[#1e1e1e] font-[Arimo Hebrew Subset Italic]">
      //         the user, the purpose, and the brand's story
      //       </h2>
      //     </div>
      //   </div>
      // </section>
      <section className="w-full bg-[url('/images/unnamed1.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-24 md:py-40 text-center">
          <div className="flex flex-col gap-6 md:gap-8 w-full sm:w-[80%]">
            <p className="text-[22px] sm:text-[28px] md:text-[36px] font-bold italic leading-tight text-black font-['Arimo_Hebrew_Subset_Italic']">
              Just like fine jewellery, this design is crafted to fit
            </p>
            <h2 className="text-[18px] sm:text-[24px] md:text-[30px] font-normal italic leading-snug text-[#1e1e1e] font-['Arimo_Hebrew_Subset_Italic']">
              the user, the purpose, and the brand's story
            </h2>
          </div>
        </div>
      </section>
    );
}