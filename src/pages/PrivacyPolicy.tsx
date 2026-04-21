import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-heading text-foreground">Privacy Policy</h1>
              </div>

              <div className="prose prose-green max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p className="text-lg font-medium text-foreground">Last updated: May 2024</p>
                
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">1. Introduction</h2>
                  <p>
                    Green Film Africa ("we", "our", or "us"), based in Nairobi, Kenya, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our environmental initiatives.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">2. Information We Collect</h2>
                  <p>
                    We collect information that you provide directly to us through our contact forms, partnership enquiries, and volunteer sign-ups. This may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Name and contact details (email, phone number)</li>
                    <li>Organization or company name</li>
                    <li>Professional role or interest in our programs</li>
                    <li>Any other information you choose to provide in your message</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">3. Kenyan Data Protection Compliance</h2>
                  <p>
                    In accordance with the <strong>Kenya Data Protection Act, 2019</strong>, we process your personal data based on your consent and our legitimate interest in fulfilling our environmental mission. You have the right to access, rectify, or request the deletion of your personal data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">4. How We Use Your Information</h2>
                  <p>
                    We use the information collected to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Respond to your enquiries and provide information about our services.</li>
                    <li>Coordinate environmental cleanup and reforestation activities.</li>
                    <li>Document our impact through film and storytelling (with your consent where required).</li>
                    <li>Comply with legal and regulatory obligations in Kenya.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">5. Contact Us</h2>
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <p className="mt-2 font-semibold text-primary">
                    info@greenfilmafrica.org<br />
                    Nairobi, Kenya
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}