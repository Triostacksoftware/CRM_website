"use client";

import React, { useState } from "react";
import BookCallModal from "./BookCallModal";

export default function ConsultationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00b274]/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.28)] lg:h-[520px] lg:aspect-auto">
            <img
              src="/consultation-team-humanized.png"
              alt="CRM consultation with a business team"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.08),rgba(11,18,32,0.12)_50%,rgba(11,18,32,0.4))]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0b1220]/45 to-transparent" />
          </div>

          <div className="space-y-8 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)] lg:space-y-10 lg:p-10">
            <div className="space-y-5">
              <span className="block text-xs font-bold uppercase tracking-[0.4em] text-[#00b274]">
                READY TO GROW?
              </span>
              <h2 className="text-4xl font-bold leading-tight text-slate-950 lg:text-5xl">
                Ready to Transform <br className="hidden md:block" /> Your Sales Pipeline?
              </h2>
              <p className="max-w-2xl text-[1.1rem] leading-8 text-slate-600 md:text-[1.22rem]">
                Get personalized consultation to understand how our CRM can fit your business needs, improve day-to-day operations, and give your team a clearer sales workflow.
              </p>
              <p className="max-w-2xl text-base leading-7 text-slate-500 md:text-lg">
                We walk you through real use cases, practical automations, and rollout steps so you can choose the right setup with confidence.
              </p>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                Join hundreds of growing businesses across India that use CRM Solutions to automate their sales, delight their customers, and scale their revenue.
              </p>

              {/* Model & Map Section */}
              <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2">
                {/* Small Map Widget */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:bg-slate-100 hover:border-[#00b274]/30 hover:shadow-lg">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00b274]/10 text-[#00b274]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">Global Presence</span>
                  </div>
                  <div className="relative h-24 w-full overflow-hidden rounded-lg bg-[#0B1220]">
                    <img 
                      src="/premium_dark_map.png" 
                      alt="Global Network Map" 
                      className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Data Model Widget */}
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all hover:bg-slate-100 hover:border-[#00b274]/30 hover:shadow-lg">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00b274]/10 text-[#00b274]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-900">Data Intelligence</span>
                  </div>
                  <div className="relative h-24 w-full overflow-hidden rounded-lg bg-[#0B1220]">
                    <img 
                      src="/crm_3d_model.png" 
                      alt="CRM Data Model" 
                      className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={toggleModal}
              className="group relative cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-[#00b274] to-[#008a5a] px-8 py-3.5 font-bold text-white shadow-[0_10px_30px_rgba(0,178,116,0.2)] transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,178,116,0.35)] active:scale-95"
            >
              <span className="relative z-10">Book Demo</span>
              <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
            </button>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={isModalOpen} onClose={toggleModal} />
    </section>
  );
}
