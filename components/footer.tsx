import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-background py-16">
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
            <p className="max-w-sm text-muted-foreground">
              The Palace Luxury Resort Bahubal offers an unparalleled experience
              of luxury and comfort in the heart of nature. Discover serenity
              and elegance.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="/rooms" className="hover:text-primary transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-primary transition-colors">
                  Dining Experience
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary transition-colors">
                  Events & Weddings
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors">
                  Resort Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">
              Contact
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>Bahubal, Habiganj, Sylhet</li>
              <li>+880 1234 567890</li>
              <li>info@thepalaceresort.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Palace Luxury Resort. All rights
            reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
