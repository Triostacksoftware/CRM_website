"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import BookCallModal from "@/components/BookCallModal";
import FeatureIcon from "@/components/FeatureIcon";
import ContactSection from "@/components/ContactSection";

const integrationSections = [
  {
    id: "whatsapp-integration",
    title: "WhatsApp & Omnichannel",
    subtitle: "Conversational commerce at scale",
    description: "Meet your customers on their favorite platform. Our deep WhatsApp Business API integration allows you to automate conversations, send broadcasts, and manage a team-wide shared inbox.",
    icon: "chat",
    features: [
      "Official WhatsApp Business API",
      "Automated Message Sequences",
      "Shared Team Inbox & Routing",
      "Bulk Broadcast Campaigns"
    ],
    image: "/crm screen shot/Screenshot (530).png",
    color: "from-[#25D366] to-[#128C7E]",
    bgColor: "bg-[#f0fff4]"
  },
  {
    id: "telephony-integration",
    title: "Cloud Telephony & PBX",
    subtitle: "Crystal clear calls, automatically logged",
    description: "Connect your existing PBX or cloud telephony provider directly to the CRM. Track every call, record conversations for training, and use one-click dialing to boost productivity.",
    icon: "phone",
    features: [
      "Exotel & Knowlarity Integration",
      "Automatic Call Logging & Recordings",
      "Smart IVR & Call Routing",
      "Real-time Call Popups"
    ],
    image: "/crm screen shot/Screenshot (540).png",
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "ads-integration",
    title: "Ad Platforms & Lead Sync",
    subtitle: "From click to customer in seconds",
    description: "Capture leads instantly from Meta and Google Ads. Eliminate manual CSV exports and ensure your sales team responds to high-intent leads while they are still hot.",
    icon: "lead",
    features: [
      "Meta Ads Real-time Sync",
      "Google Ads Lead Form Integration",
      "Automated Lead Assignment",
      "Lead Source Tracking & ROI"
    ],
    image: "/crm screen shot/Screenshot (505).png",
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-purple-50"
  },
  {
    id: "api-integration",
    title: "Custom API & Webhooks",
    subtitle: "Build your own custom ecosystem",
    description: "For enterprises with unique needs, our robust REST API and Webhook system allow you to connect CRM Solutions to any ERP, accounting software, or custom internal tool.",
    icon: "pipeline",
    features: [
      "Comprehensive REST API",
      "Incoming & Outgoing Webhooks",
      "Custom Workflow Triggers",
      "Secure Data Synchronization"
    ],
    image: "/crm screen shot/Screenshot (512).png",
    color: "from-slate-700 to-slate-900",
    bgColor: "bg-slate-50"
  }
];

export default function IntegrationsContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* Hero Section - Upgraded with Video and Floating Elements */}
      <div className="relative overflow-hidden pt-28 pb-16 min-h-[68vh] flex items-center bg-slate-950">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-40 scale-110"
            style={{ filter: "brightness(0.5) blue(50%)" }}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-data-clouds-and-network-12586-large.mp4" type="video/mp4" />
          </video>
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-white" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,178,116,0.1),transparent_70%)]" />
        </div>

        {/* Floating Icons Decoration - Using Inline SVGs for 100% reliability */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
          <div className="absolute top-[20%] left-[10%] animate-bounce duration-[4000ms] opacity-40">
            <div className="p-4 rounded-2xl bg-white shadow-2xl border border-slate-100">
              <svg className="w-10 h-10 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-[40%] right-[15%] animate-bounce duration-[5000ms] opacity-40">
            <div className="p-4 rounded-2xl bg-white shadow-2xl border border-slate-100">
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.67-.35-1.39-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20%] left-[20%] animate-bounce duration-[6000ms] opacity-40">
            <div className="p-4 rounded-2xl bg-white shadow-2xl border border-slate-100">
              <svg className="w-10 h-10 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[30%] right-[10%] animate-bounce duration-[4500ms] opacity-40">
            <div className="p-4 rounded-2xl bg-white shadow-2xl border border-slate-100">
              <svg className="w-10 h-10 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.419.419.679.819.896 1.377.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.217.558-.477.957-.896 1.377-.419.419-.819.679-1.377.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.419-.419-.679-.819-.896-1.377-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.419-.419.819-.679 1.377-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.132 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.384 1.078 2.126 1.384c.765.297 1.635.499 2.913.558C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384s1.078-1.384 1.384-2.126c.297-.765.499-1.636.558-2.913.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126s-1.384-1.078-2.126-1.384c-.765-.297-1.636-.499-2.913-.558C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324A4.162 4.162 0 0112 16zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00b274] animate-pulse" />
              <span className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                Integrations Hub
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
              Connect Your Entire <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b274] to-blue-400">Business Ecosystem</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg mb-8 font-medium leading-relaxed">
              Eliminate data silos and manual entry. CRM Solutions integrates with 50+ tools to keep your marketing, sales, and support in perfect sync.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              {integrationSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white text-sm font-bold hover:bg-[#00b274] hover:border-[#00b274] transition-all duration-300 shadow-lg"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Alternating Content Sections */}
      <div className="py-14 md:py-16 space-y-16 md:space-y-20">
        {integrationSections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`container max-w-7xl mx-auto px-6 scroll-mt-32`}
          >
            <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-12`}>
              <div className="flex-1 space-y-6">
                <Reveal>
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${section.color} text-white shadow-lg`}>
                    <FeatureIcon type={section.icon} className="h-8 w-8" />
                  </div>
                </Reveal>
                <div className="space-y-4">
                  <Reveal delay={100}>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-950 leading-tight">
                      {section.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={200}>
                    <p className={`text-xl font-medium ${index === 0 ? 'text-emerald-600' : index === 1 ? 'text-blue-600' : index === 2 ? 'text-purple-600' : 'text-slate-600'}`}>
                      {section.subtitle}
                    </p>
                  </Reveal>
                  <Reveal delay={300}>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {section.description}
                    </p>
                  </Reveal>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.features.map((feature, idx) => (
                    <Reveal key={idx} delay={400 + idx * 50}>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-[#00b274]/10 flex items-center justify-center flex-shrink-0">
                          <svg className="h-3 w-3 text-[#00b274]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={600}>
                  <button
                    onClick={handleModalOpen}
                    className="inline-flex items-center gap-2 bg-slate-950 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all duration-300 shadow-xl"
                  >
                    Setup {section.title}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Reveal>
              </div>

              <div className="flex-1 w-full">
                <Reveal delay={400}>
                  <div className={`relative p-4 rounded-[2.5rem] ${section.bgColor} border border-slate-100 shadow-2xl`}>
                    <div className="overflow-hidden rounded-[1.5rem] shadow-lg border border-white/50">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    {/* Decorative blobs */}
                    <div className={`absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${section.color} opacity-10 blur-3xl -z-10`} />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* New Contact Section */}
      <ContactSection 
        subtitle="CONTACT US"
        title="Talk to Our CRM Experts"
        description="Learn how TrioCRM can help you capture leads, automate workflows, and close deals faster. Get a personalized consultation tailored to your business needs."
        tagline="Trusted by 1000+ growing business across India"
        buttonText="Book a Free Demo"
      />

      <BookCallModal isOpen={isModalOpen} onClose={handleModalClose} />

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100 bg-slate-50/50">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">© 2026 CRM Solutions. All rights reserved. Powering growth for modern enterprises.</p>
        </div>
      </footer>
    </main>
  );
}
