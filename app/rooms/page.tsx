import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { MoveRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ROOMS } from "@/lib/constants";

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Our <span className="text-amber-500">Accommodations</span>
            </h1>
            <p className="text-neutral-400 text-xl leading-relaxed">
              From elegant suites to private villas, discover our collection of luxury living spaces 
              designed for the most discerning travelers.
            </p>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <CardSpotlight key={room.id} className="h-full min-h-[500px] flex flex-col p-6 cursor-pointer">
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image 
                  src={room.image} 
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/spotlight:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-sm font-semibold">
                  {room.price} <span className="text-neutral-400 font-normal">/ Night</span>
                </div>
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 group-hover/spotlight:text-blue-400 transition-colors">
                  {room.title}
                </h3>
                <p className="text-neutral-400 mb-6 text-sm line-clamp-2">
                  {room.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((feature) => (
                      <span 
                        key={feature} 
                        className="px-2 py-1 text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 rounded"
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
          ))}
        </div>
      </div>
    </main>
  );
}
