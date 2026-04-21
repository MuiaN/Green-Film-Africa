import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Leaf, Globe, Users, Award, TreePine, Heart } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const values = [
  {
    icon: Leaf,
    title: "Environmental Integrity",
    desc: "Every decision we make is guided by what is best for the natural world — not convenience, not profit.",
  },
  {
    icon: Globe,
    title: "Pan-African Vision",
    desc: "We work across borders because nature knows no boundaries. Our work spans rivers, forests, and urban landscapes continent-wide.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "Local communities are not just beneficiaries — they are partners, leaders, and stewards of the ecosystems we restore.",
  },
  {
    icon: Award,
    title: "Documented Impact",
    desc: "We use the power of film to make environmental work visible, compelling, and impossible to ignore.",
  },
  {
    icon: TreePine,
    title: "Circular Thinking",
    desc: "Waste is not waste — it is a resource in the wrong place. We design systems that close loops and regenerate life.",
  },
  {
    icon: Heart,
    title: "Long-Term Commitment",
    desc: "We are not here for a campaign. We are here for the long haul — planting seeds today for forests that will stand for centuries.",
  },
];

const milestones = [
  { year: "2018", title: "Founded in Nairobi", desc: "Green Film Africa was born in Kenya out of frustration with environmental inaction and a belief that storytelling could drive real change." },
  { year: "2019", title: "First River Cleanup", desc: "Our inaugural cleanup along the Nairobi River removed over 15 tonnes of waste and was documented in our first short film." },
  { year: "2021", title: "Reforestation Launch", desc: "We planted our first 10,000 native trees across the Mau Forest Complex using compost produced from recovered organic waste." },
  { year: "2022", title: "Circular Economy Division", desc: "Launched our organic manure production unit, creating a self-sustaining loop from cleanup to cultivation." },
  { year: "2023", title: "East African Expansion", desc: "Expanded operations into Tanzania, Uganda, and Rwanda with local community partnerships." },
  { year: "2024", title: "Global Recognition", desc: "Received international recognition from environmental bodies across East Africa and Europe for our integrated approach." },
];

export default function About() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-20">

        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Leaf className="w-4 h-4" /> Our Story
                </motion.div>
                <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black font-heading text-foreground leading-tight mb-6">
                  Born from Africa's <span className="text-primary">rivers, forests,</span> and a burning need to act.
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
                  Green Film Africa was founded on a simple conviction: that environmental destruction is not inevitable, and that documentary filmmaking is one of the most powerful tools we have to reverse it.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
                    alt="Lush environmental growth" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-28 bg-sidebar">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground mb-6">
                  Our Mission
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
                  To restore Africa's most degraded environments through direct action — cleaning rivers, forests, and urban spaces — while documenting the journey to inspire systemic change. We believe every cleanup tells a story, and every story drives policy, behaviour, and investment.
                </motion.p>
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                  We bridge the gap between environmental action and storytelling, turning waste into value and narratives into movements.
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground mb-6">
                  Our Vision
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
                  An Africa where ecological health and human prosperity are inseparable — where clean environments, thriving biodiversity, and circular economies are the norm rather than the aspiration.
                </motion.p>
                <motion.div variants={fadeUp} className="flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground/80">
                    East Africa holds <strong className="text-primary">some of the world's most unique biodiversity</strong>. We are committed to protecting it.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-16 max-w-2xl"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground mb-4">
                What We Stand For
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
                Our values guide every cleanup, every documentary, and every conversation we have with partners.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border/60 bg-white hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-28 bg-foreground text-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-16 max-w-2xl"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-white mb-4">
                Our Journey
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-white/60">
                Six years of growing deeper roots in Africa's environmental landscape.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {milestones.map((m) => (
                <motion.div
                  key={m.year}
                  variants={fadeUp}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span className="text-accent font-heading font-black text-2xl block mb-3">{m.year}</span>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{m.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
