import { Hero } from "@/components/hero";
import { AnnouncementCarousel } from "@/components/announcement-carousel";
import { RoomsSection } from "@/components/rooms-section";
import { FeedbackSection } from "@/components/feedback-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AnnouncementCarousel />
      <RoomsSection />
      <FeedbackSection />
    </main>
  );
}
