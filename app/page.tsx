import { Hero } from "@/components/hero";
import { AnnouncementCarousel } from "@/components/announcement-carousel";
import { RoomsSection } from "@/components/rooms-section";
import { EventsSection } from "@/components/events-section";
import { FeedbackSection } from "@/components/feedback-section";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AnnouncementCarousel />
      <RoomsSection />
      <EventsSection />
      <FeedbackSection />
      <CallToAction />
    </main>
  );
}
