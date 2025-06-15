"use client";
import { AnimatedButton } from "@/components/animated-button";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full bg-black relative ">
      <div className="sticky top-5 left-0 right-0 z-50">
        <Header />
      </div>
      {/* 1st */}
      <div className=" w-full  py-24 pb-36 relative bg-gradient-to-b from-[#011542]/40 via-[#011542]/40 to-[#011542]/20 ">
        <div className="relative flex flex-col items-center justify-center  w-full sm:w-full md:w-full px-4 sm:px-6 md:px-8">
          <p className="bg-gradient-to-r from-[#0B50EA]/30 via-[#011542]/20 to-[#011542]/20 p-2 px-4 border-l-2 border-white/20 backdrop-blur-3xl text-center text-[14px] sm:text-[16px] leading-tight sm:leading-5 mb-4 sm:mb-6 md:mb-8 rounded-full">
            About Us{" "}
            <span className="text-[#0B50EA] font-playfair_display italic">
              (Who We Are, Our Mission & Vision)
            </span>
          </p>
          <h1 className="text-center text-[#0B50EA] font-unbounded text-[28px] sm:text-[32px]  font-bold leading-tight sm:leading-snug md:leading-8 ">
            Not Just Another Agency
          </h1>
          <h1 className="text-center font-unbounded text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight sm:leading-snug md:leading-8 mb-4 sm:mb-6">
            <br />
            Your Strategic Growth Partner
          </h1>
        </div>
      </div>
      {/* 2nd */}
      <div className="w-full  mx-auto px-5 sm:px-20 py-12 bg-[#011542]/20">
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-center">
          <div className="space-y-4">
            <h2 className="font-unbounded text-2xl md:text-3xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-[#8a8a8a] text-lg md:text-xl leading-relaxed max-w-lg">
              We’re on a mission to eliminate wasted ad spend and help Small and
              Medium Businesses grow beyond their limits. By leveraging
              cutting-edge AI strategies and data-driven decision-making, we
              empower you to achieve sustainable, scalable growth without the
              guesswork or wasted budgets. <br /> Your success isn’t just our
              goal—it’s our bottom line.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden aspect-video relative">
            <Image
              src="/about-1.png"
              alt="Team collaboration with digital overlay"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-center">
          <div className="rounded-lg overflow-hidden aspect-video relative order-2 md:order-1">
            <Image
              src="/about-2.png"
              alt="Precision marketing target"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Vision
            </h2>
            <p className="text-[#8a8a8a] text-lg md:text-xl leading-relaxed  max-w-lg">
              To empower SMBs with cutting-edge AI marketing, levelling the
              playing field so you can grow faster, smarter, and bigger.
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Promise
            </h2>
            <p className="text-[#8a8a8a] text-lg md:text-xl leading-relaxed  max-w-lg">
              Double your revenue—or you don&apos;t pay us. We&apos;re not here
              for vanity metrics. We&apos;re here to drive real, scalable
              growth.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden aspect-video relative">
            <Image
              src="/about-3.png"
              alt="Growth chart visualization"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <AnimatedButton
            className="rounded-full px-4 py-4 text-[#ffffff] hover:text-black  font-medium"
            baseColor="bg-[#0B50EA]"
            hoverColor="bg-white"
            // size={"lg"}
            endIcon={<ArrowRight className="ml-2 h-5 w-5" />}
          >
            Meet the Team & Work With Us
          </AnimatedButton>
        </div>
      </div>

      <ContactForm />
      {/* footer */}
      <Footer />
    </div>
  );
}
