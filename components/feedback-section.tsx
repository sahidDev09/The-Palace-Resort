"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useTheme } from "next-themes";

const reviews = [
  {
    name: "Alexander Grant",
    role: "Luxury Traveler",
    body: "The ocean view suite exceeded all expectations. Waking up to the sound of waves and having breakfast on the private balcony was the peak of relaxation.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Sophia Lorenz",
    role: "Fashion Designer",
    body: "Architecturally stunning. Every corner of The Palace is a masterpiece. The interior design strikes the perfect balance between modern luxury and classic elegance.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "James McAvoy",
    role: "Corporate Executive",
    body: "The business lounge and high-speed amenities were perfect, but it's the personalized concierge service that truly sets this resort apart from the rest.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Isabella Martinez",
    role: "Wellness Enthusiast",
    body: "The spa treatments are world-class. I've never felt more rejuvenated. The infinity pool overlooking the sunset is a scene I will never forget.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Marcus Thorne",
    role: "Global Adventurer",
    body: "From private yacht excursions to the secluded beach, The Palace offers more than just a stay—it's a complete luxury experience. Attention to detail is unrivaled.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Grace Harrison",
    role: "Social Media Influencer",
    body: "The most photogenic resort I've ever visited! Every spot is Instagrammable, and the service makes you feel like royalty from the moment you arrive.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  role,
  body,
  resolvedTheme,
}: {
  img: string;
  name: string;
  role: string;
  body: string;
  resolvedTheme: string | undefined;
}) => {
  const isDark = resolvedTheme === "dark";
  return (
    <figure className="glass-card group relative w-[380px] cursor-pointer overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2">
      {/* Liquid gradient overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245, 158, 11, 0.06), transparent 40%)",
        }}
      />

      {/* Top shine line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Quote icon */}
      <Quote className="absolute top-5 right-5 h-8 w-8 text-orange-500/10 dark:text-orange-400/10 transition-colors group-hover:text-orange-500/20 dark:group-hover:text-orange-400/20" />

      {/* Header */}
      <div className="relative flex flex-row items-center gap-4">
        <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-full ring-2 ring-orange-400/20 transition-all duration-300 group-hover:ring-orange-400/50 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]">
          <Image
            className="aspect-square object-cover"
            fill
            alt={name}
            src={img}
          />
        </div>
        <div className="flex flex-col">
          <figcaption className={`text-base font-bold ${isDark ? "text-white" : "text-black"}`}>
            {name}
          </figcaption>
          <p className={`text-sm ${isDark ? "text-zinc-400" : "text-black"}`}>{role}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="relative mt-5 flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500 drop-shadow-[0_0_3px_rgba(245,158,11,0.3)]" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className={`relative mt-4 text-[15px] leading-relaxed ${isDark ? "text-white" : "text-black"}`}>
        &ldquo;{body}&rdquo;
      </blockquote>
    </figure>
  );
};

export function FeedbackSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <section className="relative flex min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-background py-14">
      {/* Background decorative blobs */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-orange-400/5 blur-3xl dark:bg-orange-500/10" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-64 w-64 rounded-full bg-blue-400/5 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-400/3 blur-3xl dark:bg-purple-500/5" />

      <div className="relative z-10 mb-16 px-4 text-center">
        <h2 className={`text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl ${isDark ? "text-white" : "text-black"}`}>
          What Our Guests Say
        </h2>
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-600" />
          <p className={`max-w-4xl text-lg ${isDark ? "text-white" : "text-black"}`}>
            Discover why travelers choose The Palace Resort for their most memorable stays and dining experiences.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-col gap-6">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:1.5rem] py-4">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} resolvedTheme={resolvedTheme} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s] [--gap:1.5rem] py-4">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} resolvedTheme={resolvedTheme} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-background to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-background to-transparent z-20"></div>
    </section>
  );
}
