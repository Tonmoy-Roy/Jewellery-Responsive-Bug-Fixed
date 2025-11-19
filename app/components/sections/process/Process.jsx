import React from "react";
import Image from "next/image";

export default function Process(){
    return (
      // <section className="w-full max-h-[1100px] bg-[#1e1e1ebf]">
      //   <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[28px] pr-[28px] pb-[28px] pl-[28px]">
      //     <div className="grid grid-cols-4 grid-rows-7 gap-4">
      //       <div className="relative w-[16%] h-[66px] flex justify-end items-end mt-16">
      //         <span className="text-[40px] font-bold italic leading-[46px] text-left text-[#ffffff4c] font-[Arimo Hebrew Subset Italic] absolute top-0 left-0">
      //           01
      //         </span>
      //         <h3 className="text-[30px] font-bold italic leading-[35px] text-left text-white font-[Arimo Hebrew Subset] absolute bottom-0 left-[50px]">
      //           Discovery
      //         </h3>
      //       </div>
      //       <div className="relative w-[16%] h-[66px] flex justify-end items-end mt-16">
      //         <span className="text-[40px] font-bold italic leading-[46px] text-left text-[#ffffff4c] font-[Arimo Hebrew Subset Italic] absolute top-0 left-0">
      //           02
      //         </span>
      //         <h3 className="text-[30px] font-bold italic leading-[35px] text-left text-white font-[Arimo Hebrew Subset] absolute bottom-0 left-[50px] whitespace-nowrap">
      //           UX Design
      //         </h3>
      //       </div>
      //       <div className="relative w-[16%] h-[66px] flex justify-end items-end mt-16">
      //         <span className="text-[40px] font-bold italic leading-[46px] text-left text-[#ffffff4c] font-[Arimo Hebrew Subset Italic] absolute top-0 left-0">
      //           03
      //         </span>
      //         <h3 className="text-[30px] font-bold italic leading-[35px] text-left text-white font-[Arimo Hebrew Subset] absolute bottom-0 left-[50px] mr-[6px] whitespace-nowrap">
      //           UI Design
      //         </h3>
      //       </div>
      //       <div className="relative w-[26%] h-[66px] flex justify-end items-end mt-16">
      //         <span className="text-[40px] font-bold italic leading-[46px] text-left text-[#ffffff4c] font-[Arimo Hebrew Subset Italic] absolute top-0 left-0">
      //           04
      //         </span>
      //         <h3 className="text-[30px] font-bold italic leading-[35px] text-left text-white font-[Arimo Hebrew Subset] absolute bottom-0 left-[50px]">
      //           Implementation
      //         </h3>
      //       </div>
      //       <div className="col-span-4 pr-[8%]">
      //         <div className="w-[99%] h-[10px] bg-[#d9d9d9] mt-[10px] self-start ml-auto m-2"></div>
      //         <div className="w-[72%] h-[10px] bg-[#d9d9d9] mt-[6px] ml-auto m-2"></div>
      //         <div className="w-[44%] h-[10px] bg-[#d9d9d9] mt-[6px] ml-auto m-2"></div>
      //         <div className="w-[17%] h-[10px] bg-[#d9d9d9] mt-[6px] ml-auto m-2"></div>
      //       </div>
      //       <div className="row-span-1 row-start-3 pr-[5%]">
      //         <ol className="list-decimal my-0">
      //           <li className="text-[14px] font-normal leading-[24px] text-left text-white font-['Roboto']">
      //             <span className="font-medium">
      //               Conducted client interviews
      //             </span>{" "}
      //             to understand the brand vision, target audience, and product
      //             range.
      //           </li>
      //           <li className="text-[14px] font-normal leading-[24px] text-left text-white font-['Roboto']">
      //             <span className="font-medium">
      //               Analyzed competitors and market trends
      //             </span>{" "}
      //             to identify opportunities.
      //           </li>
      //           <li className="text-[14px] font-normal leading-[24px] text-left text-white font-['Roboto']">
      //             <span className="font-medium">
      //               Defined user needs, goals, and pain points
      //             </span>{" "}
      //             to inform the design direction.
      //           </li>
      //         </ol>
      //       </div>
      //       <div className="row-span-1 row-start-3 pr-[5%]">
      //         <ol className="list-decimal my-0">
      //           <li className="text-[14px] font-normal leading-[24px] text-left text-white font-['Roboto']">
      //             <span className="font-medium">Created user personas</span>{" "}
      //             representing both everyday buyers and premium/wedding
      //             customers.
      //           </li>
      //           <li className="text-[14px] font-normal leading-[24px] text-left text-white font-['Roboto']">
      //             <span className="font-medium">
      //               Prioritized usability, accessibility, and clear information
      //               hierarchy
      //             </span>{" "}
      //             to enhance the shopping experience.
      //           </li>
      //         </ol>
      //       </div>
      //       <div className="row-span-1 row-start-3 pr-[5%]">
      //         <ol className="list-decimal my-0">
      //           <li className="text-[14px] font-normal leading-[24px] text-left text-white font-['Roboto']">
      //             <span className="font-medium">
      //               Designed a premium, elegant visual language
      //             </span>
      //             aligned with the brand identity color palette, typography, and
      //             imagery.
      //           </li>
      //           <li className="text-[14px] font-normal leading-[24px] text-left text-white font-['Roboto']">
      //             Ensured a{" "}
      //             <span className="font-medium">cohesive design system </span>
      //             for consistency across the website.
      //           </li>
      //         </ol>
      //       </div>
      //       <div className="row-span-1 row-start-3 pr-[5%]">
      //         <ol className="list-decimal my-0">
      //           <li className="text-[14px] font-normal leading-[24px] text-left text-white font-['Roboto']">
      //             Tested interactions and visual elements across devices.
      //           </li>
      //           <li className="text-[14px] font-normal leading-[24px] text-left text-white font-['Roboto']">
      //             Launched a polished digital presence reflecting Shrinath
      //             Jewels' luxury and craftsmanship.
      //           </li>
      //         </ol>
      //       </div>
      //       <div className="col-span-4 row-span-3 row-start-4">
      //         <div className="relative w-full h-[424px] flex justify-center items-end mt-10">
      //           <div className="flex flex-col justify-start items-start w-full h-auto mr-[12px] mb-[30px] ml-[12px]">
      //             <h3 className="text-[96px] font-semibold leading-[113px] text-left text-[#ffffff4c] font-['Roboto']">
      //               Med
      //               <br />
      //               ^^
      //             </h3>
      //           </div>
      //           <div className="flex flex-col justify-start items-end w-full h-auto absolute top-0">
      //             <h3 className="text-[96px] font-semibold leading-[113px] text-left text-[#ffffff4c] font-['Roboto']">
      //               Instrumental
      //             </h3>
      //             <h3 className="text-[96px] font-semibold leading-[113px] text-left text-[#ffffff4c] font-['Roboto'] mt-[-16px] mr-[16px]">
      //               Serif
      //             </h3>
      //           </div>
      //           <h3 className="text-[96px] font-semibold leading-[113px] text-left text-[#ffffff4c] font-['Roboto'] absolute top-[10px] left-0">
      //             abcdefg&gt;
      //           </h3>
      //           <div className="flex flex-col justify-start items-start w-auto h-auto absolute top-[131px] left-[280px]">
      //             <h3 className="text-[90px] font-semibold leading-[106px] text-left text-white font-['Roboto']">
      //               Raleway
      //               <br />
      //               Bold
      //             </h3>
      //             <h3 className="text-[90px] font-normal leading-[106px] text-left text-[#ffffffbc] font-['Roboto']">
      //               Regular @9*
      //             </h3>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </section>
      <section className="w-full bg-[#1e1e1ebf] py-10 md:py-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* === STEP HEADINGS === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {[
              { num: "01", title: "Discovery" },
              { num: "02", title: "UX Design" },
              { num: "03", title: "UI Design" },
              { num: "04", title: "Implementation" },
            ].map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col items-start justify-end h-[80px] sm:h-[90px] md:h-[100px]"
              >
                <span className="text-[28px] sm:text-[36px] md:text-[40px] font-bold italic text-[#ffffff4c] font-['Arimo_Hebrew_Subset_Italic'] absolute top-0 left-0">
                  {step.num}
                </span>
                <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold italic text-white font-['Arimo_Hebrew_Subset'] absolute bottom-0 left-10 whitespace-nowrap">
                  {step.title}
                </h3>
              </div>
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
            {/* Discovery */}
            <ol className="list-decimal pl-4 space-y-2 text-white text-[14px] leading-[24px] font-['Roboto']">
              <li>
                <span className="font-medium">Conducted client interviews</span>{" "}
                to understand the brand vision, target audience, and product
                range.
              </li>
              <li>
                <span className="font-medium">
                  Analyzed competitors and market trends
                </span>{" "}
                to identify opportunities.
              </li>
              <li>
                <span className="font-medium">
                  Defined user needs, goals, and pain points
                </span>{" "}
                to inform the design direction.
              </li>
            </ol>

            {/* UX Design */}
            <ol className="list-decimal pl-4 space-y-2 text-white text-[14px] leading-[24px] font-['Roboto']">
              <li>
                <span className="font-medium">Created user personas</span>{" "}
                representing both everyday buyers and premium/wedding customers.
              </li>
              <li>
                <span className="font-medium">
                  Prioritized usability, accessibility, and information
                  hierarchy
                </span>{" "}
                to enhance the shopping experience.
              </li>
            </ol>

            {/* UI Design */}
            <ol className="list-decimal pl-4 space-y-2 text-white text-[14px] leading-[24px] font-['Roboto']">
              <li>
                <span className="font-medium">
                  Designed a premium, elegant visual language
                </span>{" "}
                aligned with brand identity — color palette, typography, and
                imagery.
              </li>
              <li>
                Ensured a{" "}
                <span className="font-medium">cohesive design system</span> for
                consistency across the website.
              </li>
            </ol>

            {/* Implementation */}
            <ol className="list-decimal pl-4 space-y-2 text-white text-[14px] leading-[24px] font-['Roboto']">
              <li>Tested interactions and visuals across devices.</li>
              <li>
                Launched a polished digital presence reflecting Shrinath Jewels’
                luxury and craftsmanship.
              </li>
            </ol>
          </div>

          <div className="col-span-4 row-span-3 row-start-4">
            {/* Container: "overflow-hidden" has been REMOVED from this line.
    This will stop the content from being clipped.
  */}
            <div className="relative w-full h-[350px] md:h-[400px] lg:h-[424px] flex justify-center items-end mt-6 lg:mt-10">
              {/* "Med" Block */}
              <div
                className="flex flex-col justify-start items-start w-full h-auto 
                   p-4 md:p-0 md:mr-[12px] md:mb-[30px] md:ml-[12px]"
              >
                <h3 className="text-5xl md:text-7xl lg:text-[96px] font-semibold leading-tight lg:leading-[113px] text-left text-[#ffffff4c] font-['Roboto']">
                  Med
                  <br />
                  ^^
                </h3>
              </div>

              {/* "Instrumental/Serif" Block */}
              <div className="flex flex-col justify-start items-end w-full h-auto absolute top-0 right-0 p-2 md:p-0">
                <h3 className="text-5xl md:text-7xl lg:text-[96px] font-semibold leading-tight lg:leading-[113px] text-left text-[#ffffff4c] font-['Roboto']">
                  Instrumental
                </h3>
                <h3
                  className="text-5xl md:text-7xl lg:text-[96px] font-semibold leading-tight lg:leading-[113px] text-left text-[#ffffff4c] font-['Roboto'] 
                     mt-[-8px] mr-2 md:mt-[-12px] md:mr-3 lg:mt-[-16px] lg:mr-[16px]"
                >
                  Serif
                </h3>
              </div>

              {/* "abcdefg>" Block */}
              <h3
                className="text-5xl md:text-7xl lg:text-[96px] font-semibold leading-tight lg:leading-[113px] text-left text-[#ffffff4c] font-['Roboto'] 
                   absolute top-2 left-2 lg:top-[10px] lg:left-0"
              >
                abcdefg&gt;
              </h3>

              {/* "Raleway" Block */}
              <div
                className="flex flex-col justify-start items-start w-auto h-auto absolute
                   top-[90px] left-1/2 -translate-x-1/2 
                   md:top-[110px] md:left-[140px] md:translate-x-0
                   lg:top-[131px] lg:left-[280px]"
              >
                <h3 className="text-4xl md:text-6xl lg:text-[90px] font-semibold leading-snug lg:leading-[106px] text-left text-white font-['Roboto']">
                  Raleway
                  <br />
                  Bold
                </h3>
                <h3 className="text-4xl md:text-6xl lg:text-[90px] font-normal leading-snug lg:leading-[106px] text-left text-[#ffffffbc] font-['Roboto']">
                  Regular @9*
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}