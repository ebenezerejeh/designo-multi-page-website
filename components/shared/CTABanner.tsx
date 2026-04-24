import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function CTABanner() {
  return (
    <div className="mx-auto max-w-[1110px] px-6 lg:px-0 py-20 lg:py-24">
      <div className="relative rounded-[15px] bg-peach overflow-hidden px-8 py-16 md:px-16 md:py-16 lg:px-[95px] lg:py-[72px] flex flex-col items-center text-center gap-8 lg:flex-row lg:justify-between lg:text-left">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/assets/shared/desktop/bg-pattern-call-to-action.svg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="relative z-10 max-w-[380px] lg:max-w-none">
          <h2 className="text-white text-[32px] leading-[36px] font-medium lg:text-[40px] lg:leading-[40px] mb-4">
            Let&apos;s talk about your project
          </h2>
          <p className="text-white/80 text-[16px] leading-[26px]">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>

        {/* CTA */}
        <div className="relative z-10 flex-shrink-0">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "white" }))}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
