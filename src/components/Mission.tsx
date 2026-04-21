import { motion } from "framer-motion";
import { Globe, Droplets, TreePine } from "lucide-react";

export function Mission() {
  return (
    <section id="mission" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Mission</h2>
              <h3 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-foreground mb-6 leading-tight">
                Every cleanup tells a story. <br/>
                <span className="text-black/40">Every story drives change.</span>
              </h3>
              
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed mb-10">
                <p>
                  We are on a mission to restore Africa's most degraded environments — cleaning up polluted rivers, forests, and urban spaces while documenting the journey through powerful storytelling.
                </p>
                <p className="font-medium text-foreground/90 border-l-4 border-accent pl-6 py-2">
                  Africa holds 25% of the world's biodiversity. We protect and restore these irreplaceable ecosystems, partnering with local communities to reverse the tide of environmental destruction.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Droplets className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">River Restoration</h4>
                    <p className="text-sm text-foreground/60">Cleaning vital waterways supporting local communities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Global Impact</h4>
                    <p className="text-sm text-foreground/60">Documenting our efforts to inspire worldwide action.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img 
                src="/images/mission-bg.png" 
                alt="River restoration in Africa" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                  <div className="flex items-center gap-4 mb-2">
                    <TreePine className="w-8 h-8 text-accent" />
                    <div className="text-3xl font-black font-heading">25%</div>
                  </div>
                  <p className="text-sm text-white/80 font-medium">Of global biodiversity is held in Africa's ecosystems. It's our duty to protect it.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}