import HeroSection from "@/components/Sections/Hero";
import SupportSection from "@/components/Sections/SupportSection";
import WhyChooseEzone from "@/components/Sections/whychoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseEzone />
      <SupportSection />
    </div>
  );
}
