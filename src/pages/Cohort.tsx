import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Waves, 
  Sprout, 
  Flame, 
  Brain, 
  Handshake, 
  UserCheck, 
  ClipboardCheck, 
  BarChart3, 
  Film, 
  MapPin, 
  Zap,
  ArrowRight
} from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const themes = [
  { icon: Waves, label: "Climate Change", desc: "Stories of rising seas, drought, displacement, and resilience" },
  { icon: Sprout, label: "Regeneration", desc: "Communities, ecosystems, and cultures choosing to heal" },
  { icon: Flame, label: "Earth Defenders", desc: "Activists, farmers, artists, and everyday African heroes" },
  { icon: Brain, label: "Mental Health & Wellness", desc: "The inner landscape matters as much as the outer one" },
  { icon: Handshake, label: "Ubuntu Futures", desc: "What does a fair-share, post-extractive Africa look like?" },
];

const formats = ["Short Film", "Feature Film", "Documentary", "Limited Series", "Web Series"];

const roles = [
  {
    title: "Green Producer",
    desc: "Manages sustainability from script to screen. Runs carbon audits, builds ESG reports, ensures Albert and Green the Bid compliance.",
    icon: UserCheck
  },
  {
    title: "Eco Steward / Green PA",
    desc: "On-set sustainability coordinator. Tracks waste, manages catering compliance, trains crew. Entry level with huge growth potential.",
    icon: ClipboardCheck
  },
  {
    title: "Carbon Analyst",
    desc: "Calculates production footprints using tools like Albert. Produces data for ESG disclosures and offset planning.",
    icon: BarChart3
  },
  {
    title: "Climate Storyteller",
    desc: "Director, writer, or content creator focused on climate. The IPCC explicitly identifies media as a key lever for climate action.",
    icon: Film
  },
  {
    title: "Regenerative Location Scout",
    desc: "Identifies and manages locations with community and ecological protocols. Ensures post-production restoration.",
    icon: MapPin
  },
  {
    title: "Green Tech Supplier",
    desc: "Supplies solar rigs, LED grids, water stations, and EV transport to productions. A B2B business opportunity.",
    icon: Zap
  },
];

export default function Cohort() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* Climate Cohort Section */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="space-y-6"
              >
                <motion.div variants={fadeUp} className="section-label">Climate Cohort</motion.div>
                <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black font-heading text-foreground leading-tight">
                  Make the Film <br />the World <span className="text-primary italic">Needs Right Now</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
                  Each cycle, Green Film Africa brings together a curated cohort of African filmmakers to co-create a groundbreaking work centred on climate change, sustainability, and Earth regeneration.
                </motion.p>
                
                <div className="space-y-4 pt-4">
                  {themes.map((theme) => (
                    <motion.div 
                      key={theme.label}
                      variants={fadeUp}
                      className="flex gap-4 p-4 rounded-2xl bg-sidebar border border-border/60 hover:border-primary/20 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary/5 transition-colors">
                        <theme.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">{theme.label}</h4>
                        <p className="text-xs text-muted-foreground">{theme.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-primary/5 border border-primary/20 rounded-[2rem] p-10 shadow-sm"
              >
                <h3 className="text-3xl font-black font-heading text-foreground mb-6">This Season's Cohort</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Applications are open for our inaugural collaborative production. We are looking for directors, writers, DPs, producers, editors, and sound designers who are ready to make something extraordinary together — using Africa's natural green advantage as their studio.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {formats.map((f) => (
                    <span key={f} className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-widest rounded-full">
                      {f}
                    </span>
                  ))}
                </div>

                <Button asChild size="lg" className="w-full rounded-full h-14 font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]">
                  <Link href="/contact">Apply for the Cohort</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* New Roles Section */}
        <section className="py-24 md:py-32 bg-sidebar border-y border-border/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="section-label mx-auto">New Roles. Real Jobs.</motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground mt-4 mb-6 leading-tight">
                  This Is a <span className="text-primary italic">Career Conversation</span>, <br className="hidden md:block" /> Not Just an Ethics One
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                  Green production is creating an entirely new category of film industry roles. Green Film Africa trains for these and helps connect talent to opportunity.
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {roles.map((role, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-8 rounded-3xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    <role.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4">{role.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {role.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/5 text-primary font-bold px-8">
                <Link href="/education">Explore Training Modules <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}