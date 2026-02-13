"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useIsMounted } from "@/hooks/use-is-mounted";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";

const offers = [
  {
    id: 1,
    tag: "Romantic",
    title: "Couple Villa Escape",
    description: "A secluded sanctuary with private garden, infinity plunge pool, and personalized butler service for ultimate intimacy.",
    image: "/assets/real_villa.png",
    price: "From 45,000 BDT",
    previousPrice: "55,000 BDT",
    color: "amber"
  },
  {
    id: 2,
    tag: "Family",
    title: "Grand Family Suite",
    description: "Spacious interconnecting suites with luxury child-friendly amenities, private living area, and inclusive family activities.",
    image: "/assets/offer_family.png",
    price: "From 65,000 BDT",
    previousPrice: "80,000 BDT",
    color: "emerald"
  },
  {
    id: 3,
    tag: "Long Stay",
    title: "Residential Estate",
    description: "Experience the pinnacle of luxury in our residential estates. Perfect for long-term stays with full resort privileges and private estate staff.",
    image: "/assets/real_residential.jpg",
    price: "From 125,000 BDT",
    previousPrice: "150,000 BDT",
    color: "rose"
  },
  {
    id: 4,
    tag: "Dining",
    title: "Starlit Garden Dinner",
    description: "A private 5-course gourmet experience under the stars with live music and curated wine pairing in our lush botanical gardens.",
    image: "/assets/offer3.png",
    price: "From 14,000 BDT",
    previousPrice: "18,000 BDT",
    color: "amber"
  },
];

export function AnnouncementCarousel() {
  const { resolvedTheme } = useTheme();
  const mounted = useIsMounted();
  const [currentSlide, setCurrentSlide] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if container exists to avoid SSR issues
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Reset positions for elements with 'animate-text' and 'animate-image' classes
      gsap.set(".animate-text", { y: 30, opacity: 0 });
      gsap.set(".animate-image", { scale: 1.1, opacity: 0 });

      const tl = gsap.timeline();
      
      // Image reveal
      tl.to(".animate-image", {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      });

      // Text stagger reveal
      tl.to(".animate-text", {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.8");

      // Slide auto-progress animation
      gsap.fromTo(progressRef.current, 
        { scaleX: 0 }, 
        { 
          scaleX: 1, 
          duration: 6, 
          ease: "none", 
          onComplete: () => {
            setCurrentSlide((prev) => (prev + 1) % offers.length);
          } 
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  if (!mounted) return null;

  return (
    <section 
      className={`relative py-20 z-1 transition-colors duration-500 overflow-hidden border-b ${
        resolvedTheme === "dark" 
          ? "bg-[#060b13] border-white/5" 
          : "bg-blue-100 border-zinc-100"
      }`} 
      ref={containerRef}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="relative w-full md:w-1/2 aspect-[4/5] md:aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden group shadow-2xl bg-zinc-100 dark:bg-white/5">
            <div className="animate-image absolute inset-0">
              <Image
                src={offers[currentSlide].image}
                alt={offers[currentSlide].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Tag in Image */}
            <div className="animate-text absolute top-8 left-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white text-xs font-bold uppercase tracking-widest">
                <Sparkles className="h-3 w-3 text-amber-400" />
                <span>Special Offer</span>
              </div>
            </div>

            {/* Price in Image */}
            <div className="animate-text absolute bottom-8 left-8 flex flex-col">
              <span className="text-white/70 text-xs font-bold uppercase tracking-tighter">Experience luxury</span>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-white">{offers[currentSlide].price}</span>
                <span className="text-lg font-bold text-white/40 line-through decoration-amber-500/50 decoration-2">{offers[currentSlide].previousPrice}</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="animate-text flex items-center gap-3 mb-8 text-amber-600 font-bold uppercase tracking-[0.2em] text-sm">
              <div className="h-[2px] w-12 bg-amber-600" />
              <span>{offers[currentSlide].tag}</span>
            </div>
            
            <h2 className={`animate-text text-5xl lg:text-6xl font-black mb-8 leading-[1.1] uppercase ${resolvedTheme === "dark" ? "dark:text-white" : "text-black"}`}>
              {offers[currentSlide].title}
            </h2>
            
            <p className={`animate-text text-zinc-600 dark:text-zinc-400 text-xl mb-6 leading-relaxed max-w-lg ${resolvedTheme === "dark" ? "dark:text-zinc-400" : "text-zinc-600"}`}>
              {offers[currentSlide].description}
            </p>

            <div className="animate-text flex items-baseline gap-4 mb-10">
              <span className={`text-4xl font-black ${resolvedTheme === "dark" ? "text-white" : "text-black"}`}>
                {offers[currentSlide].price.replace("From ", "")}
              </span>
              <span className="text-xl font-bold text-zinc-500/50 line-through decoration-amber-600/60 decoration-2">
                {offers[currentSlide].previousPrice}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-600/10 px-3 py-1 rounded-lg ml-2">
                Limited Time
              </span>
            </div>

            <div className="animate-text flex flex-wrap items-center gap-6 mb-12">
              <button className="group relative flex items-center gap-4 bg-amber-600 cursor-pointer text-white  px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-xl">
                Claim Offer
                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <button className={`font-bold uppercase tracking-widest text-sm border-b-2 border-zinc-200 dark:border-zinc-800 hover:border-amber-600 transition-all py-1 ${resolvedTheme === "dark" ? "dark:text-white" : "text-black"}`}>
                View Details
              </button>
            </div>

            {/* Navigation & Progress */}
            <div className="flex items-center gap-8">
              <div className="flex gap-4">
                <button 
                  onClick={prevSlide}
                  className="h-14 w-14 rounded-2xl border-2 border-zinc-200 dark:border-white/10 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 dark:hover:bg-amber-600 transition-all text-zinc-900 dark:text-white hover:text-white group"
                >
                  <ChevronLeft className="h-6 w-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="h-14 w-14 rounded-2xl border-2 border-zinc-200 dark:border-white/10 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 dark:hover:bg-amber-600 transition-all text-zinc-900 dark:text-white hover:text-white group"
                >
                  <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Progress Bar Container */}
              <div className="flex-1 h-[2px] bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden hidden sm:block">
                <div 
                  ref={progressRef}
                  className="absolute inset-0 bg-amber-600 origin-left" 
                />
              </div>

              {/* Slide Counter */}
              <div className="text-zinc-400 font-black text-lg tabular-nums">
                <span className="text-zinc-900 dark:text-white">{String(currentSlide + 1).padStart(2, '0')}</span> / {String(offers.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Text in background */}
      <div className={`absolute -bottom-10 -right-20 -z-1 text-[20vw] font-black ${resolvedTheme === "dark" ? "text-zinc-900/50" : "text-gray-400/20"} pointer-events-none select-none uppercase leading-none`}>
        Palace
      </div>
    </section>
  );
}
