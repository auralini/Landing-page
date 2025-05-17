"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  FaChartLine,
  FaSearch,
  FaUsers,
  FaDatabase,
  FaMobileAlt,
  FaUserClock,
} from "react-icons/fa";

export default function FeatureCards() {
  const features = [
    {
      icon: FaChartLine,
      title: "Budget Burnout",
      description: "Poor Budget Management & Allocation",
    },
    {
      icon: FaSearch,
      title: "Optimization Overload",
      description: "Weak Product & Campaign Optimization",
    },
    {
      icon: FaUsers,
      title: "Price Wars & Market Gaps",
      description: "Competitive Strategy Failures",
    },
    {
      icon: FaDatabase,
      title: "Data Blindness",
      description: "Lack of Insights & Poor Targeting",
    },
    {
      icon: FaMobileAlt,
      title: "Conversion Killer",
      description: "Poor User Experience & Checkout Issues",
    },
    {
      icon: FaUserClock,
      title: "Retention Resistance",
      description: "Failing to Retain Customers",
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
        delayChildren: 0.3, // Delay before starting the first child animation
      },
    },
  };

  return (
    <div className=" p-6 md:p-0">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </motion.div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  // Card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl border border-white/20 p-6"
      variants={cardVariants}
      whileHover="hover"
    >
      {/* Initial subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black/90" />

      {/* Hover gradient animation that appears from bottom to top center */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-blue-700/5  to-transparent opacity-0"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Blue glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-blue-500/5 opacity-0 blur-xl"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Card content */}
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-800">
          <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}
