import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, TreePine } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans overflow-hidden">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-20">
        <section className="py-16 md:py-24 w-full relative">
          {/* Background Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl -z-10 opacity-5">
            <h1 className="text-[20rem] md:text-[30rem] font-black font-heading leading-none select-none">
              404
            </h1>
          </div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="space-y-8"
              >
                {/* Illustration */}
                <div className="flex justify-center relative">
                  <div className="w-48 h-48 rounded-full bg-primary/5 flex items-center justify-center relative">
                    <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
                    <TreePine className="w-20 h-20 text-primary opacity-20" />
                    
                    {/* Floating leaves icons or dots */}
                    <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-accent/30 animate-pulse" />
                    <div className="absolute bottom-8 left-4 w-3 h-3 rounded-full bg-primary/30 animate-bounce" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium mb-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Page Not Found
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black font-heading text-foreground">
                    Off the Beaten Path
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-md mx-auto">
                    It seems the trail you're looking for has been reclaimed by nature or never existed in our ecosystem.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button asChild size="lg" className="rounded-full px-8 font-semibold shadow-lg shadow-primary/20">
                    <Link href="/">
                      <Home className="mr-2 w-5 h-5" /> Return Home
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => window.history.back()} 
                    className="rounded-full px-8 font-semibold border-border/60 hover:bg-muted"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" /> Go Back
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
