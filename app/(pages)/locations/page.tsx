import { LocationEntry } from "@/features/locations/LocationEntry";
import { CTABanner } from "@/components/shared/CTABanner";

export default function LocationsPage() {
  return (
    <div className="flex flex-col gap-10 lg:gap-6 py-10 lg:py-16">
      <LocationEntry
        country="Canada"
        officeName="Designo Central Office"
        address={["3886 Wellington Street", "Toronto, Ontario M9C 3J5"]}
        phone="P : +1 253-863-8967"
        email="M : contact@designo.co"
        mapImage="/assets/locations/desktop/image-map-canada.png"
      />
      <LocationEntry
        country="Australia"
        officeName="Designo AU Office"
        address={["19 Balonne Street", "New South Wales 2443"]}
        phone="P : (02) 6720 9092"
        email="M : contact@designo.au"
        mapImage="/assets/locations/desktop/image-map-australia.png"
        reversed
      />
      <LocationEntry
        country="United Kingdom"
        officeName="Designo UK Office"
        address={["13  Colorado Way", "Rhyd-y-fro SA8 9GA"]}
        phone="P : 078 3115 1400"
        email="M : contact@designo.uk"
        mapImage="/assets/locations/desktop/image-map-united-kingdom.png"
      />
      <CTABanner />
    </div>
  );
}
