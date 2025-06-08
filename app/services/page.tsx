"use client";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ImpactIcon from "@/components/ImpactIcon";
import StarIcon from "@/components/StarIcon";
import TwinkleIcon from "@/components/TwinkleIcon";
import { RxCrossCircled } from "react-icons/rx";
import { FaRegCircleCheck } from "react-icons/fa6";

import Image from "next/image";
import {
  Search,
  ShoppingBag,
  Share2,
  BarChart2,
  LineChart,
  Users,
  Store,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { BsGraphUp } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";

export default function page() {
  return (
    <div className="w-full flex flex-col items-center bg-black relative ">
      <div className="sticky top-5 left-0 right-0 z-50 w-full">
        <Header />
      </div>
      {/* 1st */}
      <div className=" w-full sm:min-h-screen min-h-full relative bg-gradient-to-b from-[#011542]/40 via-[#011542]/40 to-[#011542]/20 sm:pt-24 pt-7">
        <div className="relative flex flex-col items-center justify-center  w-full sm:w-full md:w-full px-4 sm:px-6 md:px-8">
          <p className="bg-gradient-to-r from-[#0B50EA]/30 via-[#011542]/20 to-[#011542]/20 p-2 px-4 border-l-2 border-white/20 backdrop-blur-3xl text-center text-[14px] sm:text-[16px] leading-tight sm:leading-5 mb-4 sm:mb-6 md:mb-8 rounded-full">
            Service{" "}
            <span className="text-[#0B50EA] font-playfair_display italic">
              (How We Fix SMB Growth Challenges with AI)
            </span>
          </p>
          <h1 className="text-center font-unbounded text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight sm:leading-snug md:leading-8 mb-4 sm:mb-6">
            <span className="text-[#0B50EA] flex items-center sm:gap-2 gap-0">
              AI{" "}
              <span>
                <StarIcon color="#FFF" />
              </span>{" "}
              Human Expertise
            </span>
            <br />
            Maximum Growth
          </h1>
          <p className="text-center max-w-3xl text-lg sm:text-xl md:text-2xl leading-snug sm:leading-8 mb-4 sm:mb-6 text-white/70">
            See how we transform outdated marketing methods into intelligent,
            data-driven strategies that deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 w-full">
            <FeatureBox icon={<FaYoutube />} text="Smart Budgeting" />
            <FeatureBox icon={<ImpactIcon />} text="Predictive Targeting" />
            <FeatureBox icon={<BsGraphUp />} text="Continuous Optimization" />
          </div>
          <div className="absolute bottom-0 h-16 w-1/2 bg-gradient-to-b from-transparent via-[#0B50EA] to-transparent blur-3xl"></div>
        </div>
        <div className=" absolute top-10 right-1/4 transform -translate-x-1/2">
          <TwinkleIcon />
        </div>
      </div>
      {/* 2nd */}
      <div className="relative w-full sm:max-w-2/3 max-w-full sm:px-0 px-4 flex flex-col items-center justify-start bg-[#011542]/20 sm:pt-0 pt-24">
        <h2 className="text-5xl font-unbounded font-bold">Services</h2>
        <p className="text-white/70 text-center text-lg sm:text-xl leading-snug sm:leading-8 mb-4 sm:mb-6">
          Our AI-powered solutions are designed to eliminate guesswork and
          deliver consistent results. From smarter budgeting to predictive
          targeting, we help you scale efficiently—while you focus on what
          matters most.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        {/* <video
          src="/services.mov" // Update with your video path
          autoPlay
          loop
          muted
          className="absolute bottom-0  w-full h-full object-cover opacity-5"
        /> */}
      </div>
      {/* 3rd */}
      <div className="w-full py-16 sm:px-20 px-5 flex flex-col items-center justify-start bg-[#011542]/20">
        <p className="text-2xl font-unbounded font-bold flex items-center gap-5 mb-8">
          Before <span className="text-4xl">V/S</span> After
        </p>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-5 w-full">
          <div className="w-full max-w-xl rounded-xl gap-5 flex flex-col items-start justify-start backdrop-blur-xl bg-gradient-to-br from-[#0B50EA]/20 via-[#011542]/10  to-[#011542]/10 hover:to-[#0B50EA]/20 transition-colors delay-100 p-5">
            <Image
              src={"/before.png"}
              alt="before image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
            />
            <p className="font-unbounded text-xl font-medium text-white">
              Traditional Marketing
            </p>
            <div className="flex text-lg flex-col gap-3 items-start text-white/70">
              <div className="flex items-center gap-2 ">
                <RxCrossCircled />
                <p>Manual, time-consuming planning</p>
              </div>
              <div className="flex items-center gap-2 ">
                <RxCrossCircled />
                <p>Generic audience targeting</p>
              </div>
              <div className="flex items-center gap-2 ">
                <RxCrossCircled />
                <p>Reactive decisions</p>
              </div>
              <div className="flex items-center gap-2 ">
                <RxCrossCircled />
                <p>High spend, low returns</p>
              </div>
              <div className="flex items-center gap-2 ">
                <RxCrossCircled />
                <p>Limited scalability</p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-xl rounded-xl gap-5 flex flex-col items-start justify-start backdrop-blur-xl bg-gradient-to-br from-[#0B50EA]/20 via-[#011542]/10 to-[#011542]/10 hover:to-[#0B50EA]/20 transition-colors delay-100 p-5">
            <Image
              src={"/after.png"}
              alt="before image"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain"
            />
            <p className="font-unbounded text-xl font-medium text-white">
              AI-Powered Growth
            </p>
            <div className="flex flex-col text-lg gap-3 items-start text-white">
              <div className="flex items-center gap-2 ">
                <FaRegCircleCheck />
                <p>Automated, real-time strategy</p>
              </div>
              <div className="flex items-center gap-2 ">
                <FaRegCircleCheck />
                <p>Hyper - personalised campaigns</p>
              </div>
              <div className="flex items-center gap-2 ">
                <FaRegCircleCheck />
                <p>Predictive, data-driven insights</p>
              </div>
              <div className="flex items-center gap-2 ">
                <FaRegCircleCheck />
                <p>Optimised budget, high ROI</p>
              </div>
              <div className="flex items-center gap-2 ">
                <FaRegCircleCheck />
                <p>Scalable growth with human + AI power</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
      {/* footer */}
      <Footer />
    </div>
  );
}

function FeatureBox({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      className="flex items-center justify-center gap-3 sm:px-6 sm:py-3  py-1 px-3 rounded-full w-full sm:w-auto
                 border border-white/20 bg-white/15 shadow-[0px_0px_156px_8px_rgba(11,80,234,0.28)]"
    >
      <span className="flex items-center justify-center">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative max-w-sm w-full overflow-hidden rounded-lg bg-[#01031A] p-6 transition-all duration-300">
      {/* Card hover effect increases backgroundimage opacity */}

      <div className="flex flex-col items-center text-center gap-5">
        <div className="relative bg-black w-full py-12 rounded-xl flex items-center justify-center overflow-hidden">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-700 p-3 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <Image
            src="/lines-t.png"
            alt="hero image"
            width={100}
            height={100}
            className="w-full h-auto object-contain absolute top-0 right-0"
          />
        </div>

        <h3 className="mb-2 text-xl font-bold text-white w-2/3">{title}</h3>
        <p className="text-sm text-white w-2/3">{description}</p>
      </div>
    </div>
  );
}

interface MarketingService {
  icon: LucideIcon;
  title: string;
  description: string;
}

const marketingServices: MarketingService[] = [
  {
    icon: Search,
    title: "Paid Search",
    description:
      "Capture high-intent buyers when they're ready to purchase with precision-targeted ads.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping Ads",
    description:
      "Dominate Google Shopping and Performance Max with optimized feeds and smart bidding for maximum ROAS.",
  },
  {
    icon: Share2,
    title: "Paid Social",
    description:
      "Drive awareness, engagement, and conversions across Meta, TikTok, and LinkedIn with proven scaling frameworks.",
  },
  {
    icon: BarChart2,
    title: "Programmatic Advertising",
    description:
      "Expand your reach with AI-driven display and retargeting campaigns that convert browsers into buyers.",
  },
  {
    icon: LineChart,
    title: "SEO (Search Engine Optimization)",
    description:
      "Rank higher, get found faster, and build organic traffic that scales your brand sustainably.",
  },
  {
    icon: Users,
    title: "SMO (Social Media Optimization)",
    description:
      "Build brand loyalty, boost community engagement, and turn followers into customers across platforms.",
  },
  {
    icon: Store,
    title: "Marketplace Advertising (Amazon, Walmart, eBay)",
    description:
      "Optimize your marketplace presence to win the Buy Box and outperform competitors where it matters most.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Increase customer lifetime value (LTV) through high-converting automation, nurturing, and retention flows.",
  },
];
