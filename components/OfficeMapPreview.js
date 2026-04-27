const OFFICE_ADDRESS = "Sector 63, Noida, Uttar Pradesh, India";
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed`;

export default function OfficeMapPreview({
  className = "",
  mapClassName = "",
  heightClassName = "h-48 sm:h-52",
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.08)] ${className}`}
    >
      <div className={`relative w-full overflow-hidden bg-[#e8f8f1] ${heightClassName} ${mapClassName}`}>
        <iframe
          title={`Map for ${OFFICE_ADDRESS}`}
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
          allowFullScreen
        />
      </div>

      <a
        href={MAP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 border-t border-slate-100 px-4 py-3 text-xs font-semibold text-slate-600 transition-colors hover:text-[#00b274]"
      >
        <span>Sector 63, Noida</span>
        <span aria-hidden="true">Open map</span>
      </a>
    </div>
  );
}
