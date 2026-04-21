import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Users, CheckCircle2 } from "lucide-react";

export function PartnershipForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="partner" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-sidebar rounded-[2.5rem] overflow-hidden shadow-sm border border-border">
          <div className="grid md:grid-cols-2">
            
            {/* Left side content */}
            <div className="p-10 md:p-16 bg-primary text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 h-full flex flex-col"
              >
                <div className="mb-auto">
                  <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">Partner With Us</h2>
                  <h3 className="text-4xl font-black font-heading tracking-tight mb-6">
                    Join Africa's Green Revolution
                  </h3>
                  <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                    Join a growing network of environmental champions. Whether you're a corporation, NGO, government body, or individual activist, there's a role for you in our regenerative mission.
                  </p>
                </div>

                <div className="space-y-6 mt-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/60 font-medium">Email Us</div>
                      <div className="font-semibold">partners@greenfilmafrica.org</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-foreground/60 font-medium">Network</div>
                      <div className="font-semibold">Join 50+ Global Partners</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side form */}
            <div className="p-10 md:p-16">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold font-heading text-foreground">Message Received!</h4>
                  <p className="text-foreground/70">Thank you for your interest. Our partnership team will be in touch with you shortly.</p>
                  <Button 
                    variant="outline" 
                    className="mt-6"
                    onClick={() => setStatus("idle")}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
                    <Input 
                      id="name" 
                      required 
                      placeholder="Jane Doe" 
                      className="h-12 bg-white border-border/60 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      placeholder="jane@organization.org"
                      className="h-12 bg-white border-border/60 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org" className="text-foreground/80">Organization</Label>
                    <Input 
                      id="org" 
                      required 
                      placeholder="NGO or Company Name"
                      className="h-12 bg-white border-border/60 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground/80">Message</Label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="How would you like to collaborate?"
                      className="min-h-[120px] bg-white border-border/60 focus:border-primary resize-y"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="w-full h-12 rounded-xl text-base font-semibold bg-foreground hover:bg-foreground/90 text-white"
                  >
                    {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}