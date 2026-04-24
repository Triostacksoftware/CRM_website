"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { submitLead } from "@/lib/submitLead";

const defaultInterests = [
  { value: "crm_solutions", label: "CRM Solutions" },
  { value: "sales_automation", label: "Sales Automation" },
  { value: "customer_support", label: "Customer Support (Tickets)" },
  { value: "whatsapp_integration", label: "WhatsApp + Omnichannel" },
  { value: "custom_implementation", label: "Custom Implementation" },
];

export default function GetQuoteModal({
  isOpen,
  onClose,
  title = "Get a Quote",
  subtitle = "Share a few details and we’ll follow up with a tailored proposal.",
  interests = defaultInterests,
}) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  const interestOptions = useMemo(() => interests ?? defaultInterests, [interests]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setErrorMessage("");
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !isMounted) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitLead({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        message: formData.get("requirements"),
        formId: "get-quote-modal",
        notes: "Request type: Get a Quote",
        extra: {
          interest: formData.get("interest"),
          team_size: formData.get("team_size"),
          timeline: formData.get("timeline"),
          budget: formData.get("budget"),
          preferred_contact: formData.get("preferred_contact"),
        },
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to submit your request right now."
      );
    }
  };

  const modal = (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center px-4 py-8 sm:px-6"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className="absolute inset-0 bg-[#020814]/80 backdrop-blur-md animate-fade-in" />

      <div
        className="relative z-10 w-full max-w-5xl animate-slide-up"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="get-quote-title"
      >
        <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-[#071223]/85 via-[#060d18]/85 to-[#040813]/85 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#00b274]/15 blur-[70px]" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close get quote modal"
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b274]/70"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative p-7 sm:p-9">
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#00b274]">
                  Request a Proposal
                </span>
                <h2 id="get-quote-title" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/60">{subtitle}</p>
              </div>

              <div className="mt-6 space-y-3 text-sm text-white/70">
                {[
                  "A quick needs assessment with our CRM specialist",
                  "Recommended modules and rollout plan",
                  "Estimated pricing tailored to your team size",
                  "Implementation timeline and onboarding support",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[#00b274] shadow-[0_0_10px_rgba(0,178,116,0.6)]" />
                    <span className="leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold text-white/80">Privacy</p>
                <p className="mt-1 text-xs leading-relaxed text-white/55">
                  We’ll only use your details to contact you about your CRM requirements. No spam.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="border-t border-white/10 bg-white/5 p-7 sm:p-9 md:border-l md:border-t-0">
              {status === "success" ? (
                <div className="flex h-full flex-col justify-center">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00b274]/15 text-[#7ef7c4] ring-1 ring-[#00b274]/25">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Request received</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Thanks! Our team will reach out shortly with the next steps.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center justify-center rounded-xl bg-[#00b274] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#00b274]/25 transition hover:bg-[#009661]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-white/70">Full Name *</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-white/10 bg-[#0b1220]/60 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-[#00b274]/60 focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-white/70">Phone *</label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Phone number"
                        className="w-full rounded-xl border border-white/10 bg-[#0b1220]/60 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-[#00b274]/60 focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-white/70">Work Email *</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-white/10 bg-[#0b1220]/60 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-[#00b274]/60 focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-white/70">Company</label>
                      <input
                        name="company"
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-xl border border-white/10 bg-[#0b1220]/60 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-[#00b274]/60 focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-white/70">Interested In</label>
                      <select
                        name="interest"
                        className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#0b1220]/60 px-4 py-3 text-sm text-white/80 transition focus:border-[#00b274]/60 focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                        defaultValue={interestOptions[0]?.value ?? ""}
                      >
                        {interestOptions.map((option) => (
                          <option key={option.value} value={option.value} className="bg-[#0b1220] text-white">
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-white/70">Team Size</label>
                      <select
                        name="team_size"
                        className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#0b1220]/60 px-4 py-3 text-sm text-white/80 transition focus:border-[#00b274]/60 focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                        defaultValue=""
                      >
                        <option value="" className="bg-[#0b1220] text-white/80">
                          Select
                        </option>
                        <option value="1-5" className="bg-[#0b1220] text-white">
                          1–5
                        </option>
                        <option value="6-20" className="bg-[#0b1220] text-white">
                          6–20
                        </option>
                        <option value="21-50" className="bg-[#0b1220] text-white">
                          21–50
                        </option>
                        <option value="50+" className="bg-[#0b1220] text-white">
                          50+
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-white/70">Timeline</label>
                      <select
                        name="timeline"
                        className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#0b1220]/60 px-4 py-3 text-sm text-white/80 transition focus:border-[#00b274]/60 focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                        defaultValue=""
                      >
                        <option value="" className="bg-[#0b1220] text-white/80">
                          Select
                        </option>
                        <option value="immediate" className="bg-[#0b1220] text-white">
                          Immediate
                        </option>
                        <option value="2-4_weeks" className="bg-[#0b1220] text-white">
                          2–4 weeks
                        </option>
                        <option value="1-3_months" className="bg-[#0b1220] text-white">
                          1–3 months
                        </option>
                        <option value="exploring" className="bg-[#0b1220] text-white">
                          Just exploring
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-white/70">Budget</label>
                      <select
                        name="budget"
                        className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#0b1220]/60 px-4 py-3 text-sm text-white/80 transition focus:border-[#00b274]/60 focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                        defaultValue=""
                      >
                        <option value="" className="bg-[#0b1220] text-white/80">
                          Select
                        </option>
                        <option value="under_25k" className="bg-[#0b1220] text-white">
                          Under ₹25k
                        </option>
                        <option value="25k_50k" className="bg-[#0b1220] text-white">
                          ₹25k–₹50k
                        </option>
                        <option value="50k_1l" className="bg-[#0b1220] text-white">
                          ₹50k–₹1L
                        </option>
                        <option value="1l_plus" className="bg-[#0b1220] text-white">
                          ₹1L+
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-white/70">
                      Requirements (optional)
                    </label>
                    <textarea
                      name="requirements"
                      rows={4}
                      placeholder="Tell us about your workflow, integrations, or any must-have features…"
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#0b1220]/60 px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-[#00b274]/60 focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="hidden sm:block">
                      <label className="mb-1 block text-xs font-semibold text-white/70">Preferred Contact</label>
                      <select
                        name="preferred_contact"
                        className="w-full cursor-pointer appearance-none rounded-xl border border-white/10 bg-[#0b1220]/60 px-4 py-3 text-sm text-white/80 transition focus:border-[#00b274]/60 focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                        defaultValue="phone"
                      >
                        <option value="phone" className="bg-[#0b1220] text-white">
                          Phone
                        </option>
                        <option value="email" className="bg-[#0b1220] text-white">
                          Email
                        </option>
                        <option value="whatsapp" className="bg-[#0b1220] text-white">
                          WhatsApp
                        </option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#00b274] to-[#00d48a] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#00b274]/25 transition hover:from-[#00a86e] hover:to-[#00c985] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === "submitting" ? "Submitting..." : "Request Quote"}
                    </button>
                  </div>

                  {errorMessage ? <p className="text-sm text-red-300">{errorMessage}</p> : null}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
