"use client";

import Reveal from "./Reveal";

const defaultProblemPoints = [
  "Lead details are scattered across calls, forms, spreadsheets, and WhatsApp",
  "Follow-ups depend on memory instead of a reliable process",
  "Managers cannot see which deals are moving, stalled, or at risk",
  "Manual handoffs slow the team before the lead is ready to buy",
];

const defaultSolutionPoints = [
  "Capture every enquiry, source, owner, and note in one CRM workspace",
  "Automated follow-ups keep hot leads moving without manual chasing",
  "Live pipeline visibility shows blockers before revenue slips",
  "Sales teams act faster, stay aligned, and convert more qualified leads",
];

function LineIcon({ name, className = "" }) {
  const paths = {
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    calendar: (
      <>
        <path d="M7 3v4M17 3v4M4.5 9.5h15" />
        <rect x="4" y="5.5" width="16" height="15" rx="3" />
        <path d="m9 15 2 2 4-5" />
      </>
    ),
    check: <path d="m5 12.5 4.2 4.2L19 7" />,
    sparkles: (
      <>
        <path d="M12 3.5 14.1 9.9 20.5 12 14.1 14.1 12 20.5 9.9 14.1 3.5 12 9.9 9.9 12 3.5Z" />
        <path d="M18.5 3.5v3M17 5h3M5.5 17.5v2.5M4.25 18.75h2.5" />
      </>
    ),
    x: <path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" />,
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

function openBookDemoModal(title = "Book a TrioCRM Demo") {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent("book-call-modal:open", {
      detail: {
        title,
        subtitle:
          "Share your details and our team will help you map TrioCRM to your sales process.",
      },
    })
  );
}

function handleStartTrial() {
  if (typeof document === "undefined") {
    return;
  }

  const target = [
    document.getElementById("contact"),
    document.getElementById("hero-form-container"),
    document.getElementById("pricing"),
  ].find((element) => element && element.getClientRects().length > 0);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  openBookDemoModal("Start Your TrioCRM Trial");
}

function FlowPoint({ children, type, index }) {
  const isSolution = type === "solution";

  return (
    <li className="group/item relative flex items-start gap-4 border-b border-slate-200/70 pb-5 last:border-b-0 last:pb-0">
      <span
        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover/item:scale-110 ${
          isSolution
            ? "bg-emerald-50 text-[#00a86b] shadow-[0_0_18px_rgba(0,178,116,0.16)]"
            : "bg-rose-50 text-rose-500"
        }`}
        aria-hidden="true"
      >
        <LineIcon
          name={isSolution ? "check" : "x"}
          className="h-4 w-4 stroke-[2.5]"
        />
      </span>
      <div className="min-w-0">
        <span
          className={`mb-1 block text-[0.66rem] font-bold uppercase tracking-[0.22em] ${
            isSolution ? "text-teal-600" : "text-rose-400"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="block text-base leading-7 text-slate-700 transition-colors duration-300 group-hover/item:text-slate-950">
          {children}
        </span>
      </div>
    </li>
  );
}

function FlowColumn({ eyebrow, title, subtitle, type, points }) {
  const isSolution = type === "solution";

  return (
    <div
      className={`group relative transition-transform duration-500 hover:-translate-y-1 ${
        isSolution ? "crm-solution-emphasis" : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute -inset-x-4 -inset-y-8 opacity-80 blur-3xl ${
          isSolution
            ? "bg-[radial-gradient(ellipse_at_70%_35%,rgba(20,184,166,0.18),transparent_68%)]"
            : "bg-[radial-gradient(ellipse_at_30%_35%,rgba(244,63,94,0.09),transparent_70%)]"
        }`}
      />

      <div className="relative z-10">
        <div className="mb-8 flex items-start gap-4">
          <span
            className={`mt-1 inline-flex shrink-0 transition-all duration-500 group-hover:scale-110 ${
              isSolution ? "text-[#00a86b]" : "text-rose-500"
            }`}
            aria-hidden="true"
          >
            {isSolution ? (
              <LineIcon name="sparkles" className="h-8 w-8 stroke-[1.7]" />
            ) : (
              <LineIcon name="x" className="h-8 w-8 stroke-[1.9]" />
            )}
          </span>
          <div>
            <p
              className={`mb-2 text-xs font-bold uppercase tracking-[0.28em] ${
                isSolution ? "text-teal-600" : "text-rose-500"
              }`}
            >
              {eyebrow}
            </p>
            <h3 className="text-3xl font-semibold leading-tight tracking-normal text-[#07162e] md:text-4xl">
              {title}
            </h3>
          </div>
        </div>

        <p className="mb-9 max-w-lg text-base leading-7 text-slate-600">
          {subtitle}
        </p>

        <ul className="space-y-5">
          {points.map((point, index) => (
            <FlowPoint key={point} type={type} index={index}>
              {point}
            </FlowPoint>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProblemSolutionSection({
  badge = "PROBLEM TO SOLUTION",
  title = "Why Businesses Switch to TrioCRM",
  description = "TrioCRM turns disconnected sales work into one clear path from lead capture to follow-up, pipeline visibility, and faster conversion.",
  problemTitle = "Before TrioCRM",
  solutionTitle = "After TrioCRM",
  problemPoints = defaultProblemPoints,
  solutionPoints = defaultSolutionPoints,
  showCta = true,
  primaryCtaLabel = "Start Free Trial",
  secondaryCtaLabel = "Book a Demo",
}) {
  return (
    <section
      id="why-switch"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#fbfffd_45%,#effff9_100%)] py-14 text-slate-950 md:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_44%,rgba(0,178,116,0.14),transparent_58%),radial-gradient(ellipse_at_16%_50%,rgba(244,63,94,0.065),transparent_56%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,rgba(255,255,255,0.96),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#079767]">
            {badge}
          </p>
          <h2 className="mb-5 text-4xl font-semibold leading-tight tracking-normal text-[#07162e] sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            {description}
          </p>
        </Reveal>

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-200/80 to-transparent" />

          <div className="grid gap-9 py-8 lg:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)] lg:gap-7 lg:py-10">
            <Reveal delay={100} from="bottom-left">
              <FlowColumn
                eyebrow="Before TrioCRM"
                title={problemTitle}
                subtitle="Sales activity looks busy, but customer context keeps slipping between tools, people, and delayed next steps."
                type="problem"
                points={problemPoints}
              />
            </Reveal>

            <Reveal delay={180} className="flex items-center justify-center">
              <div className="relative flex min-h-28 w-full items-center justify-center lg:min-h-[34rem]">
                <div className="crm-flow-line-horizontal absolute inset-x-8 top-1/2 h-px -translate-y-1/2 lg:hidden" />
                <div className="crm-flow-line absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block" />
                <div className="absolute left-1/2 top-1/2 hidden w-24 -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(20,184,166,0.18),transparent)] blur-2xl lg:block" />
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-[#00a86b] shadow-[0_18px_50px_rgba(0,178,116,0.2)] ring-1 ring-emerald-100 backdrop-blur">
                  <LineIcon
                    name="arrowRight"
                    className="h-6 w-6 rotate-90 stroke-[2.2] lg:rotate-0"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <FlowColumn
                eyebrow="After TrioCRM"
                title={solutionTitle}
                subtitle="Every lead, action, reminder, and pipeline movement becomes visible in one faster operating rhythm."
                type="solution"
                points={solutionPoints}
              />
            </Reveal>
          </div>
        </div>

        {showCta ? (
          <Reveal delay={280}>
            <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4 border-t border-slate-200/80 pt-7 text-center sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={handleStartTrial}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#00b274] px-7 py-3 text-sm font-bold text-white shadow-[0_18px_38px_rgba(0,178,116,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#009661] hover:shadow-[0_22px_46px_rgba(0,178,116,0.36)] active:translate-y-0"
              >
                <span>{primaryCtaLabel}</span>
                <LineIcon name="arrowRight" className="h-4 w-4 stroke-[2.4]" />
              </button>
              <button
                type="button"
                onClick={() => openBookDemoModal()}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-white/70 px-7 py-3 text-sm font-bold text-[#07162e] shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:text-[#00a86b] hover:shadow-[inset_0_0_0_1px_rgba(0,178,116,0.22),0_16px_34px_rgba(15,23,42,0.08)] active:translate-y-0"
              >
                <LineIcon name="calendar" className="h-4 w-4 stroke-[2.2]" />
                <span>{secondaryCtaLabel}</span>
              </button>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
