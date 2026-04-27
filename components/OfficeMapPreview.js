export const OFFICE_PLACE_NAME = "Triostack Technologies Private Limited";
export const OFFICE_ADDRESS_LINES = [
  "Plot No. 19 & 20, near IIMT Group of Colleges",
  "Knowledge Park III, Greater Noida, Uttar Pradesh 201310",
];
export const OFFICE_ADDRESS = `${OFFICE_PLACE_NAME}, ${OFFICE_ADDRESS_LINES.join(", ")}`;
export const MAP_URL =
  "https://www.google.com/maps/place/Triostack+Technologies+Private+Limited/@28.479381,77.4862808,17z/data=!3m1!4b1!4m6!3m5!1s0x84ed273d252814e5:0x5f1c5d63c9243145!8m2!3d28.4793763!4d77.4888557!16s%2Fg%2F11zj8yrcpk?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=28.4793763,77.4888557&z=17&output=embed";

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
        <span>{OFFICE_PLACE_NAME}</span>
        <span aria-hidden="true">Open map</span>
      </a>
    </div>
  );
}
