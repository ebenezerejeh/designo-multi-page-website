"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="mx-auto max-w-277.5 px-6 lg:px-0 py-10 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-7.5">
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="rounded-[15px] overflow-hidden group cursor-default"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="relative h-62.5 lg:h-80">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
                className="object-cover"
              />
              {/* Peach overlay on hover */}
              <div className="absolute inset-0 bg-peach/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="bg-light-grey px-8 py-8">
              <h3 className="text-peach text-[20px] font-medium uppercase tracking-[5px] mb-4">
                {project.name}
              </h3>
              <p className="text-dark-grey text-[16px] leading-6.5">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
