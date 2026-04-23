import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Search, 
  Handshake, 
  BarChart3, 
  Plus, 
  Gamepad2,
  Shirt,
  Lightbulb,
  Camera,
  Mic2,
  Construction,
  Truck,
  Utensils,
  Monitor
} from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const steps = [
  {
    num: "1",
    title: "List",
    desc: "Upload items you have available — for free, rental, or sale",
    icon: Plus
  },
  {
    num: "2",
    title: "Search",
    desc: "Find what your production needs from verified African suppliers",
    icon: Search
  },
  {
    num: "3",
    title: "Connect",
    desc: "Agree terms, transact, and log your sustainability impact",
    icon: Handshake
  },
  {
    num: "4",
    title: "Report",
    desc: "Track waste diverted, carbon saved, and resources circulated",
    icon: BarChart3
  }
];

const categories = [
  { icon: Gamepad2, label: "Props", desc: "Furniture, hero items, period pieces" },
  { icon: Shirt, label: "Wardrobe", desc: "Costumes, uniforms, period & contemporary" },
  { icon: Lightbulb, label: "Lighting", desc: "LED panels, HMI, practicals, stands" },
  { icon: Camera, label: "Camera Gear", desc: "Bodies, lenses, rigs, monitors" },
  { icon: Mic2, label: "Sound", desc: "Boom poles, wireless kits, recorders" },
  { icon: Construction, label: "Art Department", desc: "Set builds, flats, paint, scenic materials" },
  { icon: Truck, label: "Unit & Vehicles", desc: "Unit trucks, camera cars, production vans" },
  { icon: Utensils, label: "Catering", desc: "Mess equipment, tables, chairs, serving ware" },
  { icon: Monitor, label: "Post & Tech", desc: "Editing systems, drives, colour grading suites" },
];

export default function PropBank() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-20">
        
        {/* PropBank Hero */}
        <section className="py-20 md:py-28 bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="space-y-6"
              >
                <motion.div variants={fadeUp} className="section-label">PropBank™</motion.div>
                <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black font-heading text-foreground leading-tight">
                  Africa's Circular <br /><span className="text-primary italic">Film Resource</span> Database
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
                  Why manufacture new when we can share what exists? PropBank™ is the continent's first circular economy platform for film resources — connecting productions that have with productions that need.
                </motion.p>
                <motion.p variants={fadeUp} className="text-sm font-medium text-foreground/70">
                  Going green saves <strong className="text-primary">15–20%</strong> on average production costs. Fuel, waste disposal, and logistics are all cheaper when you plan them properly. <span className="text-primary font-bold">Sustainability pays.</span>
                </motion.p>
                <motion.div variants={fadeUp} className="pt-4">
                  <Button asChild size="lg" className="rounded-full px-8 h-14 font-bold shadow-lg shadow-primary/20">
                    <Link href="/contact">Register Your Production</Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-primary/5 border border-primary/20 rounded-[2rem] p-8 md:p-10 shadow-sm"
              >
                <h3 className="text-2xl font-black font-heading text-foreground mb-8">How PropBank™ Works</h3>
                <div className="space-y-6">
                  {steps.map((step) => (
                    <div key={step.num} className="flex gap-5 group">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm">
                        {step.num}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-primary text-lg">{step.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 md:py-28 bg-sidebar border-y border-border/40">
          <div className="container mx-auto px-4 md:px-6">
            <div className="section-label mb-8">Resource Categories</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {categories.map((cat) => (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white/40 border border-primary/10 hover:bg-primary/5 hover:border-primary/30 hover:scale-[1.02] transition-all cursor-pointer group"
                >
                  <div className="text-2xl shrink-0">
                    <cat.icon className="w-8 h-8 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">{cat.label}</h4>
                    <p className="text-[0.8rem] text-muted-foreground leading-snug">{cat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ESG Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mb-16">
              <div className="section-label">Industry Standards</div>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-foreground mt-4 mb-6 leading-tight">
                ESG — The Framework That Controls<br />Who Gets to <span className="text-primary italic">Film in Africa</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Netflix, BBC, and global brands now require ESG compliance from every production company they hire. Understanding this framework is a career necessity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl border border-border/60 bg-white">
                <div className="text-primary font-heading font-black text-6xl mb-6">E</div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">Environmental</h3>
                <p className="text-sm text-muted-foreground italic mb-6">How a production manages its impact on the natural world</p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-2 font-medium">· Carbon emissions and energy use (Scopes 1, 2 & 3)</li>
                  <li className="flex gap-2 font-medium">· Waste generation and disposal methods</li>
                  <li className="flex gap-2 font-medium">· Water consumption and pollution</li>
                  <li className="flex gap-2 font-medium">· Impact on biodiversity and ecosystems</li>
                  <li className="flex gap-2 font-medium">· Use of hazardous materials on set</li>
                  <li className="flex gap-2 font-medium text-destructive">· Diesel generator usage — Africa's #1 culprit</li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl border border-border/60 bg-white">
                <div className="text-accent font-heading font-black text-6xl mb-6">S</div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">Social</h3>
                <p className="text-sm text-muted-foreground italic mb-6">How a production manages relationships with people</p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-2 font-medium">· Fair wages and safe working conditions for all crew</li>
                  <li className="flex gap-2 font-medium">· Diversity, equity, and inclusion in hiring</li>
                  <li className="flex gap-2 font-medium">· Community engagement and benefit-sharing</li>
                  <li className="flex gap-2 font-medium">· Respect for Indigenous land rights at locations</li>
                  <li className="flex gap-2 font-medium">· Mental health and crew welfare on set</li>
                  <li className="flex gap-2 font-medium">· Hiring local crew over flying in foreigners</li>
                </ul>
              </div>
              <div className="p-8 rounded-3xl border border-border/60 bg-white">
                <div className="text-blue-500 font-heading font-black text-6xl mb-6">G</div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">Governance</h3>
                <p className="text-sm text-muted-foreground italic mb-6">How a production makes decisions — its accountability structure</p>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex gap-2 font-medium">· Transparent financial reporting and anti-corruption</li>
                  <li className="flex gap-2 font-medium">· Clear written sustainability commitments and policies</li>
                  <li className="flex gap-2 font-medium">· Named accountable Green Consultant on every production</li>
                  <li className="flex gap-2 font-medium">· Compliance with environmental and labour law</li>
                  <li className="flex gap-2 font-medium">· Ethical supply chain and vendor screening</li>
                  <li className="flex gap-2 font-medium">· Green Production Plan signed before Day 1</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}