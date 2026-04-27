import Reveal from "./Reveal";

const defaultSecurityItems = [
  {
    title: "Role-Based Access Control",
    description:
      "Control who can access what with flexible user roles and permissions, ensuring sensitive data stays protected.",
    icon: "access",
  },
  {
    title: "Secure Cloud Infrastructure",
    description:
      "Your data is securely stored with reliable cloud infrastructure, ensuring high availability and protection from data loss.",
    icon: "cloud",
  },
  {
    title: "Data Privacy & Protection",
    description:
      "We follow strict data protection practices to safeguard your business information and maintain complete confidentiality.",
    icon: "privacy",
  },
];

function SecurityIcon({ type }) {
  const commonProps = {
    className: "h-8 w-8",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  };

  const icons = {
    access: (
      <>
        <path d="M12 3l7 3v5c0 4.6-2.9 8.8-7 10-4.1-1.2-7-5.4-7-10V6l7-3Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        <path d="M9.5 12l1.7 1.7 3.5-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} />
      </>
    ),
    cloud: (
      <>
        <path d="M7.5 18h9.2a4.3 4.3 0 10-.8-8.5A6.2 6.2 0 004 12.4 3.3 3.3 0 007.5 18Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        <path d="M12 11v4M10 13h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </>
    ),
    privacy: (
      <>
        <path d="M7 11V8a5 5 0 0110 0v3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        <path d="M6 11h12v9H6v-9Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        <path d="M12 15v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} />
      </>
    ),
  };

  return <svg {...commonProps}>{icons[type]}</svg>;
}

export default function TrustSecuritySection({
  badge = "Trust & Security",
  title = "Security You Can Trust",
  description = "TrioCRM is built with enterprise-grade security to protect your data, ensure privacy, and give you complete control over access.",
  items = defaultSecurityItems,
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fffc_52%,#f8fbff_100%)] py-16 md:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8ece4] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d8ece4] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <Reveal>
            <span className="mb-5 block text-xs font-bold uppercase tracking-[0.18em] text-[#1baf78]">
              {badge}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mb-4 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base leading-relaxed text-slate-500 md:text-lg">
              {description}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <div
                className={`group h-full border-[#d8ece4] transition-all duration-300 hover:-translate-y-1 ${
                  index === 0 ? "" : "border-t pt-8 md:border-t-0 md:pt-0"
                } ${index === 1 ? "md:border-l md:pl-10 lg:pl-10" : ""} ${
                  index === 2
                    ? "md:border-t md:pt-8 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-10"
                    : ""
                } ${index === 0 ? "md:pr-10" : ""} ${index === 1 ? "lg:pr-10" : ""}`}
              >
                <div className="mb-5 inline-flex text-[#00b274] transition-all duration-300 group-hover:text-[#009661]">
                  <SecurityIcon type={item.icon} />
                </div>
                <h3 className="mb-3 text-2xl font-bold leading-tight text-slate-950 transition-colors duration-300 group-hover:text-[#0f9e6d]">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-8 text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
