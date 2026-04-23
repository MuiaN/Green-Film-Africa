import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="African forest canopy"
          className="w-full h-full object-cover object-center scale-105 transform"
        />
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <motion.span 
                className="w-2 h-2 rounded-full bg-accent"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
              Brooks Media Ltd · Nairobi, Africa
              <motion.span 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 font-heading tracking-tight">
              Healing the Earth, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">
                One Frame at a Time
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
              Africa's first regenerative filmmaking movement — building sustainable networks, circular economies, and climate stories from the classroom to the credit reel.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" asChild className="rounded-full px-8 h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 border-0">
                <Link href="/contact">
                  Partner With Us <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-14 text-base font-semibold bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                <Link href="/about">
                  <PlayCircle className="mr-2 w-5 h-5" /> Our Story
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div
            className="w-full h-1/2 absolute top-0"
            animate={{ 
              top: ["-50%", "100%"],
              backgroundColor: ["#2E7D32", "#F9A825", "#2E7D32"]
            }}
            transition={{ 
              top: { repeat: Infinity, duration: 2, ease: "linear" },
              backgroundColor: { repeat: Infinity, duration: 4, ease: "easeInOut" }
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
