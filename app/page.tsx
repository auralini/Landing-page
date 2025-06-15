"use client";
import Header from "@/components/header";
import Image from "next/image";
import FeatureCards from "@/components/feature-cards";
import { AnimatedButton } from "@/components/animated-button";
import { ArrowRight } from "lucide-react";
import MarketingCards from "@/components/marketing-cards";
import TestimonialsContinuousScroll from "@/components/testimonials-continuous-scroll";
import StatsCounter from "@/components/stats-counter";
import { BsGraphUp } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import ImpactIcon from "@/components/ImpactIcon";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div className="w-full bg-black relative ">
      <div className="sticky top-5 left-0 right-0 z-50">
        <Header />
      </div>
      <div className="-mt-24"></div>
      {/* Hero */}
      <div className="w-full relative">
        <Image
          src="/home.png"
          alt="hero image"
          width={1000}
          height={1000}
          className="w-full h-[100svh] object-cover opacity-90"
          priority
        />
        <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] sm:w-[90%] md:w-4/5 px-4 sm:px-6 md:px-8">
          <p className="text-center text-[14px] sm:text-[16px] leading-tight sm:leading-5 mb-4 sm:mb-6 md:mb-8">
            90% of SMBs Waste Their Ad Spend. Are You One of Them?
          </p>
          <h1 className="text-center font-unbounded text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight sm:leading-snug md:leading-14 mb-4 sm:mb-6">
            Transforming Small & Medium Businesses{" "}
            <span className="hidden sm:inline">
              <br />
            </span>{" "}
            into Enterprise Brands!
          </h1>
          <p className="text-center text-lg sm:text-xl md:text-2xl leading-snug sm:leading-8 mb-4 sm:mb-6">
            We help small & medium businesses multiply revenue 🚀 while
            eliminating wasted ad spend 💸 through AI-powered growth strategies.
          </p>
          <p className="text-center text-[16px] sm:text-[18px] leading-tight sm:leading-6">
            We might be small, but we help you scale BIG!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 w-full">
            <FeatureBox icon={<FaYoutube />} text="Smarter Ads" />
            <FeatureBox icon={<ImpactIcon />} text="Bigger Impact" />
            <FeatureBox icon={<BsGraphUp />} text="Faster Growth" />
          </div>
        </div>
      </div>
      {/* Chess */}
      <div className=" w-full sm:min-h-screen min-h-full bg-[#011542]/20 relative">
        <div className="w-full h-full relative">
          <Image
            src="/chess.png"
            alt="hero image"
            width={1000}
            height={1000}
            className="w-full sm:h-screen h-full object-cover"
          />

          {/* Overlay content */}
        </div>
        <div className="sm:absolute sm:px-0 px-5  sm:left-80 left-5 sm:top-1/2 transform sm:-translate-y-1/2 flex items-center justify-center">
          <div className="w-full max-w-7xl px-4 md:px-8 lg:px-0">
            <div className="md:w-3/4 lg:w-2/3 xl:w-2/3 mx-auto md:-mx-16">
              <p className=" sm:text-lg text-[12px] font-unbounded font-medium leading-relaxed mb-4 md:mb-8">
                If You Don&apos;t Know What Your Competitors Are Doing,
                You&apos;ve Already Lost Stay ahead with Our Competitive
                Intelligence that delivers real results
              </p>
              <p className="text-base sm:text-lg md:text-xl font-unbounded font-medium leading-relaxed mb-6 md:mb-8">
                It&apos;s not spying - It&apos;s smart business
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center justify-start">
                <div
                  style={{ border: "1px solid rgba(255, 255, 255, 0.20)" }}
                  className="px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full bg-transparent text-sm sm:text-base md:text-lg lg:text-xl font-unbounded font-medium"
                >
                  Outperform
                </div>
                <div
                  style={{ border: "1px solid rgba(255, 255, 255, 0.20)" }}
                  className="px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full bg-transparent text-sm sm:text-base md:text-lg lg:text-xl font-unbounded font-medium"
                >
                  Outsmart
                </div>
                <div
                  style={{ border: "1px solid rgba(255, 255, 255, 0.20)" }}
                  className="px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full bg-transparent text-sm sm:text-base md:text-lg lg:text-xl font-unbounded font-medium"
                >
                  Outshine
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd */}
      <div className="bg-[#011542]/20 w-full flex flex-col items-center justify-start py-16 sm:px-5 px-5">
        <div className="mb-8 bg-transparent text-white px-6 py-1 rounded-full border border-white font-unbounded font-medium leading-8 text-[14px]">
          The Struggle Why SMBs Fail
        </div>
        <h2 className="text-center text-[28px] font-unbounded font-medium leading-8 mb-6">
          The struggle is real for small and medium-sized <br /> e-commerce
          businesses
        </h2>
        <p className="text-lg sm:mb-20 mb-6 text-center">
          If you&apos;re still relying on traditional agency models, you&apos;re
          losing money while your competitors evolve
        </p>

        <FeatureCards />

        <div className=" sm:mt-16 mt-6">
          <AnimatedButton
            className="rounded-full px-4 py-4 text-[#ffffff] hover:text-black  font-medium"
            baseColor="bg-[#0B50EA]"
            hoverColor="bg-white"
            // size={"lg"}
            endIcon={<ArrowRight className="ml-2 h-5 w-5" />}
          >
            There&apos;s a Smarter Way
          </AnimatedButton>
        </div>
      </div>
      {/* 4th */}
      <div className="relative w-full min-h-screen sm:h-[120vh] h-[120vh] bg-[#011542]/20 overflow-hidden">
        {/* Semi-circle container */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[250vw] sm:w-[120vw] aspect-[2/1]">
          {/* Blue border with drop shadow */}
          <div className="absolute inset-0 rounded-t-full border-t-4 border-l-4 border-r-4 border-[rgb(1,38,123)] shadow-[0_0_150px_15px_rgba(1,38,123,0.6)]">
            {/* Content container */}
            <div className="absolute top-[25%] sm:top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[90%] sm:max-w-6xl px-4 sm:px-6 text-center flex flex-col items-center justify-start">
              <div className="w-fit mb-4 sm:mb-8 bg-transparent text-white px-3 sm:px-6 py-1 rounded-full border border-white font-unbounded font-medium text-[8px] sm:text-[14px] leading-none">
                The Solution How We Fix This – Your AI-Powered System
              </div>
              <h2 className="text-white text-center text-[12px] sm:text-[28px] font-unbounded font-medium leading-tight sm:leading-8 mb-4 sm:mb-6">
                We helped businesses drive measurable results
              </h2>
              <p className="text-white text-[10px] sm:text-lg px-2 sm:px-0 mb-10 sm:mb-20 leading-normal">
                With AI-powered predictive analytics and intelligent budget
                allocation, <br /> we ensure your marketing spend is optimized
                for maximum ROI.
              </p>
              <div className="w-full px-2 sm:px-0 max-w-[45%] sm:max-w-full">
                <Image
                  src="/circle.png"
                  alt="circle"
                  width={1000}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5th */}
      <div className=" sm:pt-40 pt-5 bg-[#011542]/20  w-full flex flex-col items-center justify-start">
        <div className="mb-8 bg-transparent text-white px-6 py-1 rounded-full border border-white font-unbounded font-medium leading-8 text-[14px]">
          Why is Auralini?
        </div>
        <h2 className="text-center text-[28px] font-unbounded font-medium leading-8 mb-6">
          Why is Auralini the Growth Partner for Small & Mid <br /> eCommerce
          Brands
        </h2>
        <Image
          src={"/penta.png"}
          alt="circle"
          width={1000}
          height={800}
          className="sm:w-6/7 w-full h-auto object-contain sm:pr-12 pr-0"
        />
      </div>
      {/* 6th */}
      <div className=" bg-[#011542]/20  py-20 w-full flex flex-col items-center justify-start">
        <div className="mb-8 bg-transparent text-white px-6 py-1 rounded-full border border-white font-unbounded font-medium leading-8 text-[14px]">
          Services
        </div>
        <h2 className="text-center text-[28px] font-unbounded font-medium leading-8 mb-6 sm:mb-20">
          Our Services
        </h2>
        <MarketingCards />
      </div>
      {/* 7th */}
      <TestimonialsContinuousScroll />
      {/* 8th */}
      <StatsCounter />
      {/* 9th */}
      <div className="bg-[#011542]/20 sm:px-5 px-2  py-20 w-full flex flex-col items-center justify-start">
        <h2 className="text-center text-[40px] font-unbounded font-medium  mb-6">
          The Future of Marketing is Here Let’s Scale <br /> Your Brand Together
        </h2>
        <p className="text-lg mb-20 text-center">
          We’re so confident in our AI-driven strategy that we guarantee 2X
          revenue—or we <br /> don’t get paid.
        </p>
        <div className="flex sm:flex-row flex-col-reverse items-center justify-between gap-16">
          <div className=" sm:h-96 h-full sm:w-[580px] w-full rounded-2xl flex flex-col items-start justify-between sm:gap-0 gap-5 py-12  bg-gradient-to-r from-white/10 via-transparent to-transparent border border-white/5 backdrop-blur-md">
            <p className=" px-5 text-lg font-unbounded font-medium">
              Trust & Credibility Signals:
            </p>
            <div className="flex items-center gap-5 justify-start">
              <div className="border-l-4 border-white h-10"></div>
              <p className="text-2xl ">
                <span className="font-bold font-unbounded text-[28px]">
                  500+
                </span>{" "}
                Successful SMB Growth Cases
              </p>
            </div>
            <div className="flex items-center gap-5 justify-start">
              <div className="border-l-4 border-white h-10"></div>
              <p className="text-2xl">
                <span className="font-bold font-unbounded text-[28px]">
                  $10M+
                </span>{" "}
                Revenue Generated for Clients
              </p>
            </div>
            <div className="flex items-center gap-5 justify-start">
              <div className="border-l-4 border-white h-10"></div>
              <p className="text-2xl">
                <span className="font-bold font-unbounded text-[28px]">
                  97%
                </span>{" "}
                AI-Powered Strategies with Accuracy
              </p>
            </div>
          </div>
          <div className="p-5 flex items-center justify-center sm:h-96 h-full sm:w-[580px] w-full rounded-2xl   bg-gradient-to-br from-white/10 via-transparent to-white/10  border border-white/5 backdrop-blur-md ">
            <Image
              src={"/vr.png"}
              alt="circle"
              width={1000}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      {/* 10th */}
      <ContactForm />
      {/* footer */}
      <Footer />
    </div>
  );
}

function FeatureBox({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      className="flex items-center justify-center gap-3 px-6 py-3 rounded-full w-full sm:w-auto
                 border border-white/20 bg-white/15 shadow-[0px_0px_156px_8px_rgba(11,80,234,0.28)]"
    >
      <span className="flex items-center justify-center">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
