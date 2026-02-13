"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";

export function ThemeTransition() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const prevTheme = useRef(theme);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (theme !== prevTheme.current) {
      const isDark = theme === "dark";
      
      if (overlayRef.current) {
        const { x, y } = mousePos.current;
        // fallback to center if no mouse movement yet
        const startX = x || window.innerWidth / 2;
        const startY = y || window.innerHeight / 2;

        const tl = gsap.timeline();
        
        gsap.set(overlayRef.current, {
          clipPath: `circle(0% at ${startX}px ${startY}px)`,
          display: "block",
          backgroundColor: isDark ? "#09090b" : "#ffffff",
          opacity: 1,
          zIndex: 99999,
        });

        tl.to(overlayRef.current, {
          clipPath: `circle(150% at ${startX}px ${startY}px)`,
          duration: 1.2,
          ease: "expo.inOut",
        })
        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(overlayRef.current, { display: "none" });
          }
        });
      }
      
      prevTheme.current = theme;
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none"
      style={{ display: "none" }}
      aria-hidden="true"
    />
  );
}
