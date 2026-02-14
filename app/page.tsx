import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AnnouncementCarousel } from "@/components/announcement-carousel";
import { RoomsSection } from "@/components/rooms-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AnnouncementCarousel />
      <RoomsSection />
      <Footer />
    </main>
  );
}
