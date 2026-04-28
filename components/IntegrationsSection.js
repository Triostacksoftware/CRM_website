import Image from "next/image";
import Reveal from "./Reveal";

const defaultIntegrations = [
  {
    name: "WhatsApp",
    description: "Connect and engage with leads instantly",
    logo: "/integrations/whatsapp.svg",
  },
  {
    name: "Meta Ads",
    description: "Capture and manage ad leads automatically",
    logo: "/integrations/meta.png",
  },
  {
    name: "Google Ads",
    description: "Sync campaign data and track conversions",
    logo: "/integrations/google-ads.svg",
  },
  {
    name: "Telephony",
    description: "Track calls and manage conversations efficiently",
    logo: "/integrations/telephony.svg",
  },
  {
    name: "Webhooks & API",
    description: "Integrate with external systems and automate workflows",
    logo: "/integrations/webhooks-api.svg",
  },
];

export default function IntegrationsSection({
  badge = "Integrations",
  title = "Works Seamlessly With Your Favorite Tools",
  description = "TrioCRM integrates with the tools your team already uses, helping you automate workflows and manage everything from one place.",
  integrations = defaultIntegrations,
  footerNote = "And many more integrations available to fit your workflow",
}) {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fffefc_0%,#ffffff_48%,#f8fffc_100%)] py-12 md:py-16"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-9 max-w-3xl text-center md:mb-11">
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

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 md:gap-x-10 lg:grid-cols-5 lg:gap-x-8">
          {integrations.map((integration, index) => (
            <Reveal key={integration.name} delay={index * 80}>
              <div className="group flex h-full flex-col items-center text-center transition-all duration-300 hover:-translate-y-1">
                <div className="mb-5 flex h-16 w-16 items-center justify-center">
                  <Image
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    width={64}
                    height={64}
                    className="h-14 w-14 object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold leading-tight text-slate-950">
                  {integration.name}
                </h3>
                <p className="max-w-[15rem] text-sm leading-6 text-slate-500">
                  {integration.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={420}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-semibold leading-6 text-slate-500 md:mt-10">
            {footerNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
