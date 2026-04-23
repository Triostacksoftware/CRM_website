"use client";

import { useEffect } from "react";

export default function BookCallModal({ isOpen, onClose }) {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-8 sm:px-6"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className="absolute inset-0 bg-[#020814]/80 backdrop-blur-md animate-fade-in" />

      <div
        className="relative z-10 w-full max-w-lg animate-slide-up"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-call-title"
        id="book-call-modal"
      >
        <div className="glass-card relative rounded-[28px] border border-white/30 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close book call modal"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-6 pr-12">
            <h2 id="book-call-title" className="mb-1 text-3xl font-bold text-slate-900">
              Book a Call
            </h2>
            <p className="text-sm text-slate-500">Share your details and our team will contact you shortly.</p>
          </div>

          <div className="mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00b274]">Message Us</span>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Full Name *"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number *"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Work Email (Optional)"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company Name (Optional)"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
              />
            </div>
            <div>
              <select className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20">
                <option value="">CRM Solutions</option>
                <option value="enterprise">Enterprise CRM</option>
                <option value="sales">Sales Automation</option>
                <option value="custom">Custom Implementation</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#00b274] py-4 font-bold text-white shadow-lg shadow-[#00b274]/30 transition-all duration-300 hover:bg-[#009661] active:scale-[0.98]"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
