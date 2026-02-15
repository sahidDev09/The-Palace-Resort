"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

import { useTheme } from "next-themes";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={cn(
        "group/spotlight p-10 rounded-3xl relative border overflow-hidden transition-all duration-300",
        isDark 
          ? "bg-zinc-900 backdrop-blur-xl border-white/10 shadow-none hover:border-amber-500/30" 
          : "bg-zinc-200 backdrop-blur-xl border-zinc-300 shadow-xl shadow-neutral-200/50 hover:shadow-2xl hover:shadow-amber-100/40 hover:border-amber-500/30",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={
              isDark
                ? [
                    [59, 130, 246],
                    [139, 92, 246],
                  ]
                : [
                    [245, 158, 11],
                    [251, 191, 36],
                  ]
            }
            dotSize={3}
          />
        )}
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
