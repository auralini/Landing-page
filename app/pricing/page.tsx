"use client";

import Footer from "@/components/footer";
import { GlassForm } from "@/components/glass-form";
import Header from "@/components/header";

export default function page() {
  return (
    <div className="w-full bg-black relative ">
      <div className="sticky top-5 left-0 right-0 z-50">
        <Header />
      </div>
      {/* 1st */}
      <div className=" w-full  pt-24 pb-20 relative bg-gradient-to-b from-[#011542]/40 via-[#011542]/40 to-[#011542]/20 ">
        <div className="relative flex flex-col items-center justify-center  w-full sm:w-full md:w-full px-4 sm:px-6 md:px-8">
          <p className="bg-gradient-to-r from-[#0B50EA]/30 via-[#011542]/20 to-[#011542]/20 p-2 px-4 border-l-2 border-white/20 backdrop-blur-3xl text-center text-[14px] sm:text-[16px] leading-tight sm:leading-5 mb-4 sm:mb-6 md:mb-8 rounded-full">
            Pricing{" "}
            <span className="text-[#0B50EA] font-playfair_display italic">
              (Transparent, ROI-Based Plans)
            </span>
          </p>
          <h1 className="text-center text-[#0B50EA] font-unbounded text-[28px] sm:text-[32px]  font-bold leading-tight sm:leading-snug md:leading-8 ">
            Let’s Build Your
          </h1>
          <h1 className="text-center font-unbounded text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight sm:leading-snug md:leading-8 mb-4 sm:mb-6">
            <br />
            Perfect Growth Plan!
          </h1>
        </div>
      </div>
      {/* 2nd */}
      <div className="bg-[#011542]/20 flex items-center justify-center w-full ">
        <GlassForm />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
