"use client";

import Reveal from "./Reveal";

const useCases = [
  {
    title: "Real Estate",
    description: "Manage property listings, automate site visit follow-ups, and track bookings with integrated payment milestones.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Sales Teams",
    description: "Equip your sales force with lead scoring, call tracking, and automated reminders to ensure no deal falls through the cracks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Agencies",
    description: "Manage client projects, track communication history across teams, and automate professional reporting and billing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-7h1m-1 4h1m-5 10l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Service Businesses",
    description: "Handle support tickets, schedule service appointments, and manage recurring billing for long-term customer retention.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const CARD_ACCENTS = [
  {
    glow: "from-[#7af0a8]/18 via-transparent to-transparent",
    blob: "bg-[radial-gradient(circle_at_bottom_right,rgba(122,240,168,0.24),transparent_62%)]",
  },
  {
    glow: "from-[#8de7d7]/16 via-transparent to-transparent",
    blob: "bg-[radial-gradient(circle_at_bottom_right,rgba(141,231,215,0.24),transparent_60%)]",
  },
  {
    glow: "from-[#ffd9b5]/16 via-transparent to-transparent",
    blob: "bg-[radial-gradient(circle_at_bottom_right,rgba(255,217,181,0.24),transparent_60%)]",
  },
  {
    glow: "from-[#e4c8ff]/16 via-transparent to-transparent",
    blob: "bg-[radial-gradient(circle_at_bottom_right,rgba(228,200,255,0.24),transparent_60%)]",
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-[#00b274] text-sm font-bold tracking-[0.4em] uppercase block mb-4">
              Solutions
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6">
              Tailored for Your Industry
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Whatever your business model, CRM Solutions provides the flexibility and power to manage your unique workflows.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((useCase, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative flex h-full min-h-[21rem] flex-col overflow-hidden rounded-[2rem] border border-[#e8f1ec] bg-white px-7 py-7 shadow-[0_16px_44px_rgba(15,23,42,0.08),0_2px_12px_rgba(11,143,102,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#bfead8] hover:shadow-[0_22px_60px_rgba(15,23,42,0.1),0_10px_30px_rgba(11,143,102,0.08)]">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${CARD_ACCENTS[index % CARD_ACCENTS.length].glow} opacity-80`} />
                <div className={`pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-tl-[4.5rem] ${CARD_ACCENTS[index % CARD_ACCENTS.length].blob}`} />

                <div className="relative z-10 mb-6 flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-[1.45rem] border border-[#d6eee4] bg-[linear-gradient(180deg,#ffffff_0%,#f5fffb_100%)] text-[#0fb37a] shadow-[0_14px_32px_rgba(15,23,42,0.08)] transition-all duration-500 group-hover:scale-[1.04] group-hover:border-[#b7e8d4] group-hover:shadow-[0_20px_40px_rgba(17,175,120,0.16)]">
                  <div className="relative flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,1),rgba(225,250,240,0.98)_55%,rgba(197,242,223,0.82)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <div className="pointer-events-none absolute inset-[5px] rounded-full border border-white/70" />
                    <div className="relative z-10">
                      {useCase.icon}
                    </div>
                  </div>
                </div>

                <h3 className="relative z-10 mb-4 text-[1.95rem] font-bold leading-[1.12] text-slate-950 transition-colors duration-300 group-hover:text-[#0f9e6d] xl:text-[1.82rem]">
                  {useCase.title}
                </h3>
                <p className="relative z-10 text-[15px] leading-8 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                  {useCase.description}
                </p>

                <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d8ece4] to-transparent" />
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/60" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
