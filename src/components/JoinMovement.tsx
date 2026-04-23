import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "./ui/button";

export function JoinMovement() {
  return (
    <section className="py-24 md:py-32 bg-primary text-white text-center relative overflow-hidden">
      {/* Subtle overlay to match the depth of the HTML profile */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-white/60 mb-6 font-mono">
            Join the Movement
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-8 leading-[1.1]">
            The Planet Doesn't Need More Films <br />
            <span className="text-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">About</span> Climate Change
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            It needs filmmakers who ARE the change. That's you. Whether you're a student, 
            seasoned professional, school, funder, or someone who loves cinema and cares 
            about the Earth — there is a place for you here.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 h-14 bg-white text-primary hover:bg-white/90 font-bold transition-transform hover:scale-105 shadow-xl">
              <a href="mailto:info@greenfilmafrica.org">Apply for the Cohort</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 border-white/50 text-white hover:bg-white/10 font-bold transition-transform hover:scale-105">
              <Link href="/services">List on PropBank™</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 border-white/50 text-white hover:bg-white/10 font-bold transition-transform hover:scale-105">
              <Link href="/about">Education Programmes</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}