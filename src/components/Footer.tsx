import { Link } from "wouter";
import { Linkedin, Instagram, ExternalLink } from "lucide-react";

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
      { label: "PropBank™", href: "/services" },
      { label: "Climate Cohort", href: "/services" },
      { label: "Youth Education", href: "/services" },
      { label: "Wellness Screenings", href: "/services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 md:pt-20 pb-8 md:pb-10 border-t border-white/10">
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
              Healing the Earth, One Frame at a Time. Africa's first regenerative filmmaking movement.
            </p>
            <p className="text-white/40 text-sm">
              A division of Brooks Media Ltd · Nairobi, Kenya
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
          <p>© {new Date().getFullYear()} Green Film Africa · Brooks Media Ltd. All rights reserved.</p>
          
          <div className="flex gap-4 text-xs font-mono uppercase tracking-widest text-primary/60">
            <span>🌍 Care for Earth</span>
            <span>🤝 Care for People</span>
            <span>⚖️ Fair Share</span>
          </div>

          <p className="flex items-center gap-1.5 order-last md:order-none">
            Powered by{" "}
            <a 
              href="https://tytantech.co.ke/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline flex items-center gap-1 transition-colors"
            >
              tytantech <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
