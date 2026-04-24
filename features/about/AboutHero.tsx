import Image from "next/image";

export function AboutHero() {
  return (
    <section className="mx-auto max-w-[1110px] px-6 lg:px-0">
      <div className="relative rounded-[15px] overflow-hidden bg-peach flex flex-col lg:flex-row min-h-[400px] lg:min-h-[480px]">
        {/* Decorative pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/about/desktop/bg-pattern-hero-about-desktop.svg"
            alt=""
            fill
            className="object-cover object-left-bottom"
          />
        </div>

        {/* Photo — top on mobile, right on desktop */}
        <div className="relative h-[320px] lg:h-auto lg:w-[476px] flex-shrink-0 lg:order-last">
          <Image
            src="/assets/about/desktop/image-about-hero.jpg"
            alt="Team members collaborating"
            fill
            sizes="(max-width: 1024px) 100vw, 476px"
            className="object-cover"
            priority
          />
        </div>

        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-16 text-center lg:text-left lg:pl-[95px] lg:pr-8 lg:order-first lg:max-w-[calc(100%-476px)]">
          <h1 className="text-white text-[36px] leading-[44px] font-medium lg:text-[48px] lg:leading-[48px] mb-6">
            About Us
          </h1>
          <p className="text-white/80 text-[16px] leading-[26px] max-w-[458px] mx-auto lg:mx-0">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We&apos;ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We&apos;re always looking forward to creating brands,
            products, and digital experiences that connect with our clients&apos;
            audiences.
          </p>
        </div>
      </div>
    </section>
  );
}
