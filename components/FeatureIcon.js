import React from "react";

export default function FeatureIcon({ type, className = "h-7 w-7" }) {
  const icons = {
    lead: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <circle cx="9" cy="8" r="3.1" />
        <path d="M4.5 18c.6-2.7 2.85-4.5 5.5-4.5s4.9 1.8 5.5 4.5" strokeLinecap="round" />
        <path d="M18 7v6" strokeLinecap="round" />
        <path d="M15 10h6" strokeLinecap="round" />
      </svg>
    ),
    pipeline: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 19V9" strokeLinecap="round" />
        <path d="M12 19V5" strokeLinecap="round" />
        <path d="M19 19v-7" strokeLinecap="round" />
        <circle cx="5" cy="7" r="2" />
        <circle cx="12" cy="3" r="2" />
        <circle cx="19" cy="10" r="2" />
        <path d="M7 7h3" strokeLinecap="round" />
        <path d="M14 4h3" strokeLinecap="round" />
      </svg>
    ),
    contacts: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M4.5 18a4.5 4.5 0 0 1 9 0" strokeLinecap="round" />
        <circle cx="17.5" cy="9" r="2.5" />
        <path d="M15.5 18a4 4 0 0 1 4-3" strokeLinecap="round" />
      </svg>
    ),
    automation: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M13 2L6 14h5l-1 8 8-12h-5l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    reminders: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M8 5V3" strokeLinecap="round" />
        <path d="M16 5V3" strokeLinecap="round" />
        <rect x="4" y="5" width="16" height="15" rx="3" />
        <path d="M8 11h8" strokeLinecap="round" />
        <path d="M8 15h5" strokeLinecap="round" />
      </svg>
    ),
    documents: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
        <path d="M6 21V6.5A2.5 2.5 0 0 1 8.5 4H18v17H6Z" strokeLinejoin="round" />
        <path d="M6 9h12" strokeLinecap="round" />
        <path d="M10 4v17" strokeLinecap="round" />
        <path d="M13.5 12.5h1" strokeLinecap="round" />
        <path d="M13.5 16h1" strokeLinecap="round" />
      </svg>
    ),
    billing: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M7 4h10a2 2 0 0 1 2 2v12l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5V6a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
        <path d="M9 9h6" strokeLinecap="round" />
        <path d="M9 13h6" strokeLinecap="round" />
      </svg>
    ),
    expenses: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="6" width="16" height="12" rx="3" />
        <path d="M4 10h16" strokeLinecap="round" />
        <circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
    tax: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 4l7 4v4c0 4.5-2.8 7.8-7 8-4.2-.2-7-3.5-7-8V8l7-4Z" strokeLinejoin="round" />
        <path d="M9.5 12l1.7 1.7L14.8 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    forecasts: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 19V8" strokeLinecap="round" />
        <path d="M10 19V12" strokeLinecap="round" />
        <path d="M16 19V5" strokeLinecap="round" />
        <path d="M4 19h16" strokeLinecap="round" />
      </svg>
    ),
    team: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M4.5 18a3.5 3.5 0 0 1 7 0" strokeLinecap="round" />
        <path d="M12.5 18a3.5 3.5 0 0 1 7 0" strokeLinecap="round" />
      </svg>
    ),
    dashboard: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <path d="M5 19V9" strokeLinecap="round" />
        <path d="M12 19V5" strokeLinecap="round" />
        <path d="M19 19v-7" strokeLinecap="round" />
        <path d="M4 19h16" strokeLinecap="round" />
        <circle cx="5" cy="7" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="12" cy="3.8" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="19" cy="10" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    phone: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    whatsapp: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.85" aria-hidden="true">
        <path d="M12 4a7.5 7.5 0 0 1 7.5 7.5c0 4.14-3.36 7.5-7.5 7.5-1.27 0-2.47-.31-3.53-.87L4 19.5l1.37-4.3A7.47 7.47 0 0 1 4.5 11.5 7.5 7.5 0 0 1 12 4Z" strokeLinejoin="round" />
        <path d="M9.4 9.35c.18-.4.37-.41.54-.42h.46c.14 0 .36.05.55.46.19.4.63 1.57.68 1.68.05.11.09.24.02.39-.08.15-.12.25-.24.38-.12.13-.25.29-.36.39-.12.11-.25.23-.11.46.14.23.62 1.02 1.34 1.65.92.8 1.7 1.05 1.94 1.17.24.12.38.1.52-.06.14-.15.59-.69.75-.93.16-.24.31-.2.52-.12.22.08 1.37.65 1.6.77.23.12.38.18.44.27.05.09.05.53-.12 1.04-.17.5-.99.98-1.38 1.04-.36.05-.82.08-1.33-.09-.31-.1-.71-.23-1.23-.46-2.16-.94-3.57-3.2-3.68-3.36-.11-.15-.88-1.18-.88-2.25 0-1.06.56-1.58.77-1.79Z" fill="currentColor" stroke="none" />
      </svg>
    ),
    payment: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M7 15h.01" />
        <path d="M11 15h2" />
      </svg>
    ),
    ticket: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <path d="M4.5 13.5v-1A7.5 7.5 0 0 1 12 5a7.5 7.5 0 0 1 7.5 7.5v1" strokeLinecap="round" />
        <path d="M6.5 12.5h-1A1.5 1.5 0 0 0 4 14v2A1.5 1.5 0 0 0 5.5 17h1.25a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-.75-.75Z" />
        <path d="M17.5 12.5h1A1.5 1.5 0 0 1 20 14v2a1.5 1.5 0 0 1-1.5 1h-1.25a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 .75-.75Z" />
        <path d="M9.5 19.5c.78.33 1.62.5 2.5.5s1.72-.17 2.5-.5" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[type] ?? icons.dashboard;
}
