import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Calendar } from "lucide-react";

const months = [
  {
    name: "February",
    events: [
      { date: "Feb 2", title: "World Wetlands Day" },
      { date: "Feb 27", title: "World Polar Bear Day" },
    ],
  },
  {
    name: "March",
    events: [
      { date: "Mar 3", title: "World Wildlife Day" },
      { date: "Mar 8", title: "International Women's Day" },
      { date: "Mar 18", title: "Global Recycling Day" },
      { date: "Mar 21", title: "International Day of Forests" },
      { date: "Mar 22", title: "World Water Day" },
      { date: "Mar 25", title: "Earth Hour" },
    ],
  },
  {
    name: "April",
    events: [
      { date: "Apr", title: "Earth Month Challenge" },
      { date: "Apr 7", title: "World Health Day" },
      { date: "Apr 22", title: "Earth Day" },
    ],
  },
  {
    name: "May",
    events: [
      { date: "May", title: "Mental Health Awareness Month ★" },
      { date: "May 20", title: "World Bee Day" },
      { date: "May 22", title: "World Biodiversity Day" },
      { date: "May 17", title: "Endangered Species Day" },
    ],
  },
  {
    name: "June",
    events: [
      { date: "Jun 5", title: "World Environment Day" },
      { date: "Jun 8", title: "World Oceans Day" },
      { date: "Jun 17", title: "World Day vs Desertification" },
      { date: "Jun 22", title: "World Rainforest Day" },
    ],
  },
  {
    name: "July",
    events: [
      { date: "Jul", title: "Plastic Free July ★" },
      { date: "Jul 11", title: "World Population Day" },
      { date: "Jul 29", title: "World Tiger Day" },
    ],
  },
  {
    name: "August",
    events: [
      { date: "Aug 9", title: "Indigenous Peoples Day" },
      { date: "Aug 10", title: "World Lion Day" },
      { date: "Aug 12", title: "World Elephant Day" },
    ],
  },
  {
    name: "Sep – Dec",
    events: [
      { date: "Sep 15", title: "World Cleanup Day" },
      { date: "Oct 4", title: "World Animal Day" },
      { date: "Nov 6", title: "War and Environment Day" },
      { date: "Dec 5", title: "World Soil Day" },
    ],
  },
];

export function GreenDays() {
  return (
    <section id="calendar" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" /> Content Calendar
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground mb-6">
            Key Green Days to <span className="text-primary italic">Mark & Make</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
            A production calendar aligned to global environmental observances — plan your shoots, campaigns, and community screenings around the moments that matter most.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {months.map((month) => (
            <motion.div key={month.name} variants={fadeUp} className="p-6 rounded-2xl border border-border/60 bg-sidebar hover:border-primary/20 transition-all group">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4 pb-2 border-b border-primary/10">{month.name}</h4>
              <ul className="space-y-3">
                {month.events.map((event) => (
                  <li key={event.title} className="text-sm leading-snug">
                    <strong className="text-foreground">{event.date}</strong>
                    <span className="text-muted-foreground"> — {event.title}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}