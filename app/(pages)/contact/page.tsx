import { ContactHero } from "@/features/contact/ContactHero";
import { LocationsPreview } from "@/features/about/LocationsPreview";
import { CTABanner } from "@/components/shared/CTABanner";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-10 lg:gap-6 py-10 lg:py-16">
      <ContactHero />
      <LocationsPreview />
      <CTABanner />
    </div>
  );
}
