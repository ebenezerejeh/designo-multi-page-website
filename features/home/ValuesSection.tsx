import Image from "next/image";

const values = [
  {
    name: "Passionate",
    illustration: "/assets/home/desktop/illustration-passionate.svg",
    body: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    name: "Resourceful",
    illustration: "/assets/home/desktop/illustration-resourceful.svg",
    body: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs.",
  },
  {
    name: "Friendly",
    illustration: "/assets/home/desktop/illustration-friendly.svg",
    body: "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Decorative leaf patterns */}
      <div className="absolute -left-[340px] top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <Image
          src="/assets/shared/desktop/bg-pattern-leaf.svg"
          alt=""
          width={1006}
          height={594}
        />
      </div>
      <div className="absolute -right-[340px] top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <Image
          src="/assets/shared/desktop/bg-pattern-leaf.svg"
          alt=""
          width={1006}
          height={594}
          className="rotate-180"
        />
      </div>

      <div className="relative mx-auto max-w-[1110px] px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {values.map((value) => (
            <div
              key={value.name}
              className="flex flex-col items-center text-center gap-8"
            >
              <Image
                src={value.illustration}
                alt=""
                width={202}
                height={202}
              />
              <div className="flex flex-col gap-4">
                <h3 className="text-dark-grey text-[20px] font-medium uppercase tracking-[5px]">
                  {value.name}
                </h3>
                <p className="text-dark-grey/80 text-[16px] leading-[26px]">
                  {value.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
