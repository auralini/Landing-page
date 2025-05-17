"use client";

import { useEffect, useRef, useState } from "react";

// Testimonial data matching the image exactly
const testimonialData = [
  {
    quote:
      "We struggled with wasted ad spend for years. The Adsvida team helped us fix our campaign structure, and within 6 months, we cut costs by 50% and doubled our revenue",
    author: "CEO, Brand X",
  },
  {
    quote:
      "Our Google Ads were burning money with little return. Adsvida optimized our campaigns, and in just 90 days, our ROAS increased by 300%",
    author: "Founder, Ecom Y",
  },
  {
    quote:
      "Before working with Adsvida, our product listings barely got visibility. Now, our bestsellers consistently rank at the top, and our sales have skyrocketed.",
    author: "CMO, Retail Z",
  },
  {
    quote:
      "Adsvida transformed our digital marketing strategy. Their data-driven approach helped us identify untapped opportunities that increased our conversion rate by 75%.",
    author: "Marketing Director, SaaS Company",
  },
  {
    quote:
      "The ROI we've seen since partnering with Adsvida has been incredible. They've helped us scale our ad spend by 3x while maintaining profitability.",
    author: "VP of Growth, Tech Startup",
  },
];

// Create a duplicated array to ensure continuous scrolling
const testimonials = [...testimonialData, ...testimonialData];

export default function TestimonialsContinuousScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [currentY, setCurrentY] = useState(0);

  // Set up continuous scrolling animation
  useEffect(() => {
    if (isHovering) return; // Don't animate when hovering

    let animationId: number;
    const startTime = Date.now();
    const duration = 25000; // 25 seconds for one complete cycle
    const totalDistance = testimonialData.length * 200; // Total scroll distance

    const animate = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;

      // Calculate new position
      const progress = (elapsedTime % duration) / duration;
      const newY = -(progress * totalDistance);

      // Update position
      setCurrentY(newY);

      // Continue animation
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovering]);

  // Handle mouse enter/leave for container
  const handleMouseEnter = () => {
    // setIsHovering(true);
    setIsHovering(false);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#011542]/20 text-white overflow-hidden sm:py-10 py-6">
      {/* Heading */}
      <div className="relative w-full z-10 mx-auto mb-2">
        <h1 className="sm:text-9xl text-4xl font-medium font-unbounded tracking-wider text-center">
          TESTIMONIALS
        </h1>
      </div>

      {/* <div className="absolute top-0 left-0 right-0 h-40 z-0 bg-gradient-to-b from-blue-500/10 via-[#011542]/20 to-transparent pointer-events-none"></div> */}
      {/* Testimonials container with gradient overlays */}
      <div
        className="relative w-full max-w-4xl mx-auto h-[700px] overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Top gradient overlay (fade to black at top) */}
        <div className="absolute top-0 left-0 right-0 h-40 z-10 bg-gradient-to-b from-[#050510] via-[#050510] to-transparent pointer-events-none"></div>

        {/* Testimonials */}
        <div ref={containerRef} className="relative h-full">
          <div
            className="absolute w-full pt-5"
            style={{ transform: `translateY(${currentY}px)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full px-4 py-5"
                style={{
                  position: "absolute",
                  top: `${index * 250}px`,
                  //   height: "160px",
                }}
              >
                <div className="bg-black rounded-xl p-8 border border-white/50 h-full flex flex-col">
                  <div className="flex-grow">
                    <p className="sm:text-lg text-sm font-unbounded font-medium leading-relaxed mb-4">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="border-t border-[#3B3B3B] pt-4 mt-auto">
                    <p className="text-sm text-white font-black font-sans">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient overlay (fade from black at bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-[#050510] via-[#050510] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
