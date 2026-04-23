import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, GraduationCap, Leaf } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const eduPrograms = [
  {
    title: "Youth Programme",
    subtitle: "Schools & Young Filmmakers",
    desc: "A hands-on curriculum designed for secondary schools and youth centres across Africa. Students learn storytelling, basic production, and why the choices we make on set echo in the world around us.",
    badge: "Youth",
    badgeClass: "bg-amber-100 text-amber-700",
    features: [
      "Introduction to sustainable film production",
      "Nature-based storytelling and local ecology",
      "Camera basics using recycled and affordable gear",
      "Creating zero-waste on-set habits from day one",
      "Youth climate short film competitions",
      "Mentorship from working African filmmakers",
    ],
  },
  {
    title: "Professional Track",
    subtitle: "For Working Filmmakers",
    desc: "Modular masterclasses and certifications for directors, producers, DPs, production designers, and crew who want to lead Africa's green production revolution.",
    badge: "Professional",
    badgeClass: "bg-primary/10 text-primary",
    features: [
      "Green production planning and carbon accounting",
      "Circular prop, wardrobe, and set material management",
      "Sustainable location scouting and community protocols",
      "Pitching climate stories to international commissioners",
      "Regenerative business models for productions",
      "Albert certification preparation & ESG compliance",
    ],
  },
];

const fiveRs = [
  {
    title: "Rethink",
    desc: "Challenge every assumption from the script stage. Does this scene need a flight? Does this set need new lumber? Design the problem out before cameras roll.",
  },
  {
    title: "Redesign",
    desc: "Redesign your production system. Circular props, local crew, solar power, zero-waste catering. The best sustainability decision is one you never have to reverse.",
  },
  {
    title: "Reduce",
    desc: "Measure your carbon. Use a CO₂ calculator. Track fuel, flights, food, and waste every day. What gets measured gets managed.",
  },
  {
    title: "Reuse",
    desc: "Rent wardrobes, share props between productions, keep mitumba over fast fashion. One production's waste is another's resource. That's PropBank™.",
  },
  {
    title: "Regenerate",
    desc: "Leave the location better than you found it. Plant trees. Train locals. Partner with the community. Give back more than you took. This is the goal.",
  },
];

export default function Education() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-20">
        {/* Education Hero Section */}
        <section className="py-20 md:py-28 bg-white overflow-hidden relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <BookOpen className="w-4 h-4" /> Education
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black font-heading text-foreground leading-tight mb-6">
                From Classrooms to <span className="text-primary italic">Credits</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
                Building a generation of African filmmakers who understand that the camera is a tool of stewardship.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-8"
            >
              {eduPrograms.map((program) => (
                <motion.div
                  key={program.title}
                  variants={fadeUp}
                  className="bg-sidebar rounded-3xl p-8 md:p-10 border border-border/60 hover:border-primary/30 transition-all shadow-sm"
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${program.badgeClass}`}>
                    {program.badge}
                  </div>
                  <h3 className="text-2xl font-black font-heading text-foreground mb-2">{program.title}</h3>
                  <p className="text-primary font-bold text-sm mb-4 italic">{program.subtitle}</p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {program.desc}
                  </p>
                  <ul className="space-y-3">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                        <Leaf className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Framework Section */}
        <section className="py-24 md:py-32 bg-sidebar border-y border-border/40">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="section-label mx-auto">Our Framework</div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground mt-4 mb-6">
                The 5 Rs of <span className="text-primary italic">Regenerative Filmmaking</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                Beyond reduce-reuse-recycle. A complete system upgrade for how African productions relate to the world they film in.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {fiveRs.map((r) => (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  className="bg-white p-6 rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-md transition-all text-center group"
                >
                  <div className="text-primary font-heading font-black text-6xl mb-4 group-hover:text-accent transition-all duration-300">R</div>
                  <h4 className="font-heading font-bold text-lg text-foreground mb-3">{r.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-primary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-black font-heading mb-6">Ready to Enrol?</h2>
            <p className="mb-8 opacity-80">Join us in shaping the future of African cinema.</p>
            <a href="mailto:info@greenfilmafrica.org" className="inline-block bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors">Contact Education Team</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}