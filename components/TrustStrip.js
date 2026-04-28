"use client";

const defaultBrands = [
  { name: "IICPA", logo: "/logo/img1.png" },
  { name: "HS Codes", logo: "/logo/img2.png" },
  { name: "Tax Esquire", logo: "/logo/taxesquire.png" },
  { name: "Menorah", logo: "/logo/img4.png" },
  { name: "The Poetry Shop", logo: "/logo/img3.png" },
];

export default function TrustStrip({
  title = "Trusted by 1000+ growing business across India",
  metricValue = "40%+",
  metricLabel = "Average increase in sales productivity",
  brands = defaultBrands,
}) {
  return (
    <section className="bg-[#0b1220] border-y border-white/5 py-7 md:py-8 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-7 lg:gap-10">
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              {title}
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#00b274] font-bold">
              <span className="text-2xl">{metricValue}</span>
              <span className="text-xs uppercase tracking-wider text-slate-400">{metricLabel}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-9 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((brand, i) => (
              <div key={i} className="h-8 md:h-10 w-auto relative">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
