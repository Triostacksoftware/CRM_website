"use client";

const steps = [
  {
    number: "01",
    title: "Capture Leads",
    description: "Collect leads from your website, ads, WhatsApp, and campaigns in one connected CRM workspace.",
    icon: "inbox",
  },
  {
    number: "02",
    title: "Assign Automatically",
    description: "Route every new enquiry to the right team member using simple, reliable assignment rules.",
    icon: "team",
  },
  {
    number: "03",
    title: "Follow-up & Automate",
    description: "Trigger reminders, workflows, and next actions so every lead keeps moving forward.",
    icon: "gear",
  },
  {
    number: "04",
    title: "Close Deals",
    description: "Track pipeline progress clearly and convert qualified leads into paying customers faster.",
    icon: "check",
  },
];

function StepIcon({ type }) {
  const commonProps = {
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  };

  const paths = {
    inbox: (
      <>
        <path d="M4 4h16l-2 10H6L4 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        <path d="M6 14l2.5 4h7L18 14M9 9h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </>
    ),
    team: (
      <>
        <path d="M16 11a4 4 0 10-8 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        <path d="M6 20a6 6 0 0112 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        <path d="M19 8a3 3 0 012 5M5 8a3 3 0 00-2 5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </>
    ),
    gear: (
      <>
        <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </>
    ),
    check: (
      <>
        <path d="M20 7L10 17l-5-5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
        <path d="M12 3a9 9 0 109 9" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </>
    ),
  };

  return <svg {...commonProps}>{paths[type]}</svg>;
}

function FlowStep({ step, index, isLast }) {
  const isEven = index % 2 === 0;

  return (
    <li className="group relative flex gap-6 transition-all duration-500 hover:-translate-y-1 lg:block lg:flex-1">
      {!isLast ? (
        <div className="absolute left-[1.35rem] top-14 h-[calc(100%+3rem)] w-px bg-gradient-to-b from-[#d8ece4] via-[#00b274]/35 to-[#d8ece4] lg:hidden" />
      ) : null}

      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d6eee4] bg-white text-[#0fb37a] shadow-[0_14px_32px_rgba(15,23,42,0.08)] transition-all duration-500 group-hover:scale-105 group-hover:border-[#00b274]/45 group-hover:text-[#009661] group-hover:shadow-[0_18px_40px_rgba(17,175,120,0.16)] lg:mx-auto lg:h-14 lg:w-14">
        <StepIcon type={step.icon} />
      </div>

      <div
        className={`relative z-10 max-w-xl pb-10 lg:pb-0 ${
          isEven ? "lg:pt-10" : "lg:flex lg:min-h-[18rem] lg:flex-col lg:justify-end lg:pb-10"
        }`}
      >
        <span className="mb-3 inline-flex text-xs font-bold uppercase tracking-[0.18em] text-[#18ad78]">
          Step {step.number}
        </span>
        <h3 className="relative mb-3 text-2xl font-bold leading-tight text-slate-950 transition-colors duration-300 group-hover:text-[#0f9e6d] md:text-[1.75rem]">
          {step.title}
        </h3>
        <p className="relative text-[15px] leading-8 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
          {step.description}
        </p>
      </div>
    </li>
  );
}

export default function HowItWorksSection() {
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

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfa_0%,#ffffff_45%,#f8fffc_100%)] py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8ece4] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d8ece4] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <span className="mb-5 inline-flex rounded-full border border-[#cfeee3] bg-[#effaf4] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#1baf78] shadow-[0_10px_24px_rgba(11,143,102,0.08)]">
            How it works
          </span>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            How TriocRM Works
          </h2>
          <p className="text-base leading-relaxed text-slate-500 md:text-lg">
            A simple 4-step process to capture, manage, and convert your leads efficiently.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#bfead8] to-transparent lg:block" />
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-[#00b274]/0 via-[#00b274]/45 to-[#00b274]/0 lg:block" />

          <ol className="relative flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-10">
            {steps.map((step, index) => (
              <FlowStep key={step.number} step={step} index={index} isLast={index === steps.length - 1} />
            ))}
          </ol>
        </div>

        <div className="mx-auto mt-10 max-w-3xl border-t border-[#d8ece4] pt-10 text-center md:mt-16 md:pt-12">
          <h3 className="mb-5 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
            Start managing your leads smarter today
          </h3>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#11b178] to-[#099a66] px-9 py-4 text-sm font-bold text-white shadow-[0_14px_32px_rgba(17,177,120,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(17,177,120,0.34)]"
            >
              Start Free Trial
            </a>
            <button
              type="button"
              onClick={openBookDemoModal}
              className="inline-flex items-center justify-center rounded-full border border-[#00b274]/20 bg-white px-9 py-4 text-sm font-bold text-[#00b274] shadow-[0_10px_24px_rgba(11,143,102,0.08)] transition-all hover:-translate-y-0.5 hover:border-[#00b274]/40 hover:bg-[#f8fffc]"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
