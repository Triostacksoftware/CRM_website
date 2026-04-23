const industries = [
  "Manufacturing",
  "Hospitality",
  "Real Estate",
  "Healthcare",
  "Education",
  "Retail",
  "Logistics",
];

const policyLinks = [
  { label: "Complaint", href: "#contact" },
  { label: "Contact", href: "/#contact" },
  { label: "Board Of Directors", href: "#" },
  { label: "Leadership Team", href: "#" },
  { label: "Cancellation & Refund Policy", href: "#" },
  { label: "Shipping & Delivery", href: "#" },
  { label: "Privacy & Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const solutionLinks = [
  { label: "appointment-booking-solutions", href: "#" },
  { label: "best-crm-solutions-in-noida", href: "#" },
  { label: "top-appointment-booking-solutions-in-chennai", href: "#" },
];

const officeLocations = [
  {
    title: "Head Office",
    lines: [
      "IIMT Business Ladder Foundation,",
      "Plot No. 19, Knowledge Park-3,",
      "Greater Noida (Pin: 201310)",
    ],
  },
  {
    title: "Second Office",
    lines: [
      "Plot No: 20, Block: H-1/A,",
      "Sector 63, Noida-201301, UP",
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56a1.97 1.97 0 1 0-3.94 0 1.97 1.97 0 0 0 3.94 0ZM20.44 13.04c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.86V8.5H9.36c.04.87 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.02 1.88 2.52V20H20v-7.96h.44Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M8.5 9.5c1-3 6.3-3.4 8.2-.4 2.1 3.2-.1 8.6-4.7 8.6-3.5 0-6-2.3-6-5.7 0-3.2 2.4-5.7 5.9-5.7 4.1 0 6.7 2.2 6.7 6.1 0 4.3-2.8 7.1-6.7 7.1-4.9 0-8-3.2-8-7.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.87.24-1.46 1.5-1.46H16V5.03c-.6-.08-1.36-.13-2.12-.13-2.1 0-3.53 1.28-3.53 3.64V11H8v3h2.35v7h3.15Z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3a9 9 0 0 0-3.28 17.38c-.05-1.47-.01-3.23.34-4.74l1.17-4.98s-.29-.59-.29-1.45c0-1.36.79-2.38 1.78-2.38.84 0 1.25.63 1.25 1.39 0 .84-.54 2.11-.81 3.29-.23.99.49 1.8 1.45 1.8 1.74 0 2.91-2.24 2.91-4.89 0-2.02-1.36-3.53-3.84-3.53-2.8 0-4.54 2.09-4.54 4.43 0 .8.24 1.37.62 1.8.17.2.19.28.13.51-.05.17-.14.57-.18.72-.06.24-.26.33-.47.24-1.32-.54-1.93-1.99-1.93-3.6 0-2.68 2.25-5.89 6.72-5.89 3.59 0 5.95 2.6 5.95 5.39 0 3.68-2.05 6.42-5.08 6.42-1.02 0-1.98-.55-2.31-1.18l-.63 2.41c-.23.88-.67 1.98-1.08 2.74A9 9 0 1 0 12 3Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.26l-4.9-7.42L5.56 22H2.45l7.25-8.29L1.98 2h6.42l4.43 6.8L18.9 2Zm-1.09 18h1.72L7.46 3.9H5.61L17.81 20Z" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M7.7 7.2c4.2 1.9 7.1 5.2 8.4 9.9M6 13.1c4.6-.9 8.8-.8 12.5.4M10.1 4.2c2.7 3 4.8 6.7 6.1 11.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Product Hunt",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 4H8v16h2.7v-5H12c3.58 0 6-2.2 6-5.52C18 6.2 15.58 4 12 4Zm-.17 8.7h-1.14V6.3h1.14c2 0 3.37 1.1 3.37 3.18 0 2.13-1.37 3.22-3.37 3.22Z" />
      </svg>
    ),
  },
  {
    label: "Upwork",
    href: "#",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.4 7.3c-1.5 0-2.75.78-3.55 2-.9-1.4-1.52-2.87-1.84-4.3H8.6v6.13a2.55 2.55 0 1 1-5.1 0V5H1v6.13a5.05 5.05 0 0 0 10.1 0v-.47c.48.83 1.03 1.65 1.69 2.4l-1.44 6.94h2.57l1.05-5.11c.45.16.93.24 1.43.24 2.9 0 5.26-2.4 5.26-5.35S19.3 7.3 16.4 7.3Zm0 5.3c-.68 0-1.31-.18-1.88-.51l.13-.63c.14-.69.36-1.33.64-1.9.39-.78.96-1.18 1.73-1.18 1.44 0 2.6 1.18 2.6 2.64s-1.16 2.58-2.6 2.58Z" />
      </svg>
    ),
  },
  {
    label: "Justdial",
    href: "#",
    icon: (
      <span className="text-[10px] font-bold uppercase tracking-[0.18em]">JD</span>
    ),
  },
];

function FooterMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10">
        <div className="absolute left-1/2 top-0 h-4.5 w-4.5 -translate-x-1/2 rotate-45 rounded-[3px] bg-[#15d1a3]" />
        <div className="absolute left-[3px] top-[14px] h-4.5 w-4.5 rotate-45 rounded-[3px] bg-[#fd5b66]" />
        <div className="absolute right-[3px] top-[14px] h-4.5 w-4.5 rotate-45 rounded-[3px] bg-[#38bdf8]" />
      </div>
      <span className="text-[2rem] font-semibold tracking-[-0.04em] text-white">Triostack</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/6 bg-[#050b15] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:46px_46px] opacity-20" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a1425] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.08fr_0.82fr_0.92fr_1.08fr]">
          <div className="max-w-sm">
            <FooterMark />
            <p className="mt-8 text-[1.05rem] leading-9 text-slate-300">
              Building modern digital experiences with precision, trust, and scalability.
              Global delivery. Local insight.
            </p>

            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8be9ff]">Social</p>
              <div className="mt-5 grid grid-cols-5 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-white/[0.02] text-slate-200 transition hover:border-[#67e8f9]/40 hover:bg-[#0b1628] hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold uppercase tracking-[-0.03em] text-[#8be9ff]">
              Industries We Serve
            </p>
            <div className="mt-8 grid gap-4 text-[1.02rem] text-slate-300">
              {industries.map((item) => (
                <a key={item} href="#" className="transition hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold uppercase tracking-[-0.03em] text-[#8be9ff]">
              Policy Pages
            </p>
            <div className="mt-8 grid gap-4 text-[1.02rem] text-slate-300">
              {policyLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 transition hover:text-white"
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-transparent text-[#67e8f9] transition group-hover:border-[#67e8f9]/70">
                    {item.label === "Cancellation & Refund Policy" ? (
                      <span className="h-2.5 w-2.5 rounded-full bg-[#2ee6df]" />
                    ) : null}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold uppercase tracking-[-0.03em] text-[#8be9ff]">
              Our Offices
            </p>

            <div className="mt-8 space-y-8">
              {officeLocations.map((office) => (
                <div key={office.title}>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d9f7ff]">
                    {office.title}
                  </p>
                  <div className="mt-3 flex gap-4">
                    <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-[#4ce5ff]" />
                    <div className="space-y-2 text-[1.02rem] leading-8 text-slate-300">
                      {office.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1321] shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
              <iframe
                title="Triostack office location"
                src="https://www.google.com/maps?q=Sector+63+Noida&output=embed"
                className="h-52 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-10 lg:grid-cols-[240px_1fr] lg:items-start">
          <div>
            <p className="text-3xl font-semibold tracking-[-0.04em] text-[#8be9ff]">Our Solutions</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutionLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl tracking-[-0.03em] text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Triostack. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="transition hover:text-white">Privacy Policy</a>
            <a href="#" className="transition hover:text-white">Terms & Conditions</a>
            <a href="/#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
