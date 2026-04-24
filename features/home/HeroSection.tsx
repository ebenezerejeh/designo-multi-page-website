import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-[1110px] px-6 lg:px-0 pb-10 lg:pb-0">
      {/* Mobile/tablet: phone floats above the card */}
      <div className="flex justify-center lg:hidden">
        <Image
          src="/assets/home/desktop/image-hero-phone.png"
          alt="Phone mockup"
          width={284}
          height={497}
          priority
          className="relative z-10 -mb-12"
        />
      </div>

      {/* Hero card */}
      <div className="relative rounded-[15px] bg-peach overflow-hidden lg:overflow-visible min-h-[550px] lg:min-h-[640px] flex items-center">
        {/* Background pattern — clipped inside the card */}
        <div className="absolute inset-0 rounded-[15px] overflow-hidden pointer-events-none">
          <Image
            src="/assets/home/desktop/bg-pattern-hero-home.svg"
            alt=""
            width={876}
            height={640}
            className="absolute top-0 right-0 h-full w-auto"
          />
        </div>

        {/* Phone — desktop only, overflows the top of the card */}
        <Image
          src="/assets/home/desktop/image-hero-phone.png"
          alt=""
          width={492}
          height={617}
          priority
          className="hidden lg:block absolute -top-20 right-[5%] z-10 h-[130%] w-auto"
        />

        {/* Text content */}
        <div className="relative z-20 px-8 py-16 text-center lg:text-left lg:pl-[95px] lg:max-w-[540px] lg:py-[130px]">
          <h1 className="text-white text-[36px] leading-[44px] font-medium lg:text-[48px] lg:leading-[55px] mb-6">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-white/80 text-[16px] leading-[26px] mb-10 max-w-[445px] mx-auto lg:mx-0">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Link href="/about" className={cn(buttonVariants({ variant: "white" }))}>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
