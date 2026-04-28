"use client";

import Image from "next/image";
import Link from "next/link";
import ContactLink from "./ContactLink";
import Reveal from "./Reveal";

const defaultFeatureModules = [
  {
    label: "CATEGORY 01",
    title: "Lead & Pre-Sales",
    description:
      "Capture, qualify, assign, and follow up with every enquiry from one focused sales workspace.",
    bullets: [
      "Unified lead inbox with source tracking",
      "Automated reminders and activity timelines",
      "Fast WhatsApp, call, and assignment workflows",
    ],
    image: "/crm screen shot/Screenshot (505).png",
    href: "/features#lead-and-pre-sales",
    imageSide: "right",
  },
  {
    label: "CATEGORY 02",
    title: "Real Estate CRM",
    description:
      "Run projects, inventory, site visits, bookings, partners, and collections with real estate teams in sync.",
    bullets: [
      "Project, unit, and inventory visibility",
      "Site visit and booking pipeline tracking",
      "Broker, payment, and collection workflows",
    ],
    image: "/crm screen shot/realEState.png/RealEstate.jpeg",
    href: "/features#real-estate-crm",
    imageSide: "left",
  },
  {
    label: "CATEGORY 03",
    title: "Admin, Analytics & Platform",
    description:
      "Give leaders a secure operating layer for permissions, reporting, audit trails, and platform-wide control.",
    bullets: [
      "Role-based access and platform administration",
      "Executive dashboards with live performance views",
      "Integrations, audit logs, and tenant controls",
    ],
    image: "/crm screen shot/Analytics ss.png",
    href: "/features#admin-analytics-and-platform",
    imageSide: "right",
  },
];

function LineIcon({ name, className = "" }) {
  const paths = {
    check: <path d="M5 12.5 9.5 17 19 7" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function ModuleText({ module, index, isTextRight }) {
  return (
    <Reveal
      from={isTextRight ? "bottom-right" : "bottom-left"}
      className="w-full lg:basis-[42%]"
      delay={index * 90}
    >
      <div className="max-w-xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#079767]">
          {module.label}
        </p>

        <h3 className="text-4xl font-semibold leading-tight tracking-normal text-slate-950 md:text-5xl">
          {module.title}
        </h3>

        <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
          {module.description}
        </p>

        <ul className="mt-9 space-y-5">
          {module.bullets.map((bullet) => (
            <li
              key={bullet}
              className="group/item flex items-start gap-4 text-base font-medium leading-7 text-slate-700 transition-all duration-300 hover:translate-x-1 hover:text-slate-950"
            >
              <span className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-[#0caf78] transition-all duration-300 group-hover/item:translate-x-0.5 group-hover/item:text-[#06845b]">
                <LineIcon name="check" className="h-4 w-4 stroke-[2.25]" />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <Link
          href={module.href}
          className="group/link mt-10 inline-flex items-center gap-2 bg-[linear-gradient(90deg,#079767,#22c59a)] bg-left-bottom bg-no-repeat pb-1 text-sm font-bold uppercase tracking-[0.16em] text-[#067a56] transition-all duration-300 bg-[length:0%_1px] hover:translate-x-1 hover:text-[#045d42] hover:bg-[length:100%_1px]"
        >
          Explore Module
          <LineIcon
            name="arrow"
            className="h-4 w-4 stroke-[2.2] transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </Reveal>
  );
}

function ModuleImage({ module, index, isImageRight }) {
  return (
    <Reveal
      from={isImageRight ? "bottom-right" : "bottom-left"}
      className="w-full lg:basis-[58%]"
      delay={140 + index * 90}
    >
      <figure className="group/visual relative">
        <div className="pointer-events-none absolute -inset-x-10 -inset-y-8 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.24),rgba(34,197,94,0.09)_42%,transparent_70%)] blur-3xl transition-opacity duration-700 group-hover/visual:opacity-90" />
        <div className="pointer-events-none absolute inset-x-16 bottom-4 h-16 bg-[#10b981]/16 blur-3xl transition-transform duration-700 group-hover/visual:translate-y-1" />

        <Image
          src={module.image}
          alt={`${module.title} product preview`}
          width={1920}
          height={1080}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="relative z-10 h-auto w-full object-contain opacity-[0.98] drop-shadow-[0_24px_38px_rgba(15,118,110,0.11)] transition-all duration-700 group-hover/visual:-translate-y-1 group-hover/visual:scale-[1.01]"
          priority={index === 0}
        />
      </figure>
    </Reveal>
  );
}

export default function FeaturesSection({
  badge = "Features",
  title = "Best In Class Features",
  description = "Jump straight into the CRM modules that matter most to your sales, operations, support, finance, and platform teams.",
  modules = defaultFeatureModules,
  showBottomCta = true,
}) {
  return (
    <section
      id="features"
      className="relative isolate overflow-hidden bg-white py-14 text-slate-950 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,#ffffff_0%,#ffffff_36%,#f1fff9_72%,#e9fffa_100%)]" />
      <div className="pointer-events-none absolute right-[-12rem] top-[-12rem] h-[32rem] w-[32rem] bg-[radial-gradient(circle,rgba(45,212,191,0.22),rgba(34,197,94,0.08)_42%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[18rem] h-[26rem] w-[54rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.13),rgba(236,253,245,0.38)_36%,transparent_68%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1480px] px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#079767]">
              {badge}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-4xl font-semibold leading-tight tracking-normal text-slate-950 md:text-6xl">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              {description}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
          {modules.map((module, index) => {
            const imageFirst = module.imageSide === "left";
            const isImageRight = !imageFirst;

            return (
              <div key={module.title} className="relative">
                <div
                  className={`flex flex-col items-center gap-10 lg:gap-14 ${
                    imageFirst ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <ModuleText module={module} index={index} isTextRight={imageFirst} />
                  <ModuleImage module={module} index={index} isImageRight={isImageRight} />
                </div>

                {index < modules.length - 1 ? (
                  <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent md:mt-20" />
                ) : null}
              </div>
            );
          })}
        </div>

        {showBottomCta ? (
          <Reveal delay={260} className="mx-auto mt-14 max-w-4xl text-center md:mt-20">
            <div className="mx-auto mb-7 h-px max-w-2xl bg-gradient-to-r from-transparent via-emerald-200/90 to-transparent" />
            <h3 className="text-3xl font-semibold leading-tight tracking-normal text-slate-950 md:text-5xl">
              Everything you need to run your business smarter
            </h3>
            <ContactLink className="group/cta mt-8 inline-flex items-center gap-2 bg-[linear-gradient(90deg,#079767,#22c59a)] bg-left-bottom bg-no-repeat pb-1 text-sm font-bold uppercase tracking-[0.16em] text-[#067a56] transition-all duration-300 bg-[length:0%_1px] hover:translate-x-1 hover:text-[#045d42] hover:bg-[length:100%_1px]">
              Start with TrioCRM
              <LineIcon
                name="arrow"
                className="h-4 w-4 stroke-[2.2] transition-transform duration-300 group-hover/cta:translate-x-1"
              />
            </ContactLink>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
