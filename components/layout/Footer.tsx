import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Our Company", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "/assets/shared/desktop/icon-facebook.svg",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: "/assets/shared/desktop/icon-youtube.svg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "/assets/shared/desktop/icon-twitter.svg",
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com",
    icon: "/assets/shared/desktop/icon-pinterest.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "/assets/shared/desktop/icon-instagram.svg",
  },
];

export function Footer() {
  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-[1110px] px-6 py-16 lg:px-0">
        {/* Top row: logo + nav */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" aria-label="Designo home">
            <Image
              src="/assets/shared/desktop/logo-light.png"
              alt="Designo"
              width={202}
              height={27}
            />
          </Link>

          {/* Divider — desktop horizontal, mobile same width */}
          <div className="hidden md:block h-px flex-1 bg-white/10 mx-8" />

          <nav
            className="flex flex-col items-center gap-4 md:flex-row md:gap-[42px]"
            aria-label="Footer navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-[14px] uppercase tracking-[2px] hover:underline transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider — full width on mobile */}
        <div className="my-8 h-px bg-white/10 md:hidden" />

        {/* Bottom row: contact info + social */}
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          {/* Office addresses */}
          <div className="flex flex-col items-center gap-8 text-center text-white/50 text-[16px] leading-[26px] md:flex-row md:items-start md:text-left md:gap-[130px]">
            <address className="not-italic">
              <p className="font-bold text-white">Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </address>
            <address className="not-italic">
              <p className="font-bold text-white">
                Contact Us (Central Office)
              </p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </address>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="hover:opacity-70 transition-opacity"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={s.icon} alt={s.name} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
