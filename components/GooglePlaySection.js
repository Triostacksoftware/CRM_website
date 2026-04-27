'use client';

import React, { useEffect, useRef, useState } from 'react';



const featureCards = [
  {
    title: 'Instant lead alerts',
    description: 'New enquiries, follow-ups, and updates without opening the laptop.',
  },
  {
    title: 'Offline-ready access',
    description: 'View customers, notes, and deal context even in patchy network zones.',
  },
  {
    title: 'Fast field updates',
    description: 'Capture notes, scan cards, and log movement in seconds.',
  },
];

export default function GooglePlaySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white px-6 py-8 md:py-10">
      <div className="pointer-events-none absolute inset-0 bg-white" />
      <div className="pointer-events-none absolute inset-0 bg-white" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_32px_120px_rgba(15,23,42,0.1)]">
          <div className="grid items-center gap-10 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-14 lg:py-14">
            
            {/* Content - Now on Left */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-[#00b274]/30 bg-[#00b274]/14 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#007a50]">
                  Mobile App
                </span>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-950 md:text-5xl xl:text-6xl">
                  CRM that feels
                  <span className="block bg-gradient-to-r from-[#19d3a2] via-[#7ef7c4] to-[#56b8ff] bg-clip-text text-transparent">
                    fast on the move
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 md:text-base">
                  A cleaner mobile companion for leads, follow-ups, and quick field updates. Less noise, faster action,
                  and the same core CRM context wherever your team is working.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {featureCards.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-colors hover:border-[#00b274]/20 hover:bg-[#f8fffc]"
                    >
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#00b274]/20 text-[#007a50]">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-semibold text-slate-950">{feature.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-slate-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-[#00b274]/25 bg-[linear-gradient(90deg,rgba(20,195,142,0.12),rgba(56,189,248,0.06))] px-6 py-4 text-left transition-all hover:border-[#00b274]/45 hover:shadow-[0_16px_40px_rgba(20,195,142,0.14)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white overflow-hidden shadow-sm">
                      <img src="/play-store.jpg" alt="Play Store Icon" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">Mobile access</span>
                      <span className="mt-1 block text-base font-semibold text-slate-950 group-hover:text-[#00b274]">
                        Request the app demo
                      </span>
                    </div>
                  </a>

                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile UI - Now on Right */}
            <div
              className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-150 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="relative w-full max-w-[420px] rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
                <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-[#00b274]/10 blur-3xl" />

                <div className="relative mx-auto w-[220px] rounded-[2.6rem] border-[7px] border-[#273247] bg-[#1a2333] p-2.5 shadow-[0_20px_70px_rgba(0,178,116,0.12)] md:w-[250px]">
                  <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-[18px] bg-[#2b3548]" />

                  <div className="relative overflow-hidden rounded-[2rem] bg-[#091321]">
                    <img
                      src="/crm%20screen%20shot/Screenshot%20(530).png"
                      alt="TrioCRM mobile workflow preview"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/82 via-[#081322]/72 to-[#091321]/96" />
                    <div className="relative flex min-h-[470px] flex-col px-4 pb-4 pt-5">
                      <div className="flex items-center justify-between border-b border-white/8 pb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-white p-1 shadow-sm">
                            <img
                              src="/trio-logo.png"
                              alt="Trio CRM 360 logo"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <span className="text-[11px] font-semibold text-white">Trio-CRM 360</span>
                        </div>
                        <div className="space-y-1">
                          <span className="block h-[2px] w-5 rounded-full bg-white/80" />
                          <span className="block h-[2px] w-5 rounded-full bg-white/80" />
                          <span className="block h-[2px] w-5 rounded-full bg-white/80" />
                        </div>
                      </div>

                      <div className="mt-14">
                        <p className="text-[8px] font-bold uppercase tracking-[0.42em] text-[#17d29f]">
                          Sales & Growth Automation
                        </p>
                        <h3 className="mt-3 text-[2rem] font-semibold leading-none tracking-[-0.04em] text-white">
                          TRIO-CRM
                        </h3>
                        <p className="mt-4 text-[8px] leading-[1.9] text-slate-200">
                          Stop losing deals to manual follow-ups. CRM Solutions helps you automate your sales
                          pipeline, track every interaction, and grow your revenue with India&apos;s smartest CRM
                          platform.
                        </p>
                      </div>

                      <div className="mt-6 space-y-3.5">
                        {[
                          "Close deals 30% faster with automated follow-ups",
                          "Never lose a lead with 24/7 automated capture",
                          "Gain real-time visibility into your entire sales team",
                          "Automate lead assignment to the right sales rep instantly",
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#00b274]/20 text-[#11cf9d]">
                              <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-[8px] font-semibold leading-[1.7] text-slate-100">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto border-t border-white/8 pt-5 text-center">
                        <p className="text-sm font-semibold leading-snug text-white">
                          Trusted by growing businesses
                          <span className="block">across India</span>
                        </p>
                        <div className="mt-4 flex items-center justify-between text-[7px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <span>Call:</span>
                            <span className="text-[8px] text-white">+91 9211941924</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span>WhatsApp:</span>
                            <span className="text-[8px] text-white">88265 23845</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="float-slow absolute -left-3 top-10 hidden rounded-2xl border border-slate-200 bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md md:block">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Sync</p>
                  <p className="mt-1 text-sm font-semibold text-slate-950">Offline ready</p>
                </div>

                <div className="float-slow-delayed absolute -right-3 bottom-12 hidden rounded-2xl border border-[#00b274]/15 bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md md:block">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#007a50]">Update</p>
                  <p className="mt-1 text-sm font-semibold text-slate-950">Field notes in 1 tap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .float-slow {
          animation: floatSlow 4.6s ease-in-out infinite;
        }

        .float-slow-delayed {
          animation: floatSlow 5.4s ease-in-out infinite;
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
