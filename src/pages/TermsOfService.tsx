import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function TermsOfService() {
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
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black font-heading text-foreground">Terms of Service</h1>
              </div>

              <div className="prose prose-green max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p className="text-lg font-medium text-foreground">Last updated: May 2024</p>
                
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the Green Film Africa website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">2. Description of Services</h2>
                  <p>
                    Green Film Africa provides environmental restoration services, including but not limited to river cleanups, reforestation, organic manure production, and documentary filmmaking. All services are provided subject to availability and specific project agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">3. User Conduct</h2>
                  <p>
                    When interacting with our website or participating in our community programs, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide accurate and truthful information in all forms.</li>
                    <li>Not engage in any activity that could damage or interfere with our environmental mission.</li>
                    <li>Respect the local communities and ecosystems where we operate.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">4. Intellectual Property</h2>
                  <p>
                    All content on this website, including films, text, graphics, logos, and images, is the property of Green Film Africa or its content suppliers and is protected by Kenyan and international intellectual property laws. Unauthorized use of this content is strictly prohibited.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">5. Limitation of Liability</h2>
                  <p>
                    While we strive to provide accurate information and impactful environmental actions, Green Film Africa shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">6. Governing Law</h2>
                  <p>
                    These Terms of Service shall be governed by and construed in accordance with the <strong>laws of the Republic of Kenya</strong>. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Nairobi, Kenya.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">7. Contact</h2>
                  <p>
                    For any enquiries regarding these terms, please contact:
                  </p>
                  <p className="mt-2 font-semibold text-primary">
                    legal@greenfilmafrica.org
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