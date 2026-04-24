import Image from "next/image";

interface Props {
  title: string;
  subtitle: string;
  patternSrc: string;
}

export function DesignPageHero({ title, subtitle, patternSrc }: Props) {
  return (
    <section className="mx-auto max-w-[1110px] px-6 lg:px-0">
      <div className="relative rounded-[15px] bg-peach overflow-hidden min-h-[200px] lg:min-h-[252px] flex flex-col items-center justify-center text-center px-8 py-16">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <Image src={patternSrc} alt="" fill className="object-cover" />
        </div>

        <div className="relative z-10">
          <h1 className="text-white text-[36px] leading-[44px] font-medium lg:text-[48px] lg:leading-[48px] mb-4">
            {title}
          </h1>
          <p className="text-white/80 text-[16px] leading-[26px] max-w-[445px] mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
