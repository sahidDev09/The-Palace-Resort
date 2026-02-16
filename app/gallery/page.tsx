"use client";

import { GalleryGrid } from "@/components/gallery-grid";


export default function GalleryPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <GalleryGrid />
      </div>
    </main>
  );
}
