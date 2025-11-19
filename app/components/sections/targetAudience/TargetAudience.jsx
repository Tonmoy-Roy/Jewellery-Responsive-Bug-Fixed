import React from "react";
import Image from "next/image";

export default function TargetAudience(){
    return (
      //     <section
      //       className="w-full min-h-screen
      // bg-[url('/images/download1.png'),url('/images/Rectangle1.png')]
      // bg-[position:95%_90%,center]
      // bg-[size:248px_475px,cover]
      // bg-no-repeat
      // relative flex items-center justify-end px-4"
      //     >
      //       <div className="flex flex-col lg:flex-row w-full lg:w-[85%] max-w-none p-4 md:absolute md:items-center items-start lg:left-60 lg:top-16">
      //         <h2 className="w-full lg:w-1/3 text-[42px] sm:text-[60px] lg:text-[90px] font-bold italic leading-tight tracking-wide text-[#1e1e1eb2] font-['Arimo_Hebrew_Subset'] mb-6 lg:mb-0">
      //           Target <br />
      //           Audience
      //         </h2>

      //         <div className="w-full lg:w-2/3 lg:ml-12 mt:-6 lg:mt-14">
      //           <p className="text-[18px] sm:text-[20px] lg:text-[23px] leading-relaxed text-[#1e1e1eaf] font-['Inter'] ml-16">
      //             Since Shrinath Jewels caters to both everyday jewellery buyers and
      //             wedding / premium buyers, here's how you can present your user
      //             personas, including shopping behaviour, pain points, and goals for
      //             each.
      //           </p>
      //         </div>
      //       </div>

      //       <div className="flex flex-col lg:flex-row w-full lg:w-[83%] max-w-none md:absolute md:items-center items-start lg:left-60 lg:top-90">
      //         <div className="flex flex-row basis-full">
      //           <div className="flex flex-col basis-1/2">
      //             <div className=" flex flex-row basis-1/2">
      //               <div className="flex flex-col basis-1/2 p-4">
      //                 <div className="flex flex-col justify-start items-start w-auto">
      //                   <h3 className="text-[20px] font-bold leading-[24px] text-left text-black font-['Roboto']">
      //                     Purva, 28
      //                   </h3>
      //                   <p className="text-[12px] font-light leading-[15px] text-left text-black font-['Roboto']">
      //                     Physiotherapist
      //                   </p>
      //                 </div>

      //                 <h4 className="text-[14px] font-normal leading-[17px] text-left text-black font-['Roboto'] mt-[12px] mb-[12px]">
      //                   Shopping Behavior
      //                 </h4>
      //                 <div className="flex flex-col gap-[10px] justify-start items-start w-[90%] mt-[6px] ml-[8px]">
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     1. Prefers elegant, minimal jewellery suitable for daily
      //                     wear or office use.
      //                   </p>
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     2. Looks for affordable luxury values both design and
      //                     practicality.
      //                   </p>
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     3. Often browses Instagram or brand websites before
      //                     visiting the store.
      //                   </p>
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     4. Likes clear product visuals, simple navigation, and
      //                     quick checkout.
      //                   </p>
      //                 </div>
      //               </div>
      //               <div className="flex flex-col basis-1/2 p-4">
      //                 <div className="flex flex-col justify-start items-start w-auto">
      //                   <h3 className="text-[20px] font-bold leading-[24px] text-left text-black font-['Roboto']">
      //                     Anvita, 23
      //                   </h3>
      //                   <p className="text-[12px] font-light leading-[15px] text-left text-black font-['Roboto']">
      //                     Marketing Intern
      //                   </p>
      //                 </div>

      //                 <h4 className="text-[14px] font-normal leading-[17px] text-left text-black font-['Roboto'] mt-[12px] mb-[12px]">
      //                   Shopping Behavior
      //                 </h4>
      //                 <div className="flex flex-col gap-[10px] justify-start items-start w-[90%] mt-[6px] ml-[8px]">
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     1. Visits stores with family and takes time to make big
      //                     purchase decisions.
      //                   </p>
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     2. Seeks unique bridal and statement pieces with emotional
      //                     and cultural value.
      //                   </p>
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     3. Compares multiple jewellers for purity, price, and
      //                     customisation options.
      //                   </p>
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     4. Likes a personalized, luxury experience both online and
      //                     offline.
      //                   </p>
      //                 </div>
      //               </div>
      //             </div>
      //             <div className=" flex flex-row basis-1/2">
      //               <div className=" flex flex-col basis-1/2 p-4">
      //                 <h5 className="text-[14px] font-normal leading-[17px] text-left text-black font-['Roboto'] mb-[8px]">
      //                   Pain Points
      //                 </h5>
      //                 <div className="flex flex-col gap-[10px] justify-start items-start w-[90%] mt-[6px] ml-[8px]">
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     1. Feels overwhelmed by overly grand jewellery collections
      //                     online.
      //                   </p>
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     2. Finds it hard to identify authentic materials and
      //                     purity online.
      //                   </p>
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     3. Limited trust in smaller jewellery websites without
      //                     strong brand cues.
      //                   </p>
      //                 </div>
      //               </div>
      //               <div className=" flex flex-col basis-1/2 p-4">
      //                 <h5 className="text-[14px] font-normal leading-[17px] text-left text-black font-['Roboto'] mb-[8px]">
      //                   Pain Points
      //                 </h5>
      //                 <div className="flex flex-col gap-[10px] justify-start items-start w-[90%] mt-[6px] ml-[8px]">
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     1. Feels most websites don't showcase heavy jewellery
      //                     clearly or realistically.
      //                   </p>
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     2. Difficult to visualise how pieces will look when worn.
      //                   </p>
      //                   <p className="text-[12px] font-normal leading-[14px] text-left text-black font-['Roboto'] w-full">
      //                     3. Too much focus on price, not enough on craftsmanship or
      //                     story.
      //                   </p>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className="basis-1/2 p-4 ml-8">
      //             <h3 className="text-[20px] font-normal leading-[24px] text-left text-black font-['Roboto']">
      //               Goal
      //             </h3>
      //             <div className="w-[700px] relative">
      //               <p className="text-[12px] font-normal leading-[18px] text-left text-black font-['Roboto'] mt-[8px] absolute">
      //                 <span className="font-normal">
      //                   The collective goal of Shrinath Jewels' users is to find
      //                   jewellery that{" "}
      //                 </span>
      //                 <span className="font-bold italic font-['Arimo_Hebrew_Subset']">
      //                   balances authenticity, aesthetics, and emotional valu
      //                 </span>
      //                 <span className="font-normal italic font-['Arimo_Hebrew_Subset']">
      //                   e
      //                 </span>
      //                 <span className="font-normal">
      //                   . Whether purchasing for everyday wear or special occasions,
      //                   users seek a{" "}
      //                 </span>
      //                 <span className="font-bold italic font-['Arimo_Hebrew_Subset']">
      //                   trustworthy brand experience that feels both premium and
      //                   personal
      //                 </span>
      //                 <span className="font-normal">
      //                   . They want jewellery that reflects their{" "}
      //                 </span>
      //                 <span className="font-bold italic font-['Arimo_Hebrew_Subset']">
      //                   individuality, offers transparent quality assurance, and
      //                   provides a seamless shopping journey
      //                 </span>
      //                 <span className="font-normal">
      //                   {" "}
      //                   from browsing to purchase.{" "}
      //                 </span>
      //               </p>
      //             </div>
      //             <Image
      //               src="/images/Rectangle2.png"
      //               alt="Goals illustration"
      //               width={488}
      //               height={278}
      //               className="w-[75%] object-contain self-end mt-[120px] rounded-[10px]"
      //             />
      //           </div>
      //         </div>
      //       </div>
      //     </section>
      <section
        className="w-full min-h-screen 
    bg-[url('/images/download1.png'),url('/images/Rectangle1.png')] 
    bg-[position:95%_90%,center] 
    bg-[size:248px_475px,cover] 
    bg-no-repeat 
    relative flex flex-col lg:flex-col items-start lg:items-center justify-start px-4 lg:px-16 py-12 lg:py-24"
      >
        {/* Heading */}
        <div className="w-full xl:max-w-[1440px] mx-auto flex xl:flex-row md:flex-col sm:flex-col mb-12 lg:mb-12 px-4 md:px-6">
          <h2 className="text-[42px] sm:text-[50px] md:text-[65px] lg:text-[75px] xl:text-[90px] font-bold italic leading-tight tracking-wide text-[#1e1e1eb2] font-['Arimo_Hebrew_Subset_Italic'] mb-6 xl:mb-0">
            Target <br />
            Audience
          </h2>

          <div className="xl:flex xl:flex-col justify-center xl:mt-10 xl:ml-12 md:mt-0 md:ml-0">
            <p className="text-[18px] sm:text-[20px] lg:text-[23px] leading-relaxed text-[#1e1e1eaf] font-['Inter']">
              Since Shrinath Jewels caters to both everyday jewellery buyers and
              wedding / premium buyers, here's how you can present your user
              personas, including shopping behaviour, pain points, and goals for
              each.
            </p>
          </div>
        </div>

        {/* Personas & Goals */}
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:px-6 xl:px-44">
          {/* Left Column: Personas */}
          <div className="flex flex-col gap-8 lg:w-[55%]">
            {/* Persona Row */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Persona 1 */}
              <div className="flex-1 p-4">
                <h3 className="text-[20px] font-bold leading-[24px] text-black font-['Roboto']">
                  Purva, 28
                </h3>
                <p className="text-[12px] font-light leading-[15px] text-black font-['Roboto']">
                  Physiotherapist
                </p>
                <h4 className="text-[14px] font-normal mt-4 mb-2">
                  Shopping Behavior
                </h4>
                <ol className="text-[12px] font-normal space-y-1 list-decimal ml-5 ">
                  <li>
                    Prefers elegant, minimal jewellery suitable for daily wear
                    or office use.
                  </li>
                  <li>
                    Looks for affordable luxury values both design and
                    practicality.
                  </li>
                  <li>
                    Often browses Instagram or brand websites before visiting
                    the store.
                  </li>
                  <li>
                    Likes clear product visuals, simple navigation, and quick
                    checkout.
                  </li>
                </ol>
                <h4 className="text-[14px] font-normal mt-4 mb-2">
                  Pain Points
                </h4>
                <ol className="text-[12px] font-normal space-y-1 list-decimal ml-5">
                  <li>
                    Feels overwhelmed by overly grand jewellery collections
                    online.
                  </li>
                  <li>
                    Finds it hard to identify authentic materials and purity
                    online.
                  </li>
                  <li>
                    Limited trust in smaller jewellery websites without strong
                    brand cues.
                  </li>
                </ol>
              </div>

              {/* Persona 2 */}
              <div className="flex-1 p-4">
                <h3 className="text-[20px] font-bold leading-[24px] text-black font-['Roboto']">
                  Anvita, 23
                </h3>
                <p className="text-[12px] font-light leading-[15px] text-black font-['Roboto']">
                  Marketing Intern
                </p>
                <h4 className="text-[14px] font-normal mt-4 mb-2">
                  Shopping Behavior
                </h4>
                <ol className="text-[12px] font-normal space-y-1 list-decimal ml-5">
                  <li>
                    Visits stores with family and takes time to make big
                    purchase decisions.
                  </li>
                  <li>
                    Seeks unique bridal and statement pieces with emotional and
                    cultural value.
                  </li>
                  <li>
                    Compares multiple jewellers for purity, price, and
                    customisation options.
                  </li>
                  <li>
                    Likes a personalized, luxury experience both online and
                    offline.
                  </li>
                </ol>
                <h4 className="text-[14px] font-normal mt-4 mb-2">
                  Pain Points
                </h4>
                <ol className="text-[12px] font-normal space-y-1 list-decimal ml-5">
                  <li>
                    Feels most websites don't showcase heavy jewellery clearly
                    or realistically.
                  </li>
                  <li>
                    Difficult to visualise how pieces will look when worn.
                  </li>
                  <li>
                    Too much focus on price, not enough on craftsmanship or
                    story.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Right Column: Goals */}
          <div className="lg:w-[50%] flex flex-col items-start gap-6">
            <h3 className="text-[20px] font-normal leading-[24px] text-black font-['Roboto']">
              Goal
            </h3>
            <p className="text-[12px] sm:text-[14px] leading-[18px] text-black font-['Roboto']">
              The collective goal of Shrinath Jewels' users is to find jewellery
              that{" "}
              <span className="font-bold italic font-['Arimo_Hebrew_Subset']">
                balances authenticity, aesthetics, and emotional value
              </span>
              . Whether purchasing for everyday wear or special occasions, users
              seek a{" "}
              <span className="font-bold italic font-['Arimo_Hebrew_Subset']">
                trustworthy brand experience that feels both premium and
                personal
              </span>
              . They want jewellery that reflects their{" "}
              <span className="font-bold italic font-['Arimo_Hebrew_Subset']">
                individuality, offers transparent quality assurance, and
                provides a seamless shopping journey
              </span>
              .
            </p>
            <Image
              src="/images/Rectangle2.png"
              alt="Goals illustration"
              width={488}
              height={278}
              className="w-full max-w-[488px] object-contain rounded-[10px]"
            />
          </div>
        </div>
      </section>
    );
}