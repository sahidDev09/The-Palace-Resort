import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-50 py-16 dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-6 block">
              <Image
                src="/assets/palace-logo.png"
                alt="The Palace Logo"
                width={150}
                height={50}
                className="h-12 w-auto object-contain dark:invert"
              />
            </Link>
            <p className="max-w-sm text-zinc-600 dark:text-zinc-400">
              The Palace Luxury Resort Bahubal offers an unparalleled experience
              of luxury and comfort in the heart of nature. Discover serenity
              and elegance.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/rooms" className="hover:text-amber-600">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-amber-600">
                  Dining Experience
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-amber-600">
                  Events & Weddings
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber-600">
                  Resort Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-white">
              Contact
            </h4>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <li>Bahubal, Habiganj, Sylhet</li>
              <li>+880 1234 567890</li>
              <li>info@thepalaceresort.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-zinc-200 pt-8 dark:border-zinc-800 md:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} The Palace Luxury Resort. All rights
            reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <Link href="#" className="text-sm text-zinc-500 hover:text-amber-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-zinc-500 hover:text-amber-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
