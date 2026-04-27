"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Home } from "lucide-react";
import BookCallModal from "./BookCallModal";
import LogoAnimationLink from "./LogoAnimationLink";

const CRM_LOGIN_URL = "https://crm.triostack.in/login";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleChatbotState = (e) => {
      setIsChatbotOpen(e.detail.isOpen);
    };

    window.addEventListener("chatbotStateChange", handleChatbotState);
    return () => window.removeEventListener("chatbotStateChange", handleChatbotState);
  }, []);

  const handleLoginClick = (event) => {
    event.preventDefault();
    window.location.assign(CRM_LOGIN_URL);
  };

  const handleBookCallOpen = () => {
    setIsBookCallOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleBookCallClose = () => {
    setIsBookCallOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldShowNavbar = currentScrollY <= 20;

      setIsVisible(shouldShowNavbar);
      if (!shouldShowNavbar) {
        setIsMobileMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = (isMobileMenuOpen || isChatbotOpen) ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isChatbotOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "ROI", href: "/roi" },
    { name: "Integrations", href: "/integrations" },
    { name: "Industries", href: "/industries" },
    { name: "Use cases", href: "/use-cases" },
    { name: "Blogs", href: "/blogs" },
    { name: "Triostack", href: "https://www.triostack.in/", external: true },
  ];
  const desktopLinks = links.filter((link) => link.name !== "Home");

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-[200] w-full isolate pointer-events-none bg-transparent py-3 transition-all duration-500 ${
          isVisible && !isChatbotOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="pointer-events-auto relative z-10 mx-auto flex max-w-[1720px] items-center justify-between gap-4 px-5 sm:px-8">
          <LogoAnimationLink
            className="relative z-10 inline-flex min-w-[158px] shrink-0 items-center gap-2.5 cursor-pointer"
            logoClassName="relative h-10 w-10 overflow-visible"
            textClassName="whitespace-nowrap text-[1.2rem] font-black leading-none tracking-normal text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            onBeforeLaunch={() => setIsMobileMenuOpen(false)}
          />

          <div className="hidden flex-1 justify-center xl:flex">
            <div className="inline-flex min-h-[3.45rem] items-center justify-center gap-1 rounded-full bg-[#0a1d36]/92 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_14px_38px_rgba(0,0,0,0.16)] ring-1 ring-white/5">
              <Link
                href="/"
                aria-label="Home"
                aria-current={pathname === "/" ? "page" : undefined}
                title="Home"
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                  pathname === "/"
                    ? "bg-white/10 text-[#55f2ee]"
                    : "text-white hover:bg-white/10 hover:text-[#55f2ee]"
                }`}
              >
                <Home aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={2.2} />
              </Link>
              {desktopLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center whitespace-nowrap rounded-full px-4 text-[0.93rem] font-medium text-white transition-colors hover:bg-white/10 hover:text-[#55f2ee]"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`inline-flex h-10 items-center whitespace-nowrap rounded-full px-4 text-[0.93rem] font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-white/10 text-[#55f2ee]"
                        : "text-white hover:bg-white/10 hover:text-[#55f2ee]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          <div className="relative z-10 flex shrink-0 items-center gap-3">
            <a
              href={CRM_LOGIN_URL}
              onClick={handleLoginClick}
              className="hidden h-12 items-center justify-center rounded-full border border-[#7aa2b2]/70 bg-[#173f52]/88 px-7 text-[0.95rem] font-semibold text-white shadow-[0_12px_30px_rgba(8,29,54,0.12)] backdrop-blur-xl transition-all hover:border-[#55f2ee] hover:bg-[#0a1d36] xl:inline-flex"
            >
              Login
            </a>
            <button
              type="button"
              onClick={handleBookCallOpen}
              className="hidden h-12 items-center justify-center rounded-full bg-[#43f1ee] px-7 text-[0.95rem] font-bold text-[#061523] shadow-[0_14px_34px_rgba(67,241,238,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#5df6f3] hover:shadow-[0_18px_42px_rgba(67,241,238,0.32)] active:translate-y-0 xl:inline-flex"
            >
              Book a Call
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full border border-white/12 bg-[#0a1d36]/70 p-3 text-white/90 transition-colors hover:bg-white/10 hover:text-white xl:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              <div className="relative flex h-5 w-6 flex-col justify-between overflow-hidden">
                <span className={`h-0.5 w-full origin-left bg-current transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-x-1" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full origin-left bg-current transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 translate-x-1" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[190] xl:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          aria-label="Close mobile menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-[#020814]/72 backdrop-blur-md"
        />

        <div
          id="mobile-nav-menu"
          className={`absolute inset-x-4 top-[78px] max-h-[calc(100dvh-96px)] overflow-y-auto rounded-[1.75rem] border border-white/10 bg-[#0a1d36]/96 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl transition-all duration-500 ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6 p-7">
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7aa2b2]">Navigation</p>
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl px-3 py-2 text-2xl font-bold text-white transition-colors hover:bg-white/10 hover:text-[#55f2ee]"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`rounded-2xl px-3 py-2 text-2xl font-bold transition-colors ${
                      pathname === link.href ? "bg-white/10 text-[#55f2ee]" : "text-white hover:bg-white/10 hover:text-[#55f2ee]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            <div className="h-px bg-white/10" />

            <div className="flex flex-col gap-4">
              <a
                href={CRM_LOGIN_URL}
                onClick={handleLoginClick}
                className="flex h-12 items-center justify-center rounded-full border border-[#7aa2b2]/70 text-base font-semibold text-white transition-all hover:border-[#55f2ee] hover:bg-white/10"
              >
                Login
              </a>
              <button
                type="button"
                onClick={handleBookCallOpen}
                className="rounded-full bg-[#43f1ee] px-7 py-4 text-base font-bold text-[#061523] shadow-[0_14px_34px_rgba(67,241,238,0.22)] transition-all hover:bg-[#5df6f3]"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={isBookCallOpen} onClose={handleBookCallClose} />
    </>
  );
}
