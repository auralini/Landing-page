"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import RotatingText from "./rotating-text";
import { AnimatedButton } from "./animated-button";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect with improved performance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close mobile menu when pathname changes (user navigates)
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center bg-transparent px-4 py-3 font-unbounded">
      <header
        className={`transition-all duration-300 bg-[#070e1c]/60 backdrop-blur-md rounded-full px-2 py-2 w-full max-w-6xl flex items-center justify-between ${
          scrolled
            ? "shadow-lg shadow-[#0b50ea]/10 translate-y-0"
            : "translate-y-0"
        }`}
        style={{
          position: "relative",
          boxShadow:
            "0 4px 30px rgba(0, 0, 0, 0.1), inset 0 0 20px rgba(11, 80, 234, 0.05)",
        }}
      >
        {/* Border overlay */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            borderWidth: "1.5px",
            borderStyle: "solid",
            borderColor: "transparent",
            borderLeftColor: "rgba(11, 80, 234, 0.4)",
            borderRightColor: "rgba(11, 80, 234, 0.4)",
            borderBottomColor: "rgba(11, 80, 234, 0.4)",
          }}
        ></div>

        {/* Logo */}
        <div className="flex items-center px-3">
          <Image src="/logo.png" alt="Logo" width={130} height={40} />
        </div>

        <div className="flex items-center gap-5">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <RotatingText
              text="HOME"
              href="/"
              primaryColor="text-[#ffffff]"
              secondaryColor="text-[#0b50ea]"
              className="text-sm font-medium"
              fontSize="text-sm"
            />
            <RotatingText
              text="SERVICES"
              href="/services"
              primaryColor="text-[#ffffff]"
              secondaryColor="text-[#0b50ea]"
              className="text-sm font-medium"
              fontSize="text-sm"
            />
            <RotatingText
              text="ABOUT US"
              href="/about"
              primaryColor="text-[#ffffff]"
              secondaryColor="text-[#0b50ea]"
              className="text-sm font-medium"
              fontSize="text-sm"
            />
            <RotatingText
              text="PRICING"
              href="/pricing"
              primaryColor="text-[#ffffff]"
              secondaryColor="text-[#0b50ea]"
              className="text-sm font-medium"
              fontSize="text-sm"
            />
          </nav>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <AnimatedButton
                className="rounded-full px-4 py-4 text-[#ffffff] hover:text-black  font-medium"
                baseColor="bg-[#0B50EA]"
                hoverColor="bg-white"
                // size={"lg"}
                endIcon={<ArrowRight className="ml-2 h-5 w-5" />}
              >
                Free Growth Call
              </AnimatedButton>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#0b50ea]/10 text-white hover:bg-[#0b50ea]/20 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[75%] max-w-sm bg-[#070e1c]/95 backdrop-blur-md z-50 border-l border-[#0b50ea]/30 shadow-xl"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-[#0b50ea]/20">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-400 to-indigo-600"></div>
                  <span className="text-white text-xl font-medium">
                    auralini<sup className="text-xs">™</sup>
                  </span>
                </div>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0b50ea]/10 text-white hover:bg-[#0b50ea]/20 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <nav className="flex-1 overflow-y-auto py-6 px-6">
                <ul className="space-y-6">
                  <li>
                    <Link
                      href="/"
                      className={`block text-xl font-medium ${
                        pathname === "/" ? "text-[#0b50ea]" : "text-white"
                      } hover:text-[#0b50ea] transition-colors`}
                    >
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className={`block text-xl font-medium ${
                        pathname === "/services"
                          ? "text-[#0b50ea]"
                          : "text-white"
                      } hover:text-[#0b50ea] transition-colors`}
                    >
                      SERVICES
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={`block text-xl font-medium ${
                        pathname === "/about" ? "text-[#0b50ea]" : "text-white"
                      } hover:text-[#0b50ea] transition-colors`}
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      className={`block text-xl font-medium ${
                        pathname === "/pricing"
                          ? "text-[#0b50ea]"
                          : "text-white"
                      } hover:text-[#0b50ea] transition-colors`}
                    >
                      PRICING
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile CTA Button */}
              <div className="p-6 border-t border-[#0b50ea]/20">
                <AnimatedButton
                  className="rounded-full w-full py-3 text-[#ffffff] font-medium"
                  baseColor="bg-[#0b50ea]"
                  endIcon={<ArrowRight className="ml-2 h-5 w-5" />}
                >
                  Free Growth Call
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
