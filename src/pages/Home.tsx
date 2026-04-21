import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { WasteToValue } from "@/components/WasteToValue";
import { PartnershipForm } from "@/components/PartnershipForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Mission />
        <WasteToValue />
        <PartnershipForm />
      </main>
      <Footer />
    </div>
  );
}