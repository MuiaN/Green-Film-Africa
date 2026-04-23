import { Link, useRoute } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "PropBank™", href: "/propbank" },
  { label: "Cohort", href: "/cohort" },
  { label: "Education", href: "/education" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/40"
      >
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img 
              src="/Green_Film_Africa_Logo.png" 
              alt="Green Film Africa" 
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="rounded-full px-6 font-semibold shadow-md shadow-primary/20">
              <a href="https://www.paypal.com/ncp/payment/PVZGM9X3XHQAU" target="_blank" rel="noopener noreferrer">
                Donate
              </a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-border shadow-lg md:hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 rounded-lg font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-2 rounded-full font-semibold">
                <a 
                  href="https://www.paypal.com/ncp/payment/PVZGM9X3XHQAU" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={() => setMenuOpen(false)}
                >
                  Donate
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [isActive] = useRoute(href === "/" ? "/" : `${href}*`);
  return (
    <Link
      href={href}
      className={`relative transition-colors hover:text-primary ${
        isActive ? "text-primary font-semibold" : "text-foreground/80"
      }`}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="nav-indicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
        />
      )}
    </Link>
  );
}
