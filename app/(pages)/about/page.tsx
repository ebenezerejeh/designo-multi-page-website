import { AboutHero } from "@/features/about/AboutHero";
import { SplitSection } from "@/components/shared/SplitSection";
import { LocationsPreview } from "@/features/about/LocationsPreview";
import { CTABanner } from "@/components/shared/CTABanner";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10 lg:gap-6 py-10 lg:py-16">
      <AboutHero />

      <SplitSection
        imageSrc="/assets/about/desktop/image-world-class-talent.jpg"
        imageAlt="Designer reviewing mood board"
        heading="World-class talent"
        paragraphs={[
          "We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.",
          "Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand's story and mission.",
        ]}
        patternSrc="/assets/shared/desktop/bg-pattern-three-circles.svg"
      />

      <LocationsPreview />

      <SplitSection
        imageSrc="/assets/about/desktop/image-real-deal.jpg"
        imageAlt="Hands pinning photos to a mood board"
        reversed
        heading="The real deal"
        paragraphs={[
          "As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.",
          "We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.",
        ]}
        patternSrc="/assets/shared/desktop/bg-pattern-two-circles.svg"
      />

      <CTABanner />
    </div>
  );
}
