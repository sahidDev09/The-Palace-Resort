"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapGlobal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Refresh ScrollTrigger after a slight delay to ensure lenis/images load
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  }, []);

  return null;
}
