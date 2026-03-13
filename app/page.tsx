import AboutUs from "@/components/Sections/About";
import ConsultationForm from "@/components/Sections/ConsultationForm";
import CountrySlider from "@/components/Sections/CountrySlider";
import FieldsSection from "@/components/Sections/FieldsSection";
import HeroSection from "@/components/Sections/Hero";
import JourneyMap from "@/components/Sections/journeymap";
import SupportSection from "@/components/Sections/SupportSection";
import WhyChooseEzone from "@/components/Sections/whychoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseEzone />
      <SupportSection />
      <AboutUs />
      <ConsultationForm />
      <CountrySlider />
      <FieldsSection />
      <JourneyMap />
    </div>
  );
}
