import Image from "next/image";

interface Props {
  imageSrc: string;
  imageAlt: string;
  /** If true: text on left, image on right at desktop. Image is always first in DOM (top on mobile). */
  reversed?: boolean;
  heading: string;
  paragraphs: string[];
  patternSrc?: string;
}

export function SplitSection({
  imageSrc,
  imageAlt,
  reversed = false,
  heading,
  paragraphs,
  patternSrc,
}: Props) {
  return (
    <div className="mx-auto max-w-[1110px] px-6 lg:px-0">
      <div className="relative rounded-[15px] overflow-hidden bg-peach-pale flex flex-col lg:flex-row min-h-[480px] lg:min-h-[640px]">
        {/* Decorative circle pattern */}
        {patternSrc && (
          <div
            className={`absolute bottom-0 pointer-events-none z-0 ${
              reversed ? "left-0" : "right-0"
            }`}
          >
            <Image src={patternSrc} alt="" width={584} height={584} />
          </div>
        )}

        {/* Image — top on mobile; positioned by reversed prop on desktop */}
        <div
          className={`relative h-[320px] lg:h-auto lg:w-[476px] flex-shrink-0 ${
            reversed ? "lg:order-last" : ""
          }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 476px"
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div
          className={`relative z-10 flex flex-col justify-center px-8 py-12 lg:py-0 lg:px-[95px] ${
            reversed ? "lg:order-first" : ""
          }`}
        >
          <h2 className="text-peach text-[32px] leading-[36px] font-medium lg:text-[40px] lg:leading-[48px] mb-8">
            {heading}
          </h2>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-dark-grey text-[16px] leading-[26px] ${
                i < paragraphs.length - 1 ? "mb-6" : ""
              }`}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
