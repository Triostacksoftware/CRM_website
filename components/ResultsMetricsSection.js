"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    target: 40,
    suffix: "%",
    label: "Increase in Conversion Rate",
  },
  {
    target: 60,
    suffix: "%",
    label: "Faster Response Time",
  },
  {
    target: 1000,
    suffix: "+",
    label: "Businesses Trust TrioCRM",
  },
  {
    target: 24,
    suffix: "/7",
    label: "Automated Lead Tracking",
  },
];

function formatMetric(value, suffix) {
  return `${Math.round(value)}${suffix}`;
}

export default function ResultsMetricsSection() {
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [values, setValues] = useState(metrics.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEntered) {
      return undefined;
    }

    let animationFrame;
    const duration = 1300;
    const startedAt = performance.now();

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValues(metrics.map((metric) => metric.target * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasEntered]);

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
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfa_0%,#ffffff_42%,#f8fffc_100%)] py-12 md:py-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-12 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(131,231,198,0.18),transparent_68%)] blur-3xl" />
        <div className="absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,224,196,0.36),rgba(255,224,196,0.12)_48%,transparent_72%)] blur-[8px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-9 max-w-3xl text-center md:mb-11">
          <span className="mb-5 block text-xs font-bold uppercase tracking-[0.18em] text-[#1baf78]">
            Results
          </span>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
            Real Results with TrioCRM
          </h2>
          <p className="text-base leading-relaxed text-slate-500 md:text-lg">
            Businesses using TrioCRM see measurable improvements in sales performance and team efficiency.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#d8ece4] to-transparent lg:block" />

          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="group relative flex flex-1 items-center py-6 transition-all duration-500 hover:-translate-y-1 lg:block lg:px-8 lg:py-2">
                <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8ece4] to-transparent lg:hidden" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00b274]/0 blur-2xl transition-all duration-500 group-hover:bg-[#00b274]/14" />

                <div className="relative z-10 flex w-full items-baseline justify-between gap-6 lg:block lg:text-center">
                  <p className="text-5xl font-bold leading-none text-slate-950 transition-all duration-500 group-hover:scale-[1.03] group-hover:text-[#0f9e6d] md:text-6xl xl:text-7xl">
                    {formatMetric(values[index], metric.suffix)}
                  </p>
                  <p className="max-w-[11rem] text-right text-sm font-semibold leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-600 lg:mx-auto lg:mt-5 lg:text-center">
                    {metric.label}
                  </p>
                </div>

                {index < metrics.length - 1 ? (
                  <div className="pointer-events-none absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#d8ece4] to-transparent lg:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl border-t border-[#d8ece4] pt-8 text-center md:mt-10 md:pt-9">
          <h3 className="mb-5 text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
            See these results in your business
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
