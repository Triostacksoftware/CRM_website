"use client";

const defaultProblemPoints = [
  "Leads get lost or forgotten",
  "No structured follow-ups",
  "Lack of visibility into sales pipeline",
  "Manual work slows down your team",
];

const defaultSolutionPoints = [
  "Capture and manage every lead in one place",
  "Automated reminders and follow-ups",
  "Real-time sales pipeline visibility",
  "Streamlined workflows for faster conversions",
];

function StatusIcon({ type }) {
  const isSolution = type === "solution";

  return (
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
        isSolution
          ? "border-[#00b274]/25 bg-[#00b274]/10 text-[#00b274]"
          : "border-red-200 bg-red-50 text-red-500"
      }`}
    >
      {isSolution ? (
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
        </svg>
      ) : (
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} />
        </svg>
      )}
    </span>
  );
}

function ComparisonCard({ title, type, points }) {
  const isSolution = type === "solution";

  return (
    <div
      className={`group relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-[2rem] border bg-white px-7 py-7 shadow-[0_16px_44px_rgba(15,23,42,0.08),0_2px_12px_rgba(11,143,102,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.1),0_10px_30px_rgba(11,143,102,0.08)] ${
        isSolution
          ? "border-[#e8f1ec] hover:border-[#bfead8]"
          : "border-red-100 hover:border-red-200"
      }`}
    >
      <div
        className={`pointer-events-none absolute bottom-0 right-0 h-36 w-36 rounded-tl-[5rem] ${
          isSolution ? "bg-[#00b274]/8" : "bg-red-500/5"
        }`}
      />

      <div className="relative z-10 mb-6">
        <span
          className={`inline-flex rounded-full px-3.5 py-1.5 text-xs font-bold shadow-[inset_0_0_0_1px_rgba(24,173,120,0.08)] ${
            isSolution ? "bg-[#effaf4] text-[#18ad78]" : "bg-red-50 text-red-500"
          }`}
        >
          {isSolution ? "Solution" : "Problem"}
        </span>
      </div>

      <h3
        className={`relative z-10 mb-5 text-[1.95rem] font-bold leading-[1.12] text-slate-950 transition-colors duration-300 xl:text-[1.78rem] ${
          isSolution ? "group-hover:text-[#0f9e6d]" : "group-hover:text-red-500"
        }`}
      >
        {title}
      </h3>

      <ul className="relative z-10 space-y-4">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-[15px] leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
            <StatusIcon type={type} />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d8ece4] to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/60" />
    </div>
  );
}

export default function ProblemSolutionSection({
  badge = "Problem to solution",
  title = "Why Businesses Switch to TrioCRM",
  description = "Replace scattered lead tracking and manual follow-ups with a clear sales system built for faster conversions.",
  problemTitle = "Without a CRM",
  solutionTitle = "With TrioCRM",
  problemPoints = defaultProblemPoints,
  solutionPoints = defaultSolutionPoints,
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfa_0%,#ffffff_35%,#fffefc_100%)] py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full border border-[#61d9af]/25 bg-[radial-gradient(circle_at_center,rgba(97,217,175,0.18),rgba(97,217,175,0.06)_45%,transparent_72%)]" />
        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,224,196,0.42),rgba(255,224,196,0.12)_48%,transparent_72%)] blur-[6px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-5 inline-flex rounded-full border border-[#cfeee3] bg-[#effaf4] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#1baf78] shadow-[0_10px_24px_rgba(11,143,102,0.08)]">
            {badge}
          </span>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-slate-500 md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          <ComparisonCard title={problemTitle} type="problem" points={problemPoints} />
          <ComparisonCard title={solutionTitle} type="solution" points={solutionPoints} />
        </div>
      </div>
    </section>
  );
}
