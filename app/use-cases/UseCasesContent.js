"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import BookCallModal from "@/components/BookCallModal";
import FeatureIcon from "@/components/FeatureIcon";
import ContactSection from "@/components/ContactSection";

const useCaseSections = [
  {
    id: "lead-management",
    title: "Lead Management",
    subtitle: "Turn every inquiry into a conversion",
    description: "Capture, track, and manage leads from multiple sources in one central place. Our lead management system ensures that no prospect is ever missed.",
    icon: "lead",
    features: [
      "Multi-channel Lead Capture (Web, Social, Calls)",
      "Automated Lead Scoring and Qualification",
      "Instant Lead Distribution to Sales Agents",
      "Comprehensive Lead Activity Tracking"
    ],
    image: "/crm screen shot/Screenshot (505).png",
    color: "from-[#00b274] to-[#00d28e]",
    bgColor: "bg-[#f0fff9]"
  },
  {
    id: "sales-automation",
    title: "Sales Automation",
    subtitle: "Focus on selling, not data entry",
    description: "Automate repetitive tasks and focus your energy on closing deals. Streamline your sales pipeline with intelligent workflows.",
    icon: "automation",
    features: [
      "Automated Email and WhatsApp Follow-ups",
      "Custom Workflow Rules and Triggers",
      "Task and Meeting Reminders",
      "Pipeline Stage Transition Automation"
    ],
    image: "/crm screen shot/Screenshot (512).png",
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "customer-support",
    title: "Customer Support",
    subtitle: "Build lasting customer relationships",
    description: "Deliver exceptional service with a unified view of customer history. Resolve issues faster and keep your customers happy.",
    icon: "ticket",
    features: [
      "Unified Ticketing System",
      "Complete Customer Interaction History",
      "Support Performance Analytics",
      "Automated Feedback Collection"
    ],
    image: "/crm screen shot/Screenshot (530).png",
    color: "from-purple-600 to-pink-600",
    bgColor: "bg-purple-50"
  }
];

export default function UseCasesContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-28 pb-14 min-h-[64vh] flex items-center bg-white">
        {/* Video Background - Reduced opacity for white background compatibility */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-20"
            style={{ filter: "grayscale(1) brightness(1.2)" }}
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-his-laptop-32890-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay: White to Black */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-slate-950" />
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <Reveal>
            <span className="text-[#00b274] text-sm font-bold tracking-[0.4em] uppercase block mb-4">
              Use Cases
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter mb-6">
              Powerful Solutions for <br />Every Workflow
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-8 font-medium">
              Discover how Trio-CRM 360 transforms your business operations across departments with tailored tools for modern enterprises.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              {useCaseSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-6 py-2.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md text-slate-700 text-sm font-bold hover:bg-[#00b274] hover:text-white hover:border-[#00b274] transition-all duration-300 shadow-sm"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-14 md:py-16 space-y-16 md:space-y-20">
        {useCaseSections.map((section, index) => (
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
                    <p className="text-xl font-medium text-[#00b274]">
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
                    Get Started with {section.title}
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
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#00b274]/10 blur-3xl -z-10" />
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
    </main>
  );
}
