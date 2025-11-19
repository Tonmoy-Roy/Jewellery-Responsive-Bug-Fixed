import React from "react";
import Image from "next/image";

export default function ColorPalette(){
    return (
      <section className="w-full">
        <div className="w-full mx-auto flex justify-start items-center">
          <div className="w-[45%] bg-[url(/images/Rectangle11.png)] pr-[26px] pl-[26px] flex justify-start items-end h-[386px]">
            <p className="text-[15px] font-normal leading-[26px] text-left text-white font-['Rhodium_Libre'] mt-[354px]">
              #3A5A55
            </p>
          </div>
          <div className="w-[28%] bg-[url(/images/Rectangle12.png)] pr-[26px] pl-[26px] flex justify-start items-end h-[386px]">
            <p className="text-[15px] font-normal leading-[26px] text-left text-black font-['Rhodium_Libre'] mt-[354px]">
              #F4F4F4
            </p>
          </div>
          <div className="w-[28%] bg-[url(/images/Rectangle13.png)] pr-[24px] pl-[24px] flex justify-start items-end h-[386px]">
            <p className="text-[15px] font-normal leading-[26px] text-left text-white font-['Rhodium_Libre'] mt-[354px]">
              #444343
            </p>
          </div>
        </div>
      </section>
    );
}