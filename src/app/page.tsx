"use client";
import { navItems } from "@/data";
import dynamic from "next/dynamic";

const FloatingNav = dynamic(() => import("@/components/ui/FlotaingNav").then(mod => mod.FloatingNav), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const CardHoverEffectDemo = dynamic(() => import("@/components/CardHoverEffectDemo").then(mod => mod.CardHoverEffectDemo), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });
const NowSection = dynamic(() => import("@/components/NowSection"), { ssr: false });
const ExperienceTimeline = dynamic(() => import("@/components/ExperienceTimeline"), { ssr: false });


const Home = () => {
  return (
    <main className="relative dark:bg-black-100 bg-[#eef2f8] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <ServicesSection />
        <CardHoverEffectDemo />
        <ExperienceTimeline />
        <ContactSection />
        <NowSection />
      </div>
    </main>
  );
};

export default Home;
