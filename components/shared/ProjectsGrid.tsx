import Image from "next/image";

export interface Project {
  name: string;
  description: string;
  image: string;
}

interface Props {
  projects: Project[];
}

export function ProjectsGrid({ projects }: Props) {
  return (
    <section className="mx-auto max-w-[1110px] px-6 lg:px-0 py-10 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[30px]">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-[15px] overflow-hidden"
          >
            <div className="relative h-[250px] lg:h-[320px]">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
                className="object-cover"
              />
            </div>
            <div className="bg-peach-pale px-8 py-8">
              <h3 className="text-peach text-[20px] font-medium uppercase tracking-[5px] mb-4">
                {project.name}
              </h3>
              <p className="text-dark-grey text-[16px] leading-[26px]">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
