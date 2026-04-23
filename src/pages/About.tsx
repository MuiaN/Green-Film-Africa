import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Leaf, Globe, Users, Award, TreePine, Heart, Shield, Zap, Target, Trophy, Briefcase, BookOpen, Mail } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const values = [
  {
    icon: Leaf,
    title: "Care for Earth",
    desc: "Provision for all life systems to continue and multiply. This is the first principle of our regenerative mission.",
  },
  {
    icon: Heart,
    title: "Care for People",
    desc: "Provision for people to access those resources necessary for their existence, ensuring crew welfare and community stewardship.",
  },
  {
    icon: Target,
    title: "Fair Share",
    desc: "Setting limits to population and consumption. By governing our own needs, we can set resources aside to further the above principles.",
  },
];

const principles = [
  { num: "01", title: "Observe & Interact", desc: "Take time to engage with the story's ecosystem before jumping to solutions." },
  { num: "02", title: "Catch & Store Energy", desc: "Capture momentum, talent, and resources at their peak — solar on set, skills in crew." },
  { num: "03", title: "Obtain a Yield", desc: "Every production must deliver value to cast, crew, community, and Earth." },
  { num: "04", title: "Self-Regulate", desc: "Build feedback and accountability systems into every production cycle." },
  { num: "05", title: "Use Renewables", desc: "Solar power on set, biodegradable materials, electric transport, mains over generators." },
  { num: "06", title: "Produce No Waste", desc: "Every prop, set piece, and resource has a next life planned — that is PropBank™." },
  { num: "07", title: "Design from Patterns", desc: "Understand the big picture of African film before zooming in on a single production." },
  { num: "08", title: "Integrate, Don't Segregate", desc: "Connect filmmakers, educators, ecologists, and communities into one living system." },
  { num: "09", title: "Use Slow Solutions", desc: "Deep impact over quick wins — grow culture, not just content." },
  { num: "10", title: "Use & Value Diversity", desc: "Every voice, language, and lens strengthens the ecosystem we are building." },
  { num: "11", title: "Use Edges", desc: "The most creative work happens at the borders of disciplines and communities." },
  { num: "12", title: "Creatively Use Change", desc: "The climate crisis is the invitation to tell the most important stories ever made." },
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
                <div className="section-label mb-2">Who We Are</div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black font-heading text-foreground leading-tight mb-8">
                  Africa's First <span className="text-primary italic">Regenerative</span> Film Organisation
                </motion.h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <motion.p variants={fadeUp}>
                    Green Film Africa is a pan-African sustainable filmmaking initiative operating under the parent company <strong>Brooks Media Ltd</strong>. We are a team of experts dedicated to creating viable networks and solutions for a sustainable creative industry in Africa.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    Our strategic and systemic solutions are tailored to production companies, broadcasters, service providers, associations, and institutions. We specialise in the exchange and expansion of know-how relevant to the creative industries, consultancy and project management for green film production, CO₂ expertise and resource management, and training in sustainable project management.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    We believe the future of the African film industry lies in finding eco-friendly solutions that benefit <strong>both the environment and the stakeholders</strong>. Our goal is to connect you to green film production experts on the continent, ensuring that your production process is environmentally friendly and regenerative — not just sustainable.
                  </motion.p>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  {["Care for Earth", "Care for People", "Fair Share"].map((ethic) => (
                    <span key={ethic} className="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-primary font-bold text-sm uppercase tracking-wider">{ethic}</span>
                  ))}
                </div>
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
                  To build a regenerative African film industry that nurtures the earth, empowers people, and tells the stories our world most urgently needs — from the classroom to the cinema, from the prop store to the screen.
                </motion.p>
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                  We specialize in the exchange and expansion of know-how relevant to the creative industries, consultancy for green production, and CO₂ expertise.
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground mb-6">
                  The Vision
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We believe the future of the African film industry lies in eco-friendly solutions. Our goal is to connect you to green film production experts on the continent, ensuring your process is regenerative — not just sustainable.
                </motion.p>
                <motion.div variants={fadeUp} className="flex items-center gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground/80">
                    A Pan-African movement with deep roots in <strong className="text-primary">Nairobi, Kenya</strong>.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-2"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-primary/5 flex items-center justify-center p-12 border border-primary/10">
                  <img 
                    src="/Green_Film_Africa_Logo.png" 
                    alt="Green Film Africa Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="lg:col-span-3 space-y-6"
              >
                <motion.div variants={fadeUp} className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-foreground text-sm font-bold uppercase tracking-widest">
                  Founder & Lead Consultant
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground">
                  Justine Wambui Gitahi
                </motion.h2>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                  {["Climate Reality Leader", "Permaculture Designer", "Albert Certified", "Terra.do Ambassador", "Green The Bid Member"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-sidebar border border-border text-xs font-semibold rounded-full">{tag}</span>
                  ))}
                </motion.div>
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                  Justine is the driving force behind Green Film Africa's vision. An Albert-certified Green Film Producer and Climate Fresk Facilitator, she bridges the gap between creative storytelling and rigorous environmental science. Her work focuses on systemic transformation, ensuring that the camera becomes a tool for stewardship across the African continent.
                </motion.p>
                <motion.div variants={fadeUp} className="pt-4 flex flex-col sm:flex-row gap-6 text-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Mail className="w-4 h-4 text-primary"/></div>
                      info@greenfilmafrica.org
                    </div>
                    <div className="text-muted-foreground pl-10">terrateah@gmail.com</div>
                  </div>
                  <div className="flex items-start gap-2 text-foreground font-medium">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"><Globe className="w-4 h-4 text-primary"/></div>
                    +254 119 938 228
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* African Advantage */}
        <section className="py-20 md:py-28 bg-sidebar">
          <div className="container mx-auto px-4 md:px-6 text-center mb-16">
            <div className="section-label mx-auto">The African Advantage</div>
            <h2 className="text-4xl md:text-5xl font-black font-heading text-foreground mt-4">Kenya Is Already One of the <span className="text-primary italic">Greenest</span> Places on Earth</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-6 text-lg">Our home base provides a competitive edge for sustainable production that few other locations globally can match.</p>
          </div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="p-8 rounded-2xl bg-white border border-border/60 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto"><Zap className="w-8 h-8 text-primary"/></div>
                <h4 className="text-3xl font-black font-heading text-foreground">80–90%</h4>
                <p className="text-sm text-muted-foreground font-medium">Of Kenya's electricity is derived from renewable sources: geothermal, hydro, wind, and solar.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-border/60 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto"><Leaf className="w-8 h-8 text-accent"/></div>
                <h4 className="text-3xl font-black font-heading text-foreground">0.31t</h4>
                <p className="text-sm text-muted-foreground font-medium">CO₂ per capita in Kenya, compared to 7.7t in Germany. Our production baseline is naturally cleaner.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-border/60 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto"><Shield className="w-8 h-8 text-primary"/></div>
                <h4 className="text-3xl font-black font-heading text-foreground">#1</h4>
                <p className="text-sm text-muted-foreground font-medium">Africa's geothermal energy leader — Olkaria alone powers millions.</p>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-border/60 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto"><Award className="w-8 h-8 text-accent"/></div>
                <h4 className="text-3xl font-black font-heading text-foreground">30%</h4>
                <p className="text-sm text-muted-foreground font-medium">Targeted emission reduction by 2030 under Kenya's NDC. We are aligned with national climate policy.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-6 p-6 rounded-2xl bg-white border border-border/60 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><Trophy className="w-6 h-6 text-primary"/></div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-2">Lead the Global Conversation</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">African storytellers can become the world's model for sustainable production — not followers. The infrastructure is already here.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-2xl bg-white border border-border/60 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><Briefcase className="w-6 h-6 text-primary"/></div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-2">Win International Commissions</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Netflix, BBC, and global brands now require ESG compliance from every production company they hire. Kenya's clean grid is a competitive edge.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-2xl bg-white border border-border/60 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><Leaf className="w-6 h-6 text-primary"/></div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-2">Regenerate Your Locations</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Every shoot can restore the landscape it films — not damage it. Green film production creates new jobs in local sectors.</p>
                </div>
              </div>
              <div className="flex gap-6 p-6 rounded-2xl bg-white border border-border/60 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0"><BookOpen className="w-6 h-6 text-primary"/></div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-2">Tell the Stories That Matter</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">The IPCC identifies media as a powerful tool for changing behaviour. We tell defining climate stories of this generation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-white" id="ethics">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-16 max-w-2xl"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground mb-4">
                The Permaculture Ethics
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground">
                Our work is guided by three simple but profound ethical pillars that ensure regeneration in everything we touch.
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

        {/* Principles */}
        <section className="py-20 md:py-28 bg-white border-t border-border/60">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-16 text-center max-w-3xl mx-auto"
            >
              <div className="section-label mx-auto">Our Design System</div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black font-heading text-foreground mt-4 mb-4">
                12 Permaculture Principles Applied to <span className="text-primary">Film Production</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
                We apply systemic design principles to every production, workshop, and organisational decision we make.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {principles.map((p) => (
                <motion.div
                  key={p.num}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-border/60 bg-white hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <span className="text-primary/20 font-heading font-black text-4xl block mb-2 transition-colors group-hover:text-primary/40">{p.num}</span>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
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
