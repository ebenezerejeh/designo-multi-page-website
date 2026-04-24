import Image from "next/image";

interface Props {
  country: string;
  officeName: string;
  address: string[];
  phone: string;
  email: string;
  mapImage: string;
  reversed?: boolean;
}

export function LocationEntry({
  country,
  officeName,
  address,
  phone,
  email,
  mapImage,
  reversed = false,
}: Props) {
  return (
    <div className="mx-auto max-w-[1110px] px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px]">
        {/* Map image — always first in DOM (top on mobile) */}
        <div
          className={`relative h-[320px] lg:h-[326px] lg:w-[350px] flex-shrink-0 rounded-[15px] overflow-hidden ${
            reversed ? "" : "lg:order-last"
          }`}
        >
          <Image
            src={mapImage}
            alt={`Map of ${country}`}
            fill
            sizes="(max-width: 1024px) 100vw, 350px"
            className="object-cover"
          />
        </div>

        {/* Info card */}
        <div
          className={`relative bg-peach-pale rounded-[15px] overflow-hidden flex-1 px-8 py-16 lg:pl-[95px] lg:py-[88px] ${
            reversed ? "lg:order-last" : ""
          }`}
        >
          {/* Decorative circles */}
          <div className="absolute -bottom-16 -left-16 pointer-events-none opacity-20">
            <Image
              src="/assets/shared/desktop/bg-pattern-two-circles.svg"
              alt=""
              width={584}
              height={584}
            />
          </div>

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:gap-[125px]">
            <div>
              <h2 className="text-peach text-[32px] leading-[36px] font-medium lg:text-[40px] lg:leading-[48px] mb-6">
                {country}
              </h2>
              <address className="not-italic text-dark-grey text-[16px] leading-[26px]">
                <p className="font-bold">{officeName}</p>
                {address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </address>
            </div>
            <address className="not-italic text-dark-grey text-[16px] leading-[26px]">
              <p className="font-bold">Contact</p>
              <p>{phone}</p>
              <p>{email}</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
