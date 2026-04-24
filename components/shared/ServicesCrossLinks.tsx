import Image from "next/image";
import Link from "next/link";

export interface ServiceLink {
  name: string;
  href: string;
  image: string;
}

interface Props {
  links: [ServiceLink, ServiceLink];
}

export function ServicesCrossLinks({ links }: Props) {
  return (
    <section className="mx-auto max-w-[1110px] px-6 lg:px-0 pb-10 lg:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[30px]">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative rounded-[15px] overflow-hidden min-h-[200px] md:min-h-[308px] flex items-center justify-center"
          >
            <Image
              src={link.image}
              alt={link.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-dark/50 group-hover:bg-peach/70 transition-colors duration-300" />
            <div className="relative z-10 flex flex-col items-center gap-3 text-white">
              <h2 className="text-[24px] lg:text-[36px] font-medium tracking-[2px] uppercase">
                {link.name}
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
