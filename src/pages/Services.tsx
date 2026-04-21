import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Film, Recycle, TreePine, Sprout, Droplets, Wind, ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const services = [
  {
    icon: Droplets,
    title: "Environmental Cleanup",
    tag: "Core Service",
    tagColor: "bg-blue-100 text-blue-700",
    desc: "We organise and execute large-scale cleanup operations across Lake Victoria, the Indian Ocean coastline, and Kenya's urban environments. Our teams work with local communities to remove waste that threatens vital water towers.",
    features: [
      "Nairobi and Athi River restoration",
      "Forest floor restoration",
      "Indian Ocean beach cleanups",
      "Post-cleanup environmental assessment",
      "Community volunteer coordination",
    ],
  },
  {
    icon: Film,
    title: "Environmental Documentary",
    tag: "Storytelling",
    tagColor: "bg-amber-100 text-amber-700",
    desc: "Our in-house film team documents every cleanup, restoration project, and circular economy initiative. We produce compelling short films, long-form documentaries, and social content that drives awareness, policy, and funding.",
    features: [
      "Short-form documentary production",
      "Social and digital content",
      "Policy briefing films",
      "Impact storytelling for NGOs and donors",
      "Educational series for schools",
    ],
  },
  {
    icon: Sprout,
    title: "Organic Manure Production",
    tag: "Circular Economy",
    tagColor: "bg-green-100 text-green-700",
    desc: "Organic waste recovered from cleanups is processed into high-quality compost and organic manure. This waste-to-value system creates income, reduces landfill burden, and feeds the trees in our reforestation programmes.",
    features: [
      "Collection of organic waste streams",
      "Composting and bioconversion",
      "Premium organic manure production",
      "Agricultural distribution partnerships",
      "Soil health monitoring",
    ],
  },
  {
    icon: TreePine,
    title: "Reforestation Programs",
    tag: "Restoration",
    tagColor: "bg-emerald-100 text-emerald-700",
    desc: "We plant native tree species enriched with our own organic manure, focusing on Kenya's 'Water Towers' and degraded lands. Our reforestation work targets the Mau Forest, Aberdares, and urban corridors.",
    features: [
      "Native species selection and propagation",
      "Community-led planting campaigns",
      "Tree tracking and survival monitoring",
      "Carbon sequestration reporting",
      "Long-term canopy management",
    ],
  },
  {
    icon: Recycle,
    title: "Circular Economy Consulting",
    tag: "Advisory",
    tagColor: "bg-purple-100 text-purple-700",
    desc: "We help corporations, municipalities, and NGOs design circular economy systems for waste management and resource recovery. Our practical approach is built on real field experience, not theory.",
    features: [
      "Waste audit and mapping",
      "Circular system design",
      "Stakeholder engagement workshops",
      "Policy and regulatory advisory",
      "Impact measurement frameworks",
    ],
  },
  {
    icon: Wind,
    title: "Biodiversity Preservation",
    tag: "Conservation",
    tagColor: "bg-teal-100 text-teal-700",
    desc: "We work with KWS, local communities, and environmental agencies to protect critical biodiversity hotspots across the East African Rift Valley. Our approach combines cleanup and conservation science.",
    features: [
      "Endangered species habitat assessment",
      "Habitat restoration design",
      "Community ranger training",
      "Wildlife corridor establishment",
      "Biodiversity impact reporting",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-20">

        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Recycle className="w-4 h-4" /> What We Do
                </motion.div>
                <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black font-heading text-foreground leading-tight mb-6">
                  From cleanup to <span className="text-primary">circular economy</span> — end to end.
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
                  Our services are designed to work together as an integrated system. Every activity reinforces the others, creating lasting impact rather than isolated interventions.
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
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Sustainable recycling and resource recovery" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-sidebar">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-8"
            >
              {services.map((s) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <s.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${s.tagColor}`}>
                        {s.tag}
                      </span>
                      <h3 className="font-heading font-bold text-xl text-foreground">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-2xl mx-auto"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-white mb-6">
                Ready to work together?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-white/80 mb-10">
                Whether you need a full circular economy programme or a single documentary, we bring the same depth of commitment to every engagement.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Button asChild size="lg"
                  className="rounded-full px-10 h-14 text-base font-semibold bg-white text-primary hover:bg-white/90 shadow-xl">
                  <Link href="/contact">
                    Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
