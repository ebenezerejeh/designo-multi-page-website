import { DesignPageHero } from "@/components/shared/DesignPageHero";
import { ProjectsGrid } from "@/components/shared/ProjectsGrid";
import { ServicesCrossLinks } from "@/components/shared/ServicesCrossLinks";
import { CTABanner } from "@/components/shared/CTABanner";

const projects = [
  {
    name: "Airfilter",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    image: "/assets/app-design/desktop/image-airfilter.jpg",
  },
  {
    name: "Eyecam",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    image: "/assets/app-design/desktop/image-eyecam.jpg",
  },
  {
    name: "Faceit",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
    image: "/assets/app-design/desktop/image-faceit.jpg",
  },
  {
    name: "Todo",
    description:
      "A todo app that features cloud sync with light and dark mode",
    image: "/assets/app-design/desktop/image-todo.jpg",
  },
  {
    name: "Loopstudios",
    description: "A VR experience app made for Loopstudios",
    image: "/assets/app-design/desktop/image-loopstudios.jpg",
  },
];

export default function AppDesignPage() {
  return (
    <div className="flex flex-col gap-10 lg:gap-6 py-10 lg:py-16">
      <DesignPageHero
        title="App Design"
        subtitle="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        patternSrc="/assets/app-design/desktop/bg-pattern-intro-app.svg"
      />
      <ProjectsGrid projects={projects} />
      <ServicesCrossLinks
        links={[
          {
            name: "Web Design",
            href: "/web-design",
            image: "/assets/home/desktop/image-web-design-small.jpg",
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
