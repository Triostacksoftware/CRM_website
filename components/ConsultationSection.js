"use client";

import React, { useState } from "react";
import BookCallModal from "./BookCallModal";

export default function ConsultationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event) => {
    if (event) event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const benefits = [
    {
      title: "Capture and track every lead",
      description: "Bring web forms, calls, and referrals into one clean pipeline.",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 12h6l3 8 4-16 3 8h2" />
        </svg>
      ),
    },
    {
      title: "Automate WhatsApp follow-ups",
      description: "Send instant reminders, updates, and nudges without manual chasing.",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M8 10h8M8 14h5m8-2a9 9 0 11-3.37-7.04L21 3l-1.18 3.55A8.97 8.97 0 0121 12z" />
        </svg>
      ),
    },
    {
      title: "Never miss a deal stage",
      description: "Get task alerts and movement history for each opportunity.",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Run GST-ready sales operations",
      description: "Keep invoicing, records, and follow-through aligned with Indian workflows.",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 17v-6m3 6V7m3 10v-4m5 8H4a1 1 0 01-1-1V4a1 1 0 011-1h9l8 8v9a1 1 0 01-1 1z" />
        </svg>
      ),
    },
    {
      title: "Monitor team performance live",
      description: "Compare rep activity, conversions, and response times in real time.",
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 19h16M7 16V9m5 7V5m5 11v-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="consultation" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(0,178,116,0.12),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_42%,#eef6f4_100%)] px-6 py-20 md:py-32">
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00b274]/12 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-sky-500/12 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.98fr] lg:gap-16">
          <div className="relative">
            <div className="relative rounded-[2rem] bg-slate-100/70 p-3 lg:p-4">
              <img
                src="/crm screen shot/Screenshot (529).png"
                alt="TrioCRM dashboard showing lead stages, activity, and analytics"
                className="block w-full h-auto rounded-[1.35rem]"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6 lg:space-y-7">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00b274]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00b274]">
                  Scale Your Operations
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 lg:text-5xl">
                One CRM to manage leads, follow-ups, and sales execution without gaps.
              </h2>

              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                Track every lead source, automate WhatsApp engagement, and run GST-aligned sales workflows built for Indian teams that handle high daily volume.
              </p>

              <ul className="space-y-4 pt-1">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00b274]/12 text-[#00b274]">
                      {benefit.icon}
                    </span>
                    <p className="text-[1rem] leading-relaxed text-slate-700">
                      <span className="font-bold text-slate-900">{benefit.title}</span>{" "}
                      <span>{benefit.description}</span>
                    </p>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-2 text-base font-bold text-[#00a86b] transition-colors hover:text-[#008f5b]"
                >
                  <span>See How It Works</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14m-4-4 4 4-4 4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
