import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Target, BarChart3, GraduationCap, Globe, Recycle, Handshake, ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const services = [
  {
    icon: Target,
    title: "Consultancy & Project Management",
    tag: "Productions",
    tagColor: "bg-blue-100 text-blue-700",
    desc: "End-to-end green production planning for feature films, series, documentaries, and branded content. We embed sustainability from the script stage to final delivery.",
    features: [
      "Script-stage sustainability design",
      "Feature film & series planning",
      "Branded content strategy",
      "End-to-end project management",
      "Green production plans",
    ],
  },
  {
    icon: BarChart3,
    title: "CO₂ Expertise & Resource Management",
    tag: "Carbon & ESG",
    tagColor: "bg-amber-100 text-amber-700",
    desc: "Carbon auditing across Scope 1, 2, and 3 emissions. We use the Albert calculator and build full ESG reports that satisfy Netflix, BBC, and international requirements.",
    features: [
      "Carbon auditing (Scope 1, 2, & 3)",
      "Albert calculator integration",
      "ESG reporting for global brands",
      "Resource management strategy",
      "Sustainability disclosure data",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Education",
    tag: "Capacity Building",
    tagColor: "bg-green-100 text-green-700",
    desc: "Workshops, masterclasses, and accredited training in green film production and sustainable project management — for students and industry professionals alike.",
    features: [
      "Green production masterclasses",
      "Sustainable project management",
      "Youth climate film curriculum",
      "Albert certification prep",
      "Zero-waste on-set habits",
    ],
  },
  {
    icon: Globe,
    title: "Industry Networking",
    tag: "Ecosystem Building",
    tagColor: "bg-emerald-100 text-emerald-700",
    desc: "We connect African productions to a growing ecosystem of green film experts, eco-stewards, circular resource providers, and sustainability-aligned commissioners.",
    features: [
      "Connection to eco-stewards",
      "Sustainable vendor database",
      "Commissioner alignment",
      "Pan-African expert network",
      "Community stewardship protocols",
    ],
  },
  {
    icon: Recycle,
    title: "PropBank™ Circular Database",
    tag: "Circular Economy",
    tagColor: "bg-purple-100 text-purple-700",
    desc: "Africa's first circular film resource marketplace — connecting productions that have with productions that need. List, rent, swap, or donate assets.",
    features: [
      "Prop & wardrobe marketplace",
      "Waste diversion tracking",
      "Carbon saving metrics",
      "Listing & search database",
      "Asset circulation management",
    ],
  },
  {
    icon: Handshake,
    title: "Institutional Partnerships",
    tag: "Partnerships",
    tagColor: "bg-teal-100 text-teal-700",
    desc: "Strategic collaboration with broadcasters, film commissions, and NGOs to embed green standards across the African creative sector.",
    features: [
      "Broadcaster collaboration",
      "Film commission integration",
      "NGO & development funding",
      "Creative sector policy work",
      "Educational system embedding",
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
                  Strategic and <span className="text-primary">systemic solutions</span> for African film.
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
                  Tailored for production companies, broadcasters, and institutions. We bridge the gap between creative media, ecological responsibility, and industry growth.
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
