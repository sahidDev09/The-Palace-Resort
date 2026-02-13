import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Welcome Section */}
      <section className="bg-white py-24 dark:bg-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Welcome to Paradise</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-amber-600"></div>
          <p className="mx-auto mt-10 max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            Immerse yourself in the tranquility of our resort. From world-class dining to rejuvenating spa treatments, every moment at The Palace is designed to be unforgettable. Nestled in the lush greenery of Bahubal, we offer a sanctuary for those seeking peace and luxury.
          </p>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="bg-zinc-50 py-24 dark:bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-bold">Our Rooms</h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">Choose from our selection of premium suites and villas.</p>
            </div>
            <button className="hidden text-sm font-bold uppercase tracking-widest text-amber-600 hover:text-amber-700 md:block">
              View All Rooms →
            </button>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Presidential Suite", price: "$450" },
              { title: "Ocean View Villa", price: "$350" },
              { title: "Garden Deluxe", price: "$250" },
            ].map((room, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl bg-white shadow-md dark:bg-zinc-950">
                <div className="aspect-[4/3] w-full bg-zinc-200 dark:bg-zinc-800 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="p-8">
                  <h3 className="mb-2 text-xl font-bold">{room.title}</h3>
                  <p className="mb-4 text-sm text-zinc-500">Starting from <span className="text-amber-600 font-bold">{room.price}</span> / night</p>
                  <button className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-amber-600">Explore Room</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mb-6 text-4xl font-bold">Exquisite Dining</h2>
              <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                Savor the flavors of our internationally acclaimed cuisine, prepared by world-class chefs using only the freshest local ingredients.
              </p>
              <ul className="mb-10 space-y-4 text-zinc-700 dark:text-zinc-300">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                  Fine Dining at The Grand Hall
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                  Sunset Cocktails at Sky Lounge
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                  Private Garden Dinners
                </li>
              </ul>
              <button className="rounded-full border-2 border-zinc-900 px-8 py-3 text-sm font-bold uppercase dark:border-white">
                Our Menu
              </button>
            </div>
            <div className="order-1 aspect-square rounded-3xl bg-zinc-100 dark:bg-zinc-800 md:order-2"></div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
