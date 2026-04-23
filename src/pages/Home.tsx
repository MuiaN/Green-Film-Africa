import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { Mission } from "@/components/Mission";
import { GreenDays } from "@/components/GreenDays";
import { Wellness } from "@/components/Wellness";
import { JoinMovement } from "@/components/JoinMovement";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <Mission />
        <GreenDays />
        <Wellness />
        <JoinMovement />
      </main>
      <Footer />
    </div>
  );
}