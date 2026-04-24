import { DesignPageHero } from "@/components/shared/DesignPageHero";
import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
import { ServicesCrossLinks } from "@/components/shared/ServicesCrossLinks";
import { CTABanner } from "@/components/shared/CTABanner";

const projects = [
  {
    name: "Tim Brown",
    description:
      "A book cover designed for Tim Brown's new release, 'Change'",
    image: "/assets/graphic-design/desktop/image-change.jpg",
  },
  {
    name: "Boxed Water",
    description: "A simple packaging concept made for Boxed Water",
    image: "/assets/graphic-design/desktop/image-boxed-water.jpg",
  },
  {
    name: "Science!",
    description:
      "A poster made in collaboration with the Federal Art Project",
    image: "/assets/graphic-design/desktop/image-science.jpg",
  },
];

export default function GraphicDesignPage() {
  return (
    <div className="flex flex-col gap-10 lg:gap-6 py-10 lg:py-16">
      <DesignPageHero
        title="Graphic Design"
        subtitle="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        patternSrc="/assets/graphic-design/desktop/bg-pattern-intro-graphic.svg"
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
            name: "Web Design",
            href: "/web-design",
            image: "/assets/home/desktop/image-web-design-small.jpg",
          },
        ]}
      />
      <CTABanner />
    </div>
  );
}
