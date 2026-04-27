"use client";

import Image from "next/image";
import Link from "next/link";
import ContactLink from "./ContactLink";
import Reveal from "./Reveal";

const featureModules = [
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
    image: "/crm-screen-shot/Screenshot (505).png",
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
    image: "/crm-screen-shot/Screenshot (518).png",
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
    image: "/crm-screen-shot/Screenshot (540).png",
    href: "/features#admin-analytics-and-platform",
    imageSide: "right",
  },
];

const openBookDemoModal = () => {
  window.dispatchEvent(
    new CustomEvent("book-call-modal:open", {
      detail: {
        title: "Book Your Free Demo",
        subtitle: "Share your details and our team will schedule your personalized walkthrough.",
      },
    })
  );
};

function ModuleText({ module, index }) {
  return (
    <Reveal className="w-full lg:basis-[42%]" delay={index * 80}>
      <div className="max-w-xl">
        <span className="mb-5 block text-xs font-bold uppercase tracking-[0.22em] text-[#079767]">
          {module.label}
        </span>

        <h3 className="text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
          {module.title}
        </h3>

        <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
          {module.description}
        </p>

        <ul className="mt-8 space-y-4">
          {module.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-700 md:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b274]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <Link
          href={module.href}
          className="group mt-9 inline-flex items-center text-sm font-bold text-[#079767] transition-colors hover:text-[#036b4a]"
        >
          Explore Module
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </Reveal>
  );
}

function ModuleImage({ module, index }) {
  return (
    <Reveal className="w-full lg:basis-[58%]" delay={120 + index * 80}>
      <figure className="group/image relative">
        <div className="pointer-events-none absolute -inset-x-6 -inset-y-8 bg-[linear-gradient(135deg,rgba(0,178,116,0.18),rgba(20,184,166,0.12),rgba(255,255,255,0))] blur-3xl transition-opacity duration-500 group-hover/image:opacity-90" />
        <div className="pointer-events-none absolute inset-x-10 -bottom-4 h-12 bg-[#00b274]/15 blur-2xl transition-all duration-500 group-hover/image:translate-y-1" />

        <Image
          src={module.image}
          alt={`${module.title} product preview`}
          width={1920}
          height={1080}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="relative z-10 h-auto w-full rounded-[1.35rem] object-cover shadow-[0_28px_70px_rgba(15,23,42,0.14)] transition-transform duration-500 group-hover/image:-translate-y-1 group-hover/image:scale-[1.015]"
          priority={index === 0}
        />
      </figure>
    </Reveal>
  );
}

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f7fffb_0%,#ffffff_32%,#f4fffb_100%)] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,178,116,0.12),transparent_50%),linear-gradient(90deg,rgba(20,184,166,0.06),transparent_42%,rgba(0,178,116,0.07))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="mb-5 block text-xs font-bold uppercase tracking-[0.24em] text-[#079767]">
              Features
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-4xl font-bold leading-tight text-slate-950 md:text-6xl">
              Best In Class Features
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Jump straight into the CRM modules that matter most to your sales,
              operations, support, finance, and platform teams.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-20 md:mt-28 md:space-y-28">
          {featureModules.map((module, index) => {
            const imageFirst = module.imageSide === "left";

            return (
              <div key={module.title}>
                <div
                  className={`flex flex-col items-center gap-12 lg:gap-16 ${
                    imageFirst ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <ModuleText module={module} index={index} />
                  <ModuleImage module={module} index={index} />
                </div>

                {index < featureModules.length - 1 ? (
                  <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-[#bfe8dc] to-transparent md:mt-28" />
                ) : null}
              </div>
            );
          })}
        </div>

        <Reveal delay={260}>
          <div className="mx-auto mt-20 max-w-3xl text-center md:mt-28">
            <div className="mx-auto mb-10 h-px max-w-xl bg-gradient-to-r from-transparent via-[#bfe8dc] to-transparent" />
            <h3 className="text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
              Everything you need to run your business smarter
            </h3>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ContactLink className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#10b981] to-[#079767] px-8 py-3.5 text-sm font-bold text-white shadow-[0_14px_30px_rgba(16,185,129,0.22)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(16,185,129,0.28)]">
                Start Free Trial
              </ContactLink>
              <button
                type="button"
                onClick={openBookDemoModal}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#eafff7] px-8 py-3.5 text-sm font-bold text-[#047857] transition-all hover:-translate-y-0.5 hover:bg-[#dffbef]"
              >
                Book Demo
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
