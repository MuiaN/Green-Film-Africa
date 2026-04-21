import { Link } from "wouter";
import { Linkedin, Instagram } from "lucide-react";

const footerLinks = [
  {
    heading: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Initiatives",
    links: [
      { label: "River Cleanups", href: "/services" },
      { label: "Reforestation", href: "/services" },
      { label: "Documentaries", href: "/services" },
      { label: "Manure Production", href: "/services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 md:py-20 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center group w-fit">
              <img 
                src="/Green_Film_Africa_Logo.png" 
                alt="Green Film Africa" 
                className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-white/60 max-w-md text-lg font-medium leading-relaxed">
              Restoring Africa's natural heritage — one frame, one cleanup, one harvest at a time.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white/60">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white/60">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-white/60">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="font-heading font-bold text-lg mb-6">{group.heading}</h4>
              <ul className="space-y-4 text-white/60">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Green Film Africa. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
