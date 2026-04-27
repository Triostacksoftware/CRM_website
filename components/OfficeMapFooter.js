import OfficeMapPreview, {
  OFFICE_ADDRESS_LINES,
  OFFICE_PLACE_NAME,
} from "./OfficeMapPreview";

export default function OfficeMapFooter() {
  return (
    <footer className="bg-white px-6 pb-32 pt-8 sm:pb-36 md:pb-40">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-slate-100 pt-7 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-medium leading-6 text-slate-600">
          {OFFICE_PLACE_NAME}
          <br />
          {OFFICE_ADDRESS_LINES[0]}
          <br />
          {OFFICE_ADDRESS_LINES[1]}
        </p>

        <OfficeMapPreview className="w-full md:w-[520px] lg:w-[620px]" />
      </div>
    </footer>
  );
}
