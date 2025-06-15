"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  Search,
  ShoppingBag,
  Target,
  BarChart,
  ThumbsUp,
  FileText,
  Mail,
  Send,
} from "lucide-react";

// Marketing services data
const marketingServices = [
  {
    id: 1,
    title: "Paid Search",
    description:
      "Search Isn't About Showing Up — It's About Dominating High-Intent Moments.",
    icon: Search,
  },
  {
    id: 2,
    title: "Shopping",
    description:
      "Shopping Ads Shouldn’t Just Appear — Outsell With Smarter Feeds.",
    icon: ShoppingBag,
  },
  {
    id: 3,
    title: "Paid Social",
    description: "Interruption-Based Ads Only Work When They Stop the Scroll.",
    icon: Target,
  },
  {
    id: 4,
    title: "SEO",
    description: "If You’re Not Ranking, You’re Invisible.",
    icon: BarChart,
  },
  {
    id: 5,
    title: "SMO",
    description: "Algorithm-Proof Your Social Reach",
    icon: ThumbsUp,
  },
  {
    id: 6,
    title: "Marketplace Advertising",
    description: "Winning the Buy Box Isn’t Luck. It’s Strategy",
    icon: FileText,
  },
  {
    id: 7,
    title: "Email Marketing",
    description:
      "Increase customer lifetime value (LTV) through high-converting automation, nurturing, and retention flows.",
    icon: Send,
  },
  {
    id: 8,
    title: "Email",
    description:
      "Still Sending Newsletters? You're Missing Out on 80% of Email Revenue.",
    icon: Mail,
  },
];

export default function MarketingCards() {
  return (
    <div className="min-h-screen sm:max-w-2/3 max-w-full p-6 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketingServices.map((service) => (
          <MarketingCard
            key={service.id}
            title={service.title}
            description={service.description}
            Icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}

interface MarketingCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

function MarketingCard({ title, description, Icon }: MarketingCardProps) {
  return (
    <div className="bg-blue-300/5">
      <motion.div
        className="relative overflow-hidden rounded-2xl   border border-white/20 backdrop-blur-md p-6 h-[220px] flex flex-col"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
          boxShadow: "0 4px 24px 0 rgba(0, 0, 0, 0.3)",
        }}
        initial="initial"
        whileHover="hover"
      >
        {/* Expanding blue circle background */}
        <motion.div
          className="absolute rounded-full bg-blue-600"
          initial={{ width: 0, height: 0, x: 40, y: 40, opacity: 0 }}
          variants={{
            hover: {
              width: 1200,
              height: 1200,
              x: -450,
              y: -450,
              opacity: 1,
              transition: { duration: 0.5 },
            },
          }}
        />

        {/* Icon container */}
        <div className="relative z-10 mb-4">
          <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center">
            <Icon className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10"
          variants={{
            hover: { color: "white" },
          }}
        >
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
