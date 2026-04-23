"use client";

import React from 'react';

const brands = [
  { name: "Brand 1", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
  { name: "Brand 2", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" },
  { name: "Brand 3", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Apple_logo_grey.svg/1724px-Apple_logo_grey.svg.png" },
  { name: "Brand 4", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" },
  { name: "Brand 5", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" },
  { name: "Brand 6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png" },
];

export default function BrandSection() {
  return (
    <section className="py-12 md:py-16 bg-[#0B1220] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 md:mb-10 text-center">
        <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.4em]">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee-right gap-20 items-center whitespace-nowrap px-10">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
