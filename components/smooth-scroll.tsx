"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.07,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      syncTouch: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    }}>
      {children}
    </ReactLenis>
  );
}
