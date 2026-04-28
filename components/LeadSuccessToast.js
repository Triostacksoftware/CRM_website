"use client";

import { useEffect, useRef, useState } from "react";

const AUTO_HIDE_MS = 4200;

export default function LeadSuccessToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("Thank you! Your details were submitted successfully.");
  const timerRef = useRef(null);

  useEffect(() => {
    const handleSuccess = (event) => {
      const nextMessage = event?.detail?.message;
      setMessage(typeof nextMessage === "string" && nextMessage.trim() ? nextMessage : "Thank you! Your details were submitted successfully.");
      setIsVisible(true);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, AUTO_HIDE_MS);
    };

    window.addEventListener("lead:success", handleSuccess);
    return () => {
      window.removeEventListener("lead:success", handleSuccess);
      window.clearTimeout(timerRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed right-4 top-24 z-[12000] w-[min(92vw,360px)] sm:right-6">
      <div className="pointer-events-auto rounded-2xl border border-[#00b274]/20 bg-white/95 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.2)] backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00b274]/12 text-[#00b274]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-900">Thank You</p>
            <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{message}</p>
          </div>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="ml-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close success message"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

