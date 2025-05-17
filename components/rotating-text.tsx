"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface RotatingTextProps {
  text: string;
  href: string;
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
  fontSize?: string;
}

export default function RotatingText({
  text,
  href,
  primaryColor = "text-black",
  secondaryColor = "text-blue-500",
  className = "",
  fontSize = "text-4xl sm:text-6xl md:text-7xl lg:text-8xl",
}: RotatingTextProps) {
  // Animation constants
  const DURATION = 0.25;
  const STAGGER = 0.025;

  // Get current pathname to check if this link is active
  const pathname = usePathname();
  const isActive = pathname === href;

  // If active, use secondaryColor as primaryColor
  const textColor = isActive ? secondaryColor : primaryColor;

  return (
    <Link href={href} className={`block ${className}`}>
      <motion.div
        initial="initial"
        whileHover={isActive ? undefined : "hovered"}
        className={`relative overflow-hidden whitespace-nowrap font-normal font-unbounded ${fontSize}`}
        style={{ lineHeight: 0.9 }}
      >
        {/* Top text layer (visible initially, moves up on hover) */}
        <div>
          {text.split("").map((letter, i) => (
            <motion.span
              key={`top-${i}`}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className={`inline-block ${
                isActive ? secondaryColor : textColor
              }`}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Bottom text layer (hidden initially, moves up on hover) */}
        <div className="absolute inset-0">
          {text.split("").map((letter, i) => (
            <motion.span
              key={`bottom-${i}`}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className={`inline-block ${secondaryColor}`}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
