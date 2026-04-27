"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import FeatureIcon from "./FeatureIcon";
import { allFeatures } from "@/lib/features-data";

const FEATURE_CATEGORY_CARDS = [
  {
    category: "Lead & Pre-Sales",
    description:
      "Capture enquiries, assign leads, track activity, and automate follow-ups from first contact to conversion.",
    iconType: "lead",
  },
  {
    category: "Real Estate CRM",
    description:
      "Manage projects, inventory, site visits, bookings, pricing, partners, and collections inside one real-estate workflow.",
    iconType: "documents",
  },
  {
    category: "Admin, Analytics & Platform",
    description:
      "Control users, security, audit logs, integrations, tenant setup, and executive-level analytics from one admin layer.",
    iconType: "dashboard",
  },
  {
    category: "Support & Service",
    description:
      "Run support tickets, SLA rules, routing, knowledge base, feedback loops, and service analytics with better visibility.",
    iconType: "ticket",
  },
  {
    category: "Sales Workflow",
    description:
      "Handle proposals, quotations, invoices, agreements, scheduling, and complete deal movement through structured workflows.",
    iconType: "automation",
  },
  {
    category: "WhatsApp CRM",
    description:
      "Operate shared inboxes, campaigns, templates, automations, and WhatsApp analytics without leaving your CRM.",
    iconType: "whatsapp",
  },
];

function getCategoryAnchor(category) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const categoryCards = FEATURE_CATEGORY_CARDS.map((card) => {
  const group = allFeatures.find((item) => item.category === card.category);
  const items = group?.items ?? [];

  return {
    ...card,
    href: `/features#${getCategoryAnchor(card.category)}`,
    count: items.length,
  };
});

const CARD_ACCENTS = [
  {
    glow: "from-[#7af0a8]/20 via-transparent to-transparent",
    blob: "bg-[radial-gradient(circle_at_bottom_right,rgba(122,240,168,0.24),transparent_62%)]",
  },
  {
    glow: "from-[#8de7d7]/18 via-transparent to-transparent",
    blob: "bg-[radial-gradient(circle_at_bottom_right,rgba(141,231,215,0.26),transparent_60%)]",
  },
  {
    glow: "from-[#ffd9b5]/18 via-transparent to-transparent",
    blob: "bg-[radial-gradient(circle_at_bottom_right,rgba(255,217,181,0.28),transparent_60%)]",
  },
  {
    glow: "from-[#e4c8ff]/18 via-transparent to-transparent",
    blob: "bg-[radial-gradient(circle_at_bottom_right,rgba(228,200,255,0.28),transparent_60%)]",
  },
  {
    glow: "from-[#e6c2ff]/18 via-transparent to-transparent",
    blob: "bg-[radial-gradient(circle_at_bottom_right,rgba(230,194,255,0.24),transparent_60%)]",
  },
  {
    glow: "from-[#ffe5be]/18 via-transparent to-transparent",
    blob: "bg-[radial-gradient(circle_at_bottom_right,rgba(255,229,190,0.3),transparent_60%)]",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfa_0%,#ffffff_22%,#fffefc_100%)] py-16 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#61d9af]/35 bg-[radial-gradient(circle_at_center,rgba(97,217,175,0.28),rgba(97,217,175,0.08)_45%,transparent_72%)]" />
        <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,224,196,0.5),rgba(255,224,196,0.18)_48%,transparent_72%)] blur-[6px]" />
        <div className="absolute left-1/2 top-8 h-72 w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(131,231,198,0.14),transparent_68%)] blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(230,206,255,0.28),transparent_68%)]" />
        <div className="absolute -bottom-10 right-0 h-64 w-64 rounded-full border border-[#9fd6ff]/50 bg-[radial-gradient(circle_at_center,rgba(211,233,255,0.18),transparent_72%)]" />
        <div className="absolute left-6 top-[58%] h-24 w-24 bg-[radial-gradient(circle,currentColor_1.5px,transparent_1.5px)] bg-[length:12px_12px] text-[#e9cfff]" />
        <div className="absolute right-10 top-[33%] h-24 w-24 bg-[radial-gradient(circle,currentColor_1.5px,transparent_1.5px)] bg-[length:12px_12px] text-[#ffd8ba]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <Reveal>
            <span className="mb-5 inline-flex rounded-full border border-[#cfeee3] bg-[#effaf4] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#1baf78] shadow-[0_10px_24px_rgba(11,143,102,0.08)]">
              Features
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mb-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Best In class Features
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base leading-relaxed text-slate-500 md:text-lg">
              Jump straight into the CRM modules that matter most to your sales,
              operations, support, finance, and platform teams.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categoryCards.slice(0, 6).map((card, index) => (
            <Reveal key={card.category} delay={index * 70}>
              <Link href={card.href} className="group block h-full">
                <div className="relative flex h-full min-h-[24rem] flex-col overflow-hidden rounded-[2rem] border border-[#e8f1ec] bg-white px-7 py-7 shadow-[0_16px_44px_rgba(15,23,42,0.08),0_2px_12px_rgba(11,143,102,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#bfead8] hover:shadow-[0_22px_60px_rgba(15,23,42,0.1),0_10px_30px_rgba(11,143,102,0.08)] md:min-h-[25rem]">
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${CARD_ACCENTS[index % CARD_ACCENTS.length].glow} opacity-80`} />
                  <div className={`pointer-events-none absolute bottom-0 right-0 h-36 w-36 rounded-tl-[5rem] ${CARD_ACCENTS[index % CARD_ACCENTS.length].blob}`} />

                  <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-[1.45rem] border border-[#d6eee4] bg-[linear-gradient(180deg,#ffffff_0%,#f5fffb_100%)] text-[#0fb37a] shadow-[0_14px_32px_rgba(15,23,42,0.08)] transition-all duration-500 group-hover:scale-[1.04] group-hover:border-[#b7e8d4] group-hover:shadow-[0_20px_40px_rgba(17,175,120,0.16)]">
                      <div className="relative flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,1),rgba(225,250,240,0.98)_55%,rgba(197,242,223,0.82)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                        <div className="pointer-events-none absolute inset-[5px] rounded-full border border-white/70" />
                        <FeatureIcon type={card.iconType} className="relative z-10 h-8 w-8" />
                      </div>
                    </div>

                    <span className="inline-flex rounded-full bg-[#effaf4] px-3.5 py-1.5 text-xs font-bold text-[#18ad78] shadow-[inset_0_0_0_1px_rgba(24,173,120,0.08)]">
                      {card.count} modules
                    </span>
                  </div>

                  <div className="relative z-10 mb-4">
                    <span className="inline-flex rounded-full border border-[#dcefe7] bg-white/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Category
                    </span>
                  </div>

                  <h3 className="relative z-10 mb-3 text-[1.95rem] font-bold leading-[1.12] text-slate-950 transition-colors duration-300 group-hover:text-[#0f9e6d] xl:text-[1.78rem]">
                    {card.category}
                  </h3>
                  <p className="relative z-10 text-[15px] leading-8 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                    {card.description}
                  </p>

                  <div className="relative z-10 mt-auto pt-8">
                    <div className="flex items-center text-sm font-semibold text-[#12ae77]">
                      View Category
                      <svg
                        className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d8ece4] to-transparent" />
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/60" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center md:mt-16">
          <Reveal delay={600}>
            <a
              href="/features"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#11b178] to-[#099a66] px-9 py-4 text-sm font-bold text-white shadow-[0_14px_32px_rgba(17,177,120,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(17,177,120,0.34)]"
            >
              Show All Features
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
