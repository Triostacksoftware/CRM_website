const productLinks = [
  { label: "Lead Capture Hub", href: "/features" },
  { label: "Customer 360 Workspace", href: "/features" },
  { label: "Sales Pipeline Engine", href: "/features" },
  { label: "Workflow Automation Studio", href: "/features" },
  { label: "Revenue & GST Dashboard", href: "/features" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  { label: "Blogs", href: "/blogs" },
  { label: "Request Demo", href: "/#contact" },
];

const crmUseCases = [
  "Lead-to-revenue visibility",
  "Territory and branch control",
  "Executive forecasting",
  "Compliance-ready operations",
];

const trustHighlights = [
  { value: "360", label: "customer view" },
  { value: "24/7", label: "pipeline visibility" },
  { value: "GST", label: "billing readiness" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.26l-4.9-7.42L5.56 22H2.45l7.25-8.29L1.98 2h6.42l4.43 6.8L18.9 2Zm-1.09 18h1.72L7.46 3.9H5.61L17.81 20Z" />
      </svg>
    ),
  },
  {
    label: "Justdial",
    href: "https://www.justdial.com/",
    icon: <span className="text-[10px] font-bold uppercase tracking-[0.18em]">JD</span>,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.87.24-1.46 1.5-1.46H16V5.03c-.6-.08-1.36-.13-2.12-.13-2.1 0-3.53 1.28-3.53 3.64V11H8v3h2.35v7h3.15Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56a1.97 1.97 0 1 0-3.94 0 1.97 1.97 0 0 0 3.94 0ZM20.44 13.04c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.86V8.5H9.36c.04.87 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.02 1.88 2.52V20H20v-7.96h.44Z" />
      </svg>
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
      <div>
        <span className="block text-[1.7rem] font-semibold tracking-[-0.04em] text-white">CRM Suite</span>
        <span className="text-xs uppercase tracking-[0.24em] text-slate-400">Sales and Operations CRM</span>
      </div>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#8be9ff]">{title}</p>
      <div className="mt-5 grid gap-3 text-sm text-slate-300">
        {links.map((item) => (
          <a key={item.label} href={item.href} className="transition hover:text-white">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function SocialMediaLink({ label, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.02] text-slate-200 transition hover:border-[#67e8f9]/40 hover:bg-[#0b1628] hover:text-white"
    >
      {icon}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/6 bg-[#050b15] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a1425] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-18 md:pb-32">
        <div className="mb-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(20,195,142,0.14),rgba(56,189,248,0.08)_45%,rgba(255,255,255,0.03))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">Enterprise CRM, simplified</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Turn scattered leads, teams, and follow-ups into one controlled revenue system.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                CRM Suite helps ambitious businesses run sales, service, approvals, billing, and reporting from one premium operating layer built for growth and accountability.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {trustHighlights.map((item) => (
                  <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4">
                    <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{item.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href="/#contact"
                className="rounded-full bg-gradient-to-r from-[#7ef7c4] via-[#37dfaa] to-[#14c38e] px-7 py-4 text-center text-sm font-semibold text-[#04111c] transition hover:brightness-105"
              >
                Schedule CRM Demo
              </a>
              <a
                href="/pricing"
                className="rounded-full border border-white/12 bg-white/5 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/8"
              >
                Explore Plans
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.15fr_0.8fr_0.8fr_1fr]">
          <div className="max-w-md">
            <FooterMark />
            <p className="mt-6 text-base leading-8 text-slate-300">
              A premium CRM platform for businesses that need disciplined sales execution,
              cleaner customer operations, automation at scale, and reporting leadership can trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {crmUseCases.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social) => (
                <SocialMediaLink
                  key={social.label}
                  label={social.label}
                  href={social.href}
                  icon={social.icon}
                />
              ))}
            </div>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#8be9ff]">Talk to CRM Experts</p>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Business Email</p>
                <a href="mailto:hello@crmwebsite.com" className="mt-2 block transition hover:text-white">
                  hello@crmwebsite.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Sales Desk</p>
                <a href="tel:+919211941924" className="mt-2 block transition hover:text-white">
                  +91 92119 41924
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Consulting Office</p>
                <p className="mt-2 leading-7">
                  Sector 63, Noida
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b1321] shadow-[0_20px_50px_rgba(0,0,0,0.22)]">
                <iframe
                  title="CRM Suite office location"
                  src="https://www.google.com/maps?q=Sector+63+Noida&output=embed"
                  className="h-36 w-full md:h-40"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 CRM Suite. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="/privacy-policy" className="transition hover:text-white">Privacy Policy</a>
            <a href="/terms-and-conditions" className="transition hover:text-white">Terms & Conditions</a>
            <a href="/#contact" className="transition hover:text-white">Contact Sales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
