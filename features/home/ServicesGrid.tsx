import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Web Design",
    href: "/web-design",
    image: "/assets/home/desktop/image-web-design-large.jpg",
    tall: true,
  },
  {
    name: "App Design",
    href: "/app-design",
    image: "/assets/home/desktop/image-app-design.jpg",
    tall: false,
  },
  {
    name: "Graphic Design",
    href: "/graphic-design",
    image: "/assets/home/desktop/image-graphic-design.jpg",
    tall: false,
  },
];

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-[1110px] px-6 lg:px-0 py-10 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[30px] lg:grid-rows-[308px_308px]">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className={`group relative rounded-[15px] overflow-hidden min-h-[250px] md:min-h-[300px] ${
              service.tall
                ? "md:col-span-2 md:min-h-[300px] lg:col-span-1 lg:row-span-2 lg:min-h-auto"
                : "lg:min-h-auto"
            }`}
          >
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 540px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Dark overlay + peach on hover */}
            <div className="absolute inset-0 bg-dark/50 group-hover:bg-peach/70 transition-colors duration-300" />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-3">
              <h2 className="text-[24px] md:text-[36px] font-medium tracking-[2px] uppercase">
                {service.name}
              </h2>
              <span className="flex items-center gap-4 text-[15px] tracking-[5px] font-medium uppercase">
                View Projects
                <Image
                  src="/assets/shared/desktop/icon-right-arrow.svg"
                  alt=""
                  width={7}
                  height={10}
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
