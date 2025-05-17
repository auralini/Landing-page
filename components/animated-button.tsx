"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "@/components/ui/button";

// Create our own ButtonProps type based on the actual Button implementation
type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

interface AnimatedButtonProps extends Omit<ButtonProps, "asChild"> {
  children: React.ReactNode;
  className?: string;
  hoverColor?: string;
  baseColor?: string;
  rippleColor?: string;
  isLoading?: boolean;
  loadingText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disableAnimation?: boolean;
  disableRipple?: boolean;
  disableHover?: boolean;
}

export function AnimatedButton({
  children,
  className,
  hoverColor = "bg-white",
  baseColor = "bg-[##0B50EA]",
  rippleColor = "bg-white",
  isLoading = false,
  loadingText,
  startIcon,
  endIcon,
  disabled,
  disableAnimation = false,
  disableRipple = false,
  disableHover = false,
  variant = "default",
  size = "default",
  ...props
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  // For ripple effect
  const [ripples, setRipples] = React.useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const nextRippleId = React.useRef(0);

  // Determine if we should use baseColor or rely on shadcn's variant
  const shouldUseBaseColor = baseColor !== undefined;
  const buttonBaseClass = shouldUseBaseColor ? baseColor : "bg-[#0b50ea]";

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current && !disabled && !isLoading && !disableHover) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsHovered(true);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current && !disabled && !isLoading && !disableRipple) {
      const rect = buttonRef.current.getBoundingClientRect();
      const rippleX = e.clientX - rect.left;
      const rippleY = e.clientY - rect.top;

      const newRipple = {
        id: nextRippleId.current,
        x: rippleX,
        y: rippleY,
      };

      nextRippleId.current += 1;
      setRipples((prevRipples) => [...prevRipples, newRipple]);

      // Remove the ripple after animation completes
      setTimeout(() => {
        setRipples((prevRipples) =>
          prevRipples.filter((ripple) => ripple.id !== newRipple.id)
        );
      }, 1000); // Slightly longer than animation duration to ensure it completes
    }
  };

  // Calculate the maximum dimension needed for the circle to cover the entire button
  const getMaxRadius = () => {
    if (!buttonRef.current) return 0;

    const rect = buttonRef.current.getBoundingClientRect();
    const buttonWidth = rect.width;
    const buttonHeight = rect.height;

    // Calculate distances to all four corners from mouse position
    const distToTopLeft = Math.sqrt(
      Math.pow(mousePosition.x, 2) + Math.pow(mousePosition.y, 2)
    );
    const distToTopRight = Math.sqrt(
      Math.pow(buttonWidth - mousePosition.x, 2) + Math.pow(mousePosition.y, 2)
    );
    const distToBottomLeft = Math.sqrt(
      Math.pow(mousePosition.x, 2) + Math.pow(buttonHeight - mousePosition.y, 2)
    );
    const distToBottomRight = Math.sqrt(
      Math.pow(buttonWidth - mousePosition.x, 2) +
        Math.pow(buttonHeight - mousePosition.y, 2)
    );

    // Return the maximum distance to ensure circle covers the entire button
    return Math.max(
      distToTopLeft,
      distToTopRight,
      distToBottomLeft,
      distToBottomRight
    );
  };

  // Calculate max radius for ripple (same logic as hover)
  const getMaxRippleRadius = (x: number, y: number) => {
    if (!buttonRef.current) return 0;

    const rect = buttonRef.current.getBoundingClientRect();
    const buttonWidth = rect.width;
    const buttonHeight = rect.height;

    // Calculate distances to all four corners from click position
    const distToTopLeft = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    const distToTopRight = Math.sqrt(
      Math.pow(buttonWidth - x, 2) + Math.pow(y, 2)
    );
    const distToBottomLeft = Math.sqrt(
      Math.pow(x, 2) + Math.pow(buttonHeight - y, 2)
    );
    const distToBottomRight = Math.sqrt(
      Math.pow(buttonWidth - x, 2) + Math.pow(buttonHeight - y, 2)
    );

    // Return the maximum distance to ensure circle covers the entire button
    return Math.max(
      distToTopLeft,
      distToTopRight,
      distToBottomLeft,
      distToBottomRight
    );
  };

  // Render button content based on loading state
  const renderButtonContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          {loadingText || children}
        </div>
      );
    }

    return (
      <>
        {startIcon && <span className="inline-flex">{startIcon}</span>}
        <div className="text-sm">{children}</div>
        {endIcon && <span className="inline-flex">{endIcon}</span>}
      </>
    );
  };

  return (
    <Button
      ref={buttonRef}
      className={cn("relative overflow-hidden p-4 h-14", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      disabled={disabled || isLoading}
      variant={variant}
      size={size}
      {...props}
    >
      {/* Base background color */}
      <div className={cn("absolute inset-0 z-0", buttonBaseClass)} />

      {/* Hover animation */}
      {!disableAnimation && !disableHover && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className={cn("absolute inset-0 z-10", hoverColor)}
              initial={{
                clipPath: `circle(0px at ${mousePosition.x}px ${mousePosition.y}px)`,
              }}
              animate={{
                clipPath: `circle(${getMaxRadius() * 1.5}px at ${
                  mousePosition.x
                }px ${mousePosition.y}px)`,
                transition: { duration: 0.9, ease: "easeOut" },
              }}
              exit={{
                clipPath: `circle(0px at ${mousePosition.x}px ${mousePosition.y}px)`,
                transition: { duration: 0.3, ease: "easeIn" },
              }}
            />
          )}
        </AnimatePresence>
      )}

      {/* Ripple animations */}
      {!disableAnimation && !disableRipple && (
        <>
          {ripples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className={cn("absolute z-20 opacity-30", rippleColor)}
              initial={{
                clipPath: `circle(0px at ${ripple.x}px ${ripple.y}px)`,
                opacity: 0.7,
              }}
              animate={{
                clipPath: `circle(${
                  getMaxRippleRadius(ripple.x, ripple.y) * 1.5
                }px at ${ripple.x}px ${ripple.y}px)`,
                opacity: 0,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          ))}
        </>
      )}

      {/* Content */}
      <span className="relative font-unbounded text-sm z-30 flex items-center justify-center">
        {renderButtonContent()}
      </span>
    </Button>
  );
}
