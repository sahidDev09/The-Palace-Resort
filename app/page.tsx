import { Hero } from "@/components/hero";
import { AnnouncementCarousel } from "@/components/announcement-carousel";
import { RoomsSection } from "@/components/rooms-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AnnouncementCarousel />
      <RoomsSection />
    </main>
  );
}
