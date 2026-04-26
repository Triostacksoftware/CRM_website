"use client";

import React, { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import FeatureIcon from "@/components/FeatureIcon";
import BookCallModal from "@/components/BookCallModal";
import { allFeatures } from "@/lib/features-data";

const FEATURE_HERO_BG_VIDEOS = [
  {
    src: "https://cdn.pixabay.com/video/2025/01/08/251543_small.mp4",
    objectPosition: "center center",
  },
  {
    src: "https://cdn.pixabay.com/video/2025/07/27/293827_small.mp4",
    objectPosition: "center center",
  },
  {
    src: "https://cdn.pixabay.com/video/2016/08/22/4723-179738625_small.mp4",
    objectPosition: "center center",
  },
  {
    src: "https://cdn.pixabay.com/video/2025/04/07/270442_small.mp4",
    objectPosition: "center center",
  },
  {
    src: "https://cdn.pixabay.com/video/2025/07/30/294428_small.mp4",
    objectPosition: "center center",
  },
  {
    src: "https://cdn.pixabay.com/video/2025/03/26/267585_small.mp4",
    objectPosition: "center center",
  },
  {
    src: "https://cdn.pixabay.com/video/2025/04/07/270415_small.mp4",
    objectPosition: "center center",
  },
  {
    src: "https://cdn.pixabay.com/video/2025/04/07/270432_small.mp4",
    objectPosition: "center center",
  },
  {
    src: "https://cdn.pixabay.com/video/2025/10/30/312873_small.mp4",
    objectPosition: "center center",
  },
  {
    src: "https://cdn.pixabay.com/video/2025/04/07/270416_small.mp4",
    objectPosition: "center center",
  },
];

const FEATURE_HERO_OVERLAYS = [
  "bg-[radial-gradient(circle_at_18%_22%,rgba(0,178,116,0.18),transparent_28%),radial-gradient(circle_at_82%_34%,rgba(56,189,248,0.14),transparent_30%),linear-gradient(180deg,rgba(11,18,32,0.84),rgba(11,18,32,0.58)_42%,rgba(11,18,32,0.9))]",
  "bg-[radial-gradient(circle_at_22%_18%,rgba(56,189,248,0.16),transparent_26%),radial-gradient(circle_at_78%_32%,rgba(0,178,116,0.15),transparent_32%),linear-gradient(180deg,rgba(11,18,32,0.86),rgba(11,18,32,0.52)_45%,rgba(11,18,32,0.9))]",
  "bg-[radial-gradient(circle_at_14%_28%,rgba(0,178,116,0.14),transparent_24%),radial-gradient(circle_at_74%_26%,rgba(125,211,252,0.14),transparent_28%),linear-gradient(180deg,rgba(11,18,32,0.84),rgba(11,18,32,0.56)_40%,rgba(11,18,32,0.92))]",
  "bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.16),transparent_28%),radial-gradient(circle_at_84%_22%,rgba(59,130,246,0.16),transparent_30%),linear-gradient(180deg,rgba(11,18,32,0.86),rgba(11,18,32,0.54)_43%,rgba(11,18,32,0.92))]",
];

const NATURAL_HERO_VIDEO_PRESETS = {
  realisticLaptop: {
    src: "https://cdn.pixabay.com/video/2025/01/08/251543_small.mp4",
    objectPosition: "center center",
  },
  deskWorker: {
    src: "https://cdn.pixabay.com/video/2024/06/07/215751_small.mp4",
    objectPosition: "center center",
  },
  officeCorridor: {
    src: "https://cdn.pixabay.com/video/2024/02/07/199623-910995789_small.mp4",
    objectPosition: "center center",
  },
  teamMeeting: {
    src: "https://cdn.pixabay.com/video/2017/03/08/8252-207598592_small.mp4",
    objectPosition: "center center",
  },
};

const FEATURE_HERO_VIDEO_OVERRIDES = {
  "follow-up-reminders": {
    sources: [
      NATURAL_HERO_VIDEO_PRESETS.deskWorker,
      NATURAL_HERO_VIDEO_PRESETS.teamMeeting,
      NATURAL_HERO_VIDEO_PRESETS.officeCorridor,
    ],
    seekRatio: 0.18,
    playbackRate: 0.94,
    overlayClass:
      "bg-[radial-gradient(circle_at_16%_22%,rgba(0,178,116,0.13),transparent_24%),radial-gradient(circle_at_82%_26%,rgba(125,211,252,0.12),transparent_28%),linear-gradient(180deg,rgba(11,18,32,0.8),rgba(11,18,32,0.56)_44%,rgba(11,18,32,0.9))]",
    zoomClass: "scale-[1.02]",
  },
  "inventory-management": {
    sources: [
      NATURAL_HERO_VIDEO_PRESETS.teamMeeting,
      NATURAL_HERO_VIDEO_PRESETS.officeCorridor,
      NATURAL_HERO_VIDEO_PRESETS.deskWorker,
    ],
    seekRatio: 0.24,
    playbackRate: 0.9,
    overlayClass:
      "bg-[radial-gradient(circle_at_18%_18%,rgba(0,178,116,0.11),transparent_22%),radial-gradient(circle_at_80%_24%,rgba(56,189,248,0.11),transparent_28%),linear-gradient(180deg,rgba(11,18,32,0.82),rgba(11,18,32,0.58)_42%,rgba(11,18,32,0.92))]",
    zoomClass: "scale-[1.01]",
  },
  "high-speed-calling-system": {
    sources: [
      NATURAL_HERO_VIDEO_PRESETS.officeCorridor,
      NATURAL_HERO_VIDEO_PRESETS.deskWorker,
      NATURAL_HERO_VIDEO_PRESETS.teamMeeting,
    ],
    seekRatio: 0.15,
    playbackRate: 0.96,
    overlayClass:
      "bg-[radial-gradient(circle_at_20%_18%,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_78%_30%,rgba(0,178,116,0.12),transparent_28%),linear-gradient(180deg,rgba(11,18,32,0.82),rgba(11,18,32,0.54)_44%,rgba(11,18,32,0.9))]",
    zoomClass: "scale-[1.02]",
  },
  "automated-whatsapp-follow-ups": {
    sources: [
      NATURAL_HERO_VIDEO_PRESETS.realisticLaptop,
      NATURAL_HERO_VIDEO_PRESETS.deskWorker,
      NATURAL_HERO_VIDEO_PRESETS.officeCorridor,
    ],
    seekRatio: 0.2,
    playbackRate: 0.92,
    overlayClass:
      "bg-[radial-gradient(circle_at_16%_18%,rgba(0,178,116,0.12),transparent_24%),radial-gradient(circle_at_80%_28%,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,rgba(11,18,32,0.8),rgba(11,18,32,0.56)_44%,rgba(11,18,32,0.9))]",
    zoomClass: "scale-[1.02]",
  },
  "appointment-scheduling": {
    sources: [
      NATURAL_HERO_VIDEO_PRESETS.teamMeeting,
      NATURAL_HERO_VIDEO_PRESETS.realisticLaptop,
      NATURAL_HERO_VIDEO_PRESETS.officeCorridor,
    ],
    seekRatio: 0.14,
    playbackRate: 0.9,
    overlayClass:
      "bg-[radial-gradient(circle_at_18%_18%,rgba(125,211,252,0.11),transparent_24%),radial-gradient(circle_at_78%_26%,rgba(0,178,116,0.11),transparent_28%),linear-gradient(180deg,rgba(11,18,32,0.82),rgba(11,18,32,0.56)_42%,rgba(11,18,32,0.92))]",
    zoomClass: "scale-[1.01]",
  },
  "knowledge-base-faq-hub": {
    sources: [
      NATURAL_HERO_VIDEO_PRESETS.deskWorker,
      NATURAL_HERO_VIDEO_PRESETS.realisticLaptop,
      NATURAL_HERO_VIDEO_PRESETS.teamMeeting,
    ],
    seekRatio: 0.22,
    playbackRate: 0.88,
    overlayClass:
      "bg-[radial-gradient(circle_at_14%_18%,rgba(0,178,116,0.1),transparent_22%),radial-gradient(circle_at_82%_24%,rgba(125,211,252,0.1),transparent_28%),linear-gradient(180deg,rgba(11,18,32,0.8),rgba(11,18,32,0.58)_44%,rgba(11,18,32,0.92))]",
    zoomClass: "scale-[1.01]",
  },
};

const FEATURE_PAGE_SLUGS = allFeatures.flatMap((group) =>
  group.items.map((item) => item.slug)
);

function getFeatureHeroVideoConfig(slug) {
  if (FEATURE_HERO_VIDEO_OVERRIDES[slug]) {
    return FEATURE_HERO_VIDEO_OVERRIDES[slug];
  }

  const featureIndex = Math.max(FEATURE_PAGE_SLUGS.indexOf(slug), 0);
  const totalVideos = FEATURE_HERO_BG_VIDEOS.length;
  const sourceIndices = [];

  [
    featureIndex % totalVideos,
    (featureIndex * 3 + 1) % totalVideos,
    (featureIndex * 7 + 2) % totalVideos,
  ].forEach((index) => {
    if (!sourceIndices.includes(index)) {
      sourceIndices.push(index);
    }
  });

  while (sourceIndices.length < 3) {
    const nextIndex =
      (sourceIndices[sourceIndices.length - 1] + 1) % totalVideos;

    if (!sourceIndices.includes(nextIndex)) {
      sourceIndices.push(nextIndex);
    }
  }

  return {
    sources: sourceIndices.map((index) => FEATURE_HERO_BG_VIDEOS[index]),
    seekRatio: 0.08 + (((featureIndex * 17) % 68) / 100),
    playbackRate: 0.84 + (featureIndex % 4) * 0.05,
    overlayClass:
      FEATURE_HERO_OVERLAYS[featureIndex % FEATURE_HERO_OVERLAYS.length],
    zoomClass: ["scale-[1.03]", "scale-[1.08]", "scale-[1.12]"][
      featureIndex % 3
    ],
  };
}

export default function FeatureDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroVideoIndex, setHeroVideoIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    setHeroVideoIndex(0);
  }, [slug]);

  // Find the feature by slug
  let feature = null;
  for (const group of allFeatures) {
    const found = group.items.find((item) => item.slug === slug);
    if (found) {
      feature = found;
      break;
    }
  }

  if (!feature) {
    notFound();
  }

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const heroVideoConfig = getFeatureHeroVideoConfig(slug);
  const activeHeroVideo = heroVideoConfig.sources[heroVideoIndex];
  const testimonials = [
    {
      quote:
        "CRM Solutions transformed the way we manage leads. Our follow-ups are faster and our conversions have skyrocketed.",
      name: "Rohit Sharma",
      role: "Sales Head, ABC Pvt. Ltd.",
    },
    {
      quote:
        "The WhatsApp integration is a game changer. We connect with leads instantly and build stronger relationships.",
      name: "Priya Mehta",
      role: "Growth Manager, TechNova",
    },
    {
      quote:
        "Super easy onboarding, excellent support, and powerful features. Everything a growing business needs in one CRM.",
      name: "Ankit Verma",
      role: "Co-founder, BrightPath",
    },
  ];
  const faqItems = [
    {
      question: "What is CRM Solutions and who is it for?",
      answer:
        "CRM Solutions is built for sales-driven businesses that want to capture leads faster, automate follow-ups, and manage the full customer journey in one place.",
    },
    {
      question: "How easy is it to get started?",
      answer:
        "Getting started is simple. Our team helps with setup, onboarding, and workflow mapping so your team can start using the system quickly.",
    },
    {
      question: "How does lead management work?",
      answer:
        "Leads from websites, ads, Justdial, calls, and APIs can flow into one dashboard, where your team can assign, track, and follow up without delay.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide onboarding help, implementation guidance, post-launch support, and hands-on assistance whenever your team needs it.",
    },
    {
      question: "How does WhatsApp integration help my business?",
      answer:
        "It helps your team respond instantly, automate routine messages, and keep every conversation linked to the right lead or customer record.",
    },
  ];

  const handleHeroVideoError = () => {
    setHeroVideoIndex((currentIndex) => {
      if (currentIndex >= heroVideoConfig.sources.length - 1) {
        return heroVideoConfig.sources.length;
      }

      return currentIndex + 1;
    });
  };

  const handleHeroVideoLoadedMetadata = (event) => {
    const videoElement = event.currentTarget;
    const duration = videoElement.duration;

    if (Number.isFinite(duration) && duration > 1) {
      videoElement.currentTime = Math.min(
        duration - 0.6,
        Math.max(0, duration * heroVideoConfig.seekRatio)
      );
    }

    videoElement.playbackRate = heroVideoConfig.playbackRate;
  };

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-32 md:pb-40 overflow-hidden">
        {/* Background Video with Overlay */}
        {activeHeroVideo ? (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              key={`${slug}-${activeHeroVideo.src}`}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              onError={handleHeroVideoError}
              onLoadedMetadata={handleHeroVideoLoadedMetadata}
              className={`h-full w-full object-cover brightness-[0.45] saturate-[0.82] ${heroVideoConfig.zoomClass}`}
              style={{ objectPosition: activeHeroVideo.objectPosition }}
            >
              <source src={activeHeroVideo.src} type="video/mp4" />
            </video>
            <div className={`absolute inset-0 ${heroVideoConfig.overlayClass}`} />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_18%_22%,rgba(0,178,116,0.18),transparent_28%),radial-gradient(circle_at_82%_34%,rgba(56,189,248,0.14),transparent_30%),linear-gradient(180deg,rgba(11,18,32,0.84),rgba(11,18,32,0.58)_42%,rgba(11,18,32,0.9))] pointer-events-none" />
        )}

        <div className="container max-w-7xl mx-auto px-6 relative z-10">


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center -mt-1 md:-mt-6 lg:-mt-10">
            <div className="space-y-8">
              <Reveal delay={200}>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  {feature.details?.subtitle || feature.title}
                </h1>
              </Reveal>
              <Reveal delay={300}>
                <p className="text-base text-slate-400 leading-relaxed max-w-2xl">
                  {feature.details?.shortDescription || feature.description}
                </p>
              </Reveal>
              <div className="flex flex-wrap items-center gap-4 relative z-50">
                <Reveal delay={360}>
                  <div className="inline-flex items-center rounded-full border border-[#7ef7c4]/30 bg-white/8 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#b9ffe6] backdrop-blur-md shadow-[0_10px_30px_rgba(0,178,116,0.12)]">
                    Best CRM in India
                  </div>
                </Reveal>
                <button
                  type="button"
                  onClick={handleModalOpen}
                  className="bg-[#00b274] hover:bg-[#009661] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 cursor-pointer shadow-[0_10px_30px_rgba(0,178,116,0.3)] pointer-events-auto relative z-50"
                >
                  Book Demo
                </button>
              </div>
            </div>

            <Reveal delay={500}>
              <div className="relative">
                <div className="absolute -inset-4 bg-[#00b274]/20 rounded-[2rem] blur-3xl" />
                <div className="relative rounded-3xl border border-white/10 overflow-hidden bg-[#0F172A]/50 backdrop-blur-sm">
                  {feature.heroImage ? (
                    <img
                      src={encodeURI(feature.heroImage)}
                      alt={feature.title}
                      className="w-full h-auto"
                      loading="eager"
                      decoding="async"
                    />
                  ) : (
                    <div className="aspect-video flex items-center justify-center p-12 text-center">
                      <FeatureIcon type={feature.icon} className="h-24 w-24 text-[#00b274]/20 mx-auto mb-6" />
                      <div className="text-white/20 text-2xl font-bold tracking-widest uppercase">{feature.title} Visual</div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {feature.details?.overview && (
        <section id="overview" className="py-24 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(0,178,116,0.12),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_42%,#eef6f4_100%)]">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#00b274]/10 blur-[120px] pointer-events-none" />
          <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
          <div className="container max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <Reveal>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-950">{feature.details.overview.heading}</h2>
                  <div className="h-1.5 w-20 bg-[#00b274] rounded-full" />
                  <div className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                    {feature.details.overview.content}
                  </div>
                </div>
              </Reveal>

              <div className="space-y-12">
                <Reveal delay={200}>
                  <h3 className="text-xl font-bold uppercase tracking-widest text-[#00b274]">Key Features</h3>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(feature.details.featuresList || []).map((item, idx) => (
                    <Reveal key={idx} delay={idx * 50}>
                      <div className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00b274]/10 border border-[#00b274]/20 flex items-center justify-center group-hover:bg-[#00b274] transition-colors duration-300">
                          <svg className="w-3.5 h-3.5 text-[#00b274] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          </svg>
                        </div>
                        <span className="text-slate-700 group-hover:text-slate-950 transition-colors">{item}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Helps Section */}
      {feature.details?.howItHelps && (
        <section className="py-24 bg-white">
          <div className="container max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-950">How It Helps</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">Discover the tangible benefits our {feature.title} brings to your sales organization.</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {feature.details.howItHelps.map((item, idx) => (
                <Reveal key={idx} delay={idx * 100} className="group h-full">
                  <div className="relative h-full p-8 rounded-3xl bg-white/95 border border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.09)] hover:border-[#00b274]/30 transition-all duration-500 group-hover:bg-white group-hover:-translate-y-1 group-hover:shadow-[0_28px_75px_rgba(0,178,116,0.14)]">
                    <div className="w-12 h-12 rounded-2xl bg-[#00b274]/10 flex items-center justify-center mb-8 text-[#00b274] group-hover:bg-[#00b274] group-hover:text-white transition-all duration-500">
                      <span className="text-xl font-bold">{idx + 1}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-slate-950 group-hover:text-[#00b274] transition-colors">{item.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Case Section */}
      {feature.details?.useCase && (
        <section className="py-24 relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]">
          <div className="container max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="max-w-4xl mx-auto p-12 rounded-[2.5rem] bg-white/95 border border-slate-200 shadow-[0_28px_80px_rgba(15,23,42,0.1)]">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="w-20 h-20 rounded-full bg-[#00b274] flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(0,178,116,0.5)]">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9-.4-2.593-1.003l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[#00b274]">{feature.details.useCase.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed italic">
                      "{feature.details.useCase.description}"
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Best For Section */}
      {feature.details?.bestFor && (
        <section className="py-24 bg-[radial-gradient(circle_at_top_right,rgba(0,178,116,0.1),transparent_28%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="p-12 md:p-20 rounded-[3rem] bg-white/95 border border-slate-200 relative overflow-hidden shadow-[0_28px_80px_rgba(15,23,42,0.1)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00b274]/10 blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px]" />
              
              <div className="relative z-10 text-center">
                <Reveal>
                  <h2 className="text-3xl font-bold mb-12 text-slate-950">Who is this best for?</h2>
                </Reveal>
                <div className="flex flex-wrap justify-center gap-4">
                  {feature.details.bestFor.map((item, idx) => (
                    <Reveal key={idx} delay={idx * 50}>
                      <div className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                        {item}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      {feature.details?.ctaSection && (
        <section className="py-20 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_40%,#ffffff_100%)] border-t border-slate-100">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="space-y-14">
              <div className="text-center">
                <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#00b274]">
                  Testimonials
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-950">
                  Trusted by Businesses, Loved by Teams
                </h2>
                <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                  See how CRM Solutions helps teams close more deals and build lasting customer relationships.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {testimonials.map((item, idx) => (
                  <Reveal key={item.name} delay={idx * 80}>
                    <div className="h-full rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex gap-1 text-[#00b274]">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <svg key={starIndex} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-2xl font-bold text-[#00b274]/70">”</span>
                      </div>
                      <p className="text-sm leading-7 text-slate-600">
                        {item.quote}
                      </p>
                      <div className="mt-6 border-t border-slate-100 pt-4">
                        <p className="font-semibold text-slate-950">{item.name}</p>
                        <p className="text-sm text-slate-500">{item.role}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="text-center">
                <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#00b274]">
                  FAQ
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-950">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {faqItems.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;

                  return (
                    <div
                      key={item.question}
                      className={`rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-[#00b274]/25 bg-[#f8fffc]"
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenFaqIndex(isOpen ? -1 : idx)
                        }
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="text-sm md:text-base font-medium text-slate-800">
                          {item.question}
                        </span>
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full border text-sm transition-all ${
                            isOpen
                              ? "border-[#00b274] bg-[#00b274] text-white rotate-45"
                              : "border-slate-200 text-[#00b274]"
                          }`}
                        >
                          +
                        </span>
                      </button>
                      {isOpen ? (
                        <div className="px-5 pb-5 text-sm leading-6 text-slate-600">
                          {item.answer}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-[#00b274]/10 bg-[linear-gradient(180deg,#f8fffc_0%,#ffffff_100%)] px-6 py-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)] md:px-10">
                <div className="absolute right-0 top-0 h-full w-40 bg-[radial-gradient(circle_at_center,rgba(0,178,116,0.12),transparent_65%)] pointer-events-none" />
                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#00b274]/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#00b274]">
                      Get Started Today
                    </div>
                    <h3 className="mt-4 text-3xl font-bold text-slate-950">
                      Ready to Grow Your <span className="text-[#00b274]">Sales Pipeline?</span>
                    </h3>
                    <p className="mt-3 text-slate-600">
                      Join 500+ businesses using CRM Solutions to capture more leads, engage faster, and close more deals.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={handleModalOpen}
                      className="rounded-full bg-[#00b274] px-7 py-3.5 font-bold text-white shadow-[0_12px_35px_rgba(0,178,116,0.24)] transition-all hover:scale-[1.02] hover:bg-[#009661]"
                    >
                      Book Free Demo
                    </button>
                    <button
                      type="button"
                      onClick={handleModalOpen}
                      className="rounded-full border border-[#00b274]/20 bg-white px-7 py-3.5 font-semibold text-[#00b274] transition-all hover:border-[#00b274]/40 hover:bg-[#f8fffc]"
                    >
                      {feature.details.ctaSection.buttonText || "Start Managing Leads"}
                    </button>
                  </div>
                </div>
                <div className="relative mt-5 flex flex-wrap gap-4 text-xs font-medium text-slate-500">
                  <span>No Setup Fee</span>
                  <span>Free Consultation</span>
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}



      <BookCallModal 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
        title="Book a Demo"
        subtitle="Get a personalized tour of our CRM solutions and see how we can help your business grow."
      />
    </main>
  );
}
