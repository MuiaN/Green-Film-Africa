import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const stats = [
  { num: "43M t", label: "CO₂/year from the global film & TV industry" },
  { num: "2,840t", label: "CO₂ per blockbuster — equal to 3,700 acres of forest" },
  { num: "80–90%", label: "of Kenya's electricity already from renewables" },
  { num: "17", label: "UN SDGs that green film production directly advances" },
];

export function StatsBar() {
  return (
    <section className="py-12 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              className="flex flex-col items-center text-center space-y-2"
            >
              <span className="text-3xl md:text-4xl font-black font-heading text-primary">
                {stat.num.split(' ').map((part, index) => (
                  part.includes('t') ? <span key={index} className="text-xl align-top">{part}</span> : part
                ))}
              </span>
              <p className="text-xs md:text-sm text-muted-foreground font-medium max-w-[200px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}