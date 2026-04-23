import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Film, Users, Brain } from "lucide-react";

const initiatives = [
  {
    icon: Film,
    title: "Community Screenings",
    desc: "Curated film events designed to spark conversations about mental health, emotional wellbeing, grief, joy, identity, and belonging — held in schools and community centres across Africa.",
  },
  {
    icon: Users,
    title: "Filmmaker Wellness Circles",
    desc: "Safe, facilitated spaces for filmmakers to discuss the emotional and psychological demands of the industry — burnout, creative blocks, and financial stress. We cannot regenerate the earth if we are depleted ourselves.",
  },
  {
    icon: Brain,
    title: "Narrative Therapy Through Film",
    desc: "Workshops that use filmmaking as a therapeutic tool — helping communities process collective trauma, reclaim their stories, and vision new futures for themselves and their land.",
  },
];

export function Wellness() {
  return (
    <section id="wellness" className="py-24 md:py-32 bg-sidebar border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <div className="section-label mx-auto">Mental Health & Wellness</div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground mt-4 mb-6 leading-tight">
            Film as <span className="text-primary italic">Medicine</span> for the Mind
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
            We bring filmmakers and audiences together in shared spaces to experience, discuss, and heal through cinema. The inner landscape matters as much as the outer one.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-8 rounded-2xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}