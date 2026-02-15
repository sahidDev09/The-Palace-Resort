"use client";

import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Room } from "@/lib/types";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <CardSpotlight 
      className="h-full min-h-[500px] flex flex-col p-6 cursor-pointer"
      color={isDark ? "#1a1a1a" : "#fafafa"}
    >
      <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden">
        <Image 
          src={room.image} 
          alt={room.title}
          fill
          className="object-cover transition-transform duration-500 group-hover/spotlight:scale-110"
        />
        <div className={`absolute top-4 right-4 px-3 py-1 backdrop-blur-md rounded-full border text-sm font-semibold transition-all duration-300 ${
          isDark 
            ? "bg-black/60 border-white/20 text-white shadow-lg shadow-black/50" 
            : "bg-white/90 border-neutral-200 text-neutral-900 shadow-lg shadow-neutral-200/50"
        }`}>
          {room.price} <span className={`${isDark ? "text-neutral-400" : "text-neutral-500"} font-normal`}>/ Night</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col">
        <h3 className={`text-2xl font-bold mb-2 group-hover/spotlight:text-amber-500 transition-colors ${isDark ? "text-zinc-100" : "text-zinc-900"}`}>
          {room.title}
        </h3>
        <p className={`mb-6 text-sm line-clamp-2 leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
          {room.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {room.features.map((feature) => (
              <span 
                key={feature} 
                className={`px-2 py-1 text-[10px] uppercase tracking-wider border rounded ${
                  isDark 
                    ? "bg-white/5 border-white/10 text-neutral-400" 
                    : "bg-neutral-100 border-neutral-200 text-neutral-500"
                }`}
              >
                {feature}
              </span>
            ))}
          </div>

          <button className="flex items-center gap-2 text-white font-semibold bg-amber-500 hover:bg-amber-600 px-5 py-2.5 rounded-lg transition-colors group/btn">
            Book This Room
            <MoveRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </CardSpotlight>
  );
}
