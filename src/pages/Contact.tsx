import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Leaf, CheckCircle2, Loader2 } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "info@greenfilmafrica.org",
    href: "mailto:info@greenfilmafrica.org",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Nairobi, Kenya",
    href: "#",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+254 (0) 700 000 000",
    href: "tel:+254700000000",
  },
];

type FormState = {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-20">

        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
              >
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <Leaf className="w-4 h-4" /> Get in Touch
                </motion.div>
                <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black font-heading text-foreground leading-tight mb-6">
                  Let's build a <span className="text-primary">greener Africa</span> together.
                </motion.h1>
                <motion.p variants={fadeUp} className="text-xl text-muted-foreground leading-relaxed">
                  Whether you are a corporation looking to partner, an NGO seeking collaboration, a government body exploring policy, or an individual ready to contribute — we want to hear from you.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1200" 
                    alt="Vibrant African landscape" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-sidebar">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-3 gap-12">

              {/* Info */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="lg:col-span-1 space-y-8"
              >
                <motion.div variants={fadeUp}>
                  <h2 className="text-2xl font-black font-heading text-foreground mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Reach out directly or fill in the form and our team will respond within 2 business days.
                  </p>
                </motion.div>

                <motion.div variants={fadeUp} className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border/60 hover:border-primary/30 hover:shadow-sm transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                        <p className="text-sm font-semibold text-foreground">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} className="p-6 rounded-2xl bg-primary text-white">
                  <h3 className="font-heading font-bold text-lg mb-3">Partnership Enquiries</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    For corporate partnerships, sponsorships, and large-scale collaboration, please reach out to our partnerships team at{" "}
                    <a href="mailto:partners@greenfilmafrica.org" className="text-accent font-semibold hover:underline">
                      partners@greenfilmafrica.org
                    </a>
                  </p>
                </motion.div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-2 bg-white rounded-2xl border border-border/60 p-8 md:p-10 shadow-sm"
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-10 h-10 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-black font-heading text-foreground mb-3">Message Received</h3>
                      <p className="text-muted-foreground max-w-md">
                        Thank you for reaching out. Our team will review your message and get back to you within 2 business days.
                      </p>
                    </div>
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", organization: "", subject: "", message: "" });
                      }}
                      variant="outline"
                      className="rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="mb-6">
                      <h2 className="text-2xl font-black font-heading text-foreground mb-1">Send Us a Message</h2>
                      <p className="text-muted-foreground text-sm">Fields marked with * are required.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Field label="Full Name *" error={errors.name}>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={inputClass(!!errors.name)}
                        />
                      </Field>
                      <Field label="Email Address *" error={errors.email}>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={inputClass(!!errors.email)}
                        />
                      </Field>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Field label="Organization">
                        <input
                          type="text"
                          name="organization"
                          value={form.organization}
                          onChange={handleChange}
                          placeholder="Your organization (optional)"
                          className={inputClass(false)}
                        />
                      </Field>
                      <Field label="Subject">
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className={inputClass(false) + " cursor-pointer"}
                        >
                          <option value="">Select a subject</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="services">Service Enquiry</option>
                          <option value="media">Media and Press</option>
                          <option value="volunteer">Volunteering</option>
                          <option value="donation">Donation and Funding</option>
                          <option value="other">Other</option>
                        </select>
                      </Field>
                    </div>

                    <Field label="Your Message *" error={errors.message}>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us about your interest, project, or question..."
                        className={inputClass(!!errors.message) + " resize-none"}
                      />
                    </Field>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full rounded-full h-14 text-base font-semibold shadow-md shadow-primary/20"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 rounded-xl border text-sm bg-white text-foreground placeholder:text-muted-foreground outline-none transition-all ${
    hasError
      ? "border-destructive focus:ring-2 focus:ring-destructive/20"
      : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
  }`;
}
