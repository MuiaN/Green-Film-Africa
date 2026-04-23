import { motion, type Variants } from "framer-motion";
import { RefreshCcw, LayoutPanelLeft, LineChart, Repeat, Sprout } from "lucide-react";

const cards = [
  {
    icon: RefreshCcw,
    title: "Rethink",
    desc: "Challenge every assumption from the script stage. Does this scene need a flight? Does this set need new lumber? Design the problem out before cameras roll.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: LayoutPanelLeft,
    title: "Redesign",
    desc: "Redesign your production system. Circular props, local crew, solar power, zero-waste catering. The best sustainability decision is one you never have to reverse.",
    color: "text-accent",
    bg: "bg-accent/20"
  },
  {
    icon: LineChart,
    title: "Reduce",
    desc: "Measure your carbon. Use a CO₂ calculator. Track fuel, flights, food, and waste every day. What gets measured gets managed.",
    color: "text-secondary-foreground",
    bg: "bg-secondary"
  },
  {
    icon: Repeat,
    title: "Reuse",
    desc: "Rent wardrobes, share props between productions, keep mitumba over fast fashion. One production's waste is another's resource. That's PropBank™.",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: Sprout,
    title: "Regenerate",
    desc: "Leave the location better than you found it. Plant trees. Train locals. Partner with the community. Give back more than you took. This is the goal.",
    color: "text-accent",
    bg: "bg-accent/20"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 }
  }
};

export function WasteToValue() {
  return (
    <section id="impact" className="py-24 md:py-32 bg-sidebar relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Framework</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-foreground mb-6">
              The 5 Rs of Regenerative Filmmaking
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Beyond reduce-reuse-recycle. A complete system upgrade for how African productions relate to the world they film in.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-xl aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                alt="Regenerative environmental growth" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid gap-6"
            >
              {cards.map((card, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/20 transition-all group"
                >
                  <div className="flex gap-6">
                    <div className={`w-14 h-14 rounded-2xl ${card.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className={`w-7 h-7 ${card.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">{card.title}</h4>
                      <p className="text-foreground/70 leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}