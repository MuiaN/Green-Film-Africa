import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export function ESGSection() {
  return (
    <section id="esg" className="py-24 md:py-32 bg-sidebar relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Industry Standards
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground mb-6 leading-tight">
              ESG — The Framework That Controls<br />Who Gets to <span className="text-primary italic">Film in Africa</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              Netflix, BBC, and global brands now require ESG compliance from every production company they hire. Understanding this framework is a career necessity.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeUp} className="esg-card p-8 rounded-2xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-md transition-all group">
            <div className="esg-letter text-primary font-heading font-black text-6xl mb-4">E</div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Environmental</h3>
            <p className="text-muted-foreground italic text-sm leading-relaxed mb-6">How a production manages its impact on the natural world</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>Carbon emissions and energy use (Scopes 1, 2 &amp; 3)</li>
              <li>Waste generation and disposal methods</li>
              <li>Water consumption and pollution</li>
              <li>Impact on biodiversity and ecosystems</li>
              <li>Use of hazardous materials on set</li>
              <li>Diesel generator usage — Africa's #1 culprit</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="esg-card p-8 rounded-2xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-md transition-all group">
            <div className="esg-letter text-accent font-heading font-black text-6xl mb-4">S</div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Social</h3>
            <p className="text-muted-foreground italic text-sm leading-relaxed mb-6">How a production manages relationships with people</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>Fair wages and safe working conditions for all crew</li>
              <li>Diversity, equity, and inclusion in hiring</li>
              <li>Community engagement and benefit-sharing</li>
              <li>Respect for Indigenous land rights at locations</li>
              <li>Mental health and crew welfare on set</li>
              <li>Hiring local crew over flying in foreigners</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="esg-card p-8 rounded-2xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-md transition-all group">
            <div className="esg-letter text-blue-500 font-heading font-black text-6xl mb-4">G</div> {/* Using Tailwind's blue for G */}
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">Governance</h3>
            <p className="text-muted-foreground italic text-sm leading-relaxed mb-6">How a production makes decisions — its accountability structure</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>Transparent financial reporting and anti-corruption</li>
              <li>Clear written sustainability commitments and policies</li>
              <li>Named accountable Green Consultant on every production</li>
              <li>Compliance with environmental and labour law</li>
              <li>Ethical supply chain and vendor screening</li>
              <li>Green Production Plan signed before Day 1</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}