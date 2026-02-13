import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AnnouncementCarousel } from "@/components/announcement-carousel";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AnnouncementCarousel />
      <Footer />
    </main>
  );
}
