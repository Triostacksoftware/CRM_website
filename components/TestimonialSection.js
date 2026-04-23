"use client";
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Founder",
    company: "TechFlow India",
    content: "This CRM transformed how we manage leads and billing. The automation features are a game-changer for our sales team.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=rajesh"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Operations Head",
    company: "Global Logistics",
    content: "Highly scalable and perfect for multi-branch operations. We've seen a 30% increase in productivity since switching.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=priya"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "CEO",
    company: "Patel Enterprises",
    content: "The glassmorphism UI is beautiful, but the functionality is even better. Customer support is top-notch!",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=amit"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Marketing Manager",
    company: "Creative Agency",
    content: "Best CRM for Indian businesses. The integration with local payment gateways is seamless and reliable.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sneha"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Sales Director",
    company: "BuildFast Corp",
    content: "Managed to close 20% more deals in the first month. The analytics dashboard provides great insights for strategy.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=vikram"
  },
  {
    id: 6,
    name: "Anjali Rao",
    role: "HR Manager",
    company: "SoftSolutions",
    content: "Internal team communication has improved significantly. A must-have tool for growing startups in India.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=anjali"
  }
];

const TestimonialCard = ({ name, role, company, content, rating, image }) => (
  <div className="min-w-[300px] md:min-w-[400px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-md hover:scale-105 hover:bg-white/10 transition-all duration-300 group cursor-default">
    <div className="flex items-center gap-4 mb-4">
      <img 
        src={image} 
        alt={name} 
        className="w-12 h-12 rounded-full border-2 border-[#00b274]/30 group-hover:border-[#00b274] transition-colors"
      />
      <div>
        <h4 className="text-white font-bold text-lg leading-tight">{name}</h4>
        <p className="text-slate-400 text-sm">{role} @ {company}</p>
      </div>
    </div>
    
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>

    <p className="text-slate-300 italic line-clamp-3 leading-relaxed">
      "{content}"
    </p>
  </div>
);

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-[#0B1220] via-[#0E1A2B] to-[#0B1220] overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00b274]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14 space-y-4">
          <span className="text-[12px] font-bold text-[#00b274] uppercase tracking-[0.3em]">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Trusted by growing businesses across India to streamline operations and drive growth.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full mask-gradient pause-on-hover">
          <div className="flex w-max gap-6 animate-marquee-right py-4">
            {/* First set of testimonials */}
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard key={`${item.id}-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
