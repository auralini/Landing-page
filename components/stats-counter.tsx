"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, useSpring } from "framer-motion";

type StatItemProps = {
  value: string;
  label: string;
  isLast?: boolean;
};

function StatItem({ value, label, isLast = false }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Extract the numeric part and any suffix (like + or %)
  const numericMatch = value.match(/^(\d+)(.*)$/);
  const numericValue = numericMatch ? Number.parseInt(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : "";

  return (
    <div ref={ref} className="flex flex-col items-center  relative">
      <motion.div
        className="text-white text-6xl font-unbounded font-medium mb-2"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <Counter from={0} to={numericValue} duration={2} />
        {suffix}
      </motion.div>
      <motion.p
        className="text-white/80 text-sm"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
        }}
      >
        {label}
      </motion.p>
      {!isLast && (
        <div className="absolute sm:block hidden -right-24 top-1/2 h-12 w-px bg-white/20 transform -translate-y-1/2" />
      )}
    </div>
  );
}

function Counter({
  from,
  to,
  duration = 2,
}: {
  from: number;
  to: number;
  duration?: number;
}) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const count = useSpring(from, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    count.set(to);
  }, [count, to]);

  useEffect(() => {
    if (!nodeRef.current) return;

    const unsubscribe = count.onChange((v) => {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.floor(v).toString();
      }
    });

    return unsubscribe;
  }, [count]);

  return <span ref={nodeRef}>{from}</span>;
}

export default function StatsCounter() {
  return (
    <div className="w-full bg-[#011542]/20  pb-12 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center sm:justify-between justify-center sm:gap-0 gap-5">
          <StatItem value="7M+" label="Ad Spend Optimized" />
          <StatItem value="50%" label="Avg. Cost Reduction for SMBs" />
          <StatItem value="3X" label="ROAS Boost for Ecom Brands" />
          <StatItem value="200+" label="Businesses Transformed" isLast={true} />
        </div>
      </div>
    </div>
  );
}
