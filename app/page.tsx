import { HeroSection } from "@/features/home/HeroSection";
import { ServicesGrid } from "@/features/home/ServicesGrid";
import { ValuesSection } from "@/features/home/ValuesSection";
import { CTABanner } from "@/components/shared/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <ValuesSection />
      <CTABanner />
    </>
  );
}
