import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const locations = [
  {
    country: "Canada",
    illustration: "/assets/shared/desktop/illustration-canada.svg",
    href: "/locations",
  },
  {
    country: "Australia",
    illustration: "/assets/shared/desktop/illustration-australia.svg",
    href: "/locations",
  },
  {
    country: "United Kingdom",
    illustration: "/assets/shared/desktop/illustration-united-kingdom.svg",
    href: "/locations",
  },
];

export function LocationsPreview() {
  return (
    <section className="mx-auto max-w-[1110px] px-6 lg:px-0 py-20 lg:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {locations.map((loc) => (
          <div
            key={loc.country}
            className="flex flex-col items-center text-center gap-8"
          >
            <Image
              src={loc.illustration}
              alt={loc.country}
              width={202}
              height={202}
            />
            <h3 className="text-dark-grey text-[20px] font-medium uppercase tracking-[5px]">
              {loc.country}
            </h3>
            <Link
              href={loc.href}
              className={cn(buttonVariants({ variant: "peach" }))}
            >
              See Location
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
