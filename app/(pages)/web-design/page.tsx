import { DesignPageHero } from "@/components/shared/DesignPageHero";
import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
import { ServicesCrossLinks } from "@/components/shared/ServicesCrossLinks";
import { CTABanner } from "@/components/shared/CTABanner";

const projects = [
  {
    name: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
    image: "/assets/web-design/desktop/image-express.jpg",
  },
  {
    name: "Transfer",
    description:
      "Site for low-cost money transfers and sending money within seconds",
    image: "/assets/web-design/desktop/image-transfer.jpg",
  },
  {
    name: "Photon",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: "/assets/web-design/desktop/image-photon.jpg",
  },
  {
    name: "Builder",
    description: "Connects users with local contractors based on their location",
    image: "/assets/web-design/desktop/image-builder.jpg",
  },
  {
    name: "Blogr",
    description: "Blogr is a platform for creating an online blog or publication",
    image: "/assets/web-design/desktop/image-blogr.jpg",
  },
  {
    name: "Camp",
    description:
      "Get expert training in coding, data, design, and digital marketing",
    image: "/assets/web-design/desktop/image-camp.jpg",
  },
];

export default function WebDesignPage() {
  return (
    <div className="flex flex-col gap-10 lg:gap-6 py-10 lg:py-16">
      <DesignPageHero
        title="Web Design"
        subtitle="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        patternSrc="/assets/web-design/desktop/bg-pattern-intro-web.svg"
      />
      <ProjectsGrid projects={projects} />
      <ServicesCrossLinks
        links={[
          {
            name: "App Design",
            href: "/app-design",
            image: "/assets/home/desktop/image-app-design.jpg",
          },
          {
            name: "Graphic Design",
            href: "/graphic-design",
            image: "/assets/home/desktop/image-graphic-design.jpg",
          },
        ]}
      />
      <CTABanner />
    </div>
  );
}
