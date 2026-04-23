import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Use of Website",
    items: [
      "This website is intended to provide information about Triostack CRM solutions, consulting, pricing, and related services.",
      "Users should not misuse the website, attempt unauthorized access, or interfere with its normal operation.",
    ],
  },
  {
    title: "Service Information",
    items: [
      "Product features, implementation scope, pricing guidance, and timelines shown on the site may change based on project needs and business context.",
      "Final deliverables, commercial terms, and support scope are governed by formal proposals, contracts, or statements of work.",
    ],
  },
  {
    title: "Intellectual Property",
    items: [
      "All branding, layout, written content, and visual materials on this website remain the property of Triostack unless otherwise stated.",
      "Content may not be copied, redistributed, or reused without prior permission.",
    ],
  },
  {
    title: "Limitation of Liability",
    items: [
      "Website content is provided for general information and business inquiry purposes.",
      "Triostack is not liable for indirect losses arising from website access issues, third-party tools, or interpretation of general site content.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#0b1220]">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-14 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,195,142,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_30%)]" />
        <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            Terms & Conditions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            These terms outline the general conditions for using the Triostack website,
            reviewing product information, and engaging with our CRM-related services.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl space-y-8">
          {sections.map((section) => (
            <article key={section.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <div className="mt-5 space-y-4">
                {section.items.map((item) => (
                  <div key={item} className="flex gap-4 text-slate-300">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#8be9ff]" />
                    <p className="leading-8">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
