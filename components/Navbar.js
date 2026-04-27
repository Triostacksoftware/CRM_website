"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BookCallModal from "./BookCallModal";

const CRM_LOGIN_URL = "https://crm.triostack.in/login";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const pathname = usePathname();
  const isLightHeaderPage =
    pathname === "/features" ||
    pathname === "/pricing" ||
    pathname === "/use-cases" ||
    pathname.startsWith("/industries") ||
    pathname.startsWith("/blogs");

  useEffect(() => {
    const handleChatbotState = (e) => {
      setIsChatbotOpen(e.detail.isOpen);
    };
    window.addEventListener('chatbotStateChange', handleChatbotState);
    return () => window.removeEventListener('chatbotStateChange', handleChatbotState);
  }, []);

  const handleLoginClick = () => {
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

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreMenuOpen(false);
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
  const primaryLinks = links.slice(0, 6);
  const secondaryLinks = links.slice(6);
  const moreMenuIsActive = secondaryLinks.some((link) => !link.external && pathname === link.href);
  const navTextClass = isLightHeaderPage ? "text-slate-800 hover:text-[#00b274]" : "text-slate-200 hover:text-[#7ef7c4]";
  const activeTextClass = "text-[#00b274]";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[200] isolate pointer-events-none transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isVisible && !isChatbotOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          } bg-transparent py-4`}
      >
        <div
          className={`pointer-events-auto relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 py-3 backdrop-blur-xl sm:px-5 ${
            isLightHeaderPage
              ? "border border-slate-200/70 bg-white/82 shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
              : "border border-white/10 bg-[#07111f]/46 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
          }`}
        >
          <div className="flex min-w-0 items-center gap-6">
            <Link href="/" className="relative z-10 inline-flex shrink-0 items-center gap-2.5 cursor-pointer" aria-label="Go to home page">
              <div className="relative h-9 w-9 overflow-visible">
                <img
                  src="/trio-logo.png"
                  alt="CRM Solutions Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className={`whitespace-nowrap text-lg font-bold tracking-tight ${isLightHeaderPage ? "text-slate-950" : "text-[#f3fffb]"}`}>Trio-CRM 360</span>
            </Link>

            <div className="hidden items-center gap-1 xl:flex">
              {primaryLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative z-10 inline-flex items-center rounded-full px-3 py-2 text-[13px] font-medium transition-colors cursor-pointer ${navTextClass}`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`relative z-10 inline-flex items-center rounded-full px-3 py-2 text-[13px] font-medium transition-colors cursor-pointer ${pathname === link.href
                      ? activeTextClass
                      : navTextClass
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}

              <div className="relative" onMouseLeave={() => setIsMoreMenuOpen(false)}>
                <button
                  type="button"
                  onClick={() => setIsMoreMenuOpen((current) => !current)}
                  onMouseEnter={() => setIsMoreMenuOpen(true)}
                  className={`relative z-10 inline-flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium transition-colors cursor-pointer ${
                    moreMenuIsActive ? activeTextClass : navTextClass
                  }`}
                  aria-expanded={isMoreMenuOpen}
                  aria-haspopup="true"
                >
                  More
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${isMoreMenuOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                <div
                  className={`absolute left-1/2 top-full mt-3 w-48 -translate-x-1/2 rounded-2xl border p-2 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-200 ${
                    isMoreMenuOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-2 opacity-0"
                  } ${isLightHeaderPage ? "border-slate-200 bg-white/96" : "border-white/10 bg-[#07111f]/96"}`}
                >
                  {secondaryLinks.map((link) => (
                    link.external ? (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                          isLightHeaderPage ? "text-slate-700 hover:bg-[#effaf4] hover:text-[#00b274]" : "text-slate-200 hover:bg-white/8 hover:text-[#7ef7c4]"
                        }`}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        key={link.name}
                        href={link.href}
                        aria-current={pathname === link.href ? "page" : undefined}
                        className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                          pathname === link.href
                            ? "bg-[#effaf4] text-[#00b274]"
                            : isLightHeaderPage ? "text-slate-700 hover:bg-[#effaf4] hover:text-[#00b274]" : "text-slate-200 hover:bg-white/8 hover:text-[#7ef7c4]"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
 
          <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={CRM_LOGIN_URL}
              onClick={handleLoginClick}
              className={`hidden xl:block rounded-full px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${navTextClass}`}
            >
              Login
            </a>
            <button
              type="button"
              onClick={handleBookCallOpen}
              className="hidden xl:block bg-gradient-to-r from-[#7ef7c4] via-[#37dfaa] to-[#14c38e] text-[#04111c] px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:brightness-105 hover:shadow-[0_0_24px_rgba(55,223,170,0.28)] cursor-pointer pointer-events-auto relative z-[210] whitespace-nowrap"
            >
              Book Free Demo
            </button>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden rounded-full p-2 transition-colors ${isLightHeaderPage ? "text-slate-700 hover:bg-slate-100 hover:text-slate-950" : "text-white/80 hover:bg-white/10 hover:text-white"}`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-1' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-1' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[190] xl:hidden transition-all duration-500 ${isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
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
          className={`absolute inset-x-0 top-[72px] max-h-[calc(100dvh-72px)] overflow-y-auto bg-background/96 backdrop-blur-2xl transition-all duration-500 ${isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
            }`}
        >
          <div className="p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Navigation</p>
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold transition-colors text-white hover:text-[#7ef7c4]"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-2xl font-bold transition-colors ${pathname === link.href ? 'text-[#7ef7c4]' : 'text-white hover:text-[#7ef7c4]'
                      }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            <div className="h-px bg-white/10 my-4" />

            <div className="flex flex-col gap-5">
              <a
                href={CRM_LOGIN_URL}
                onClick={handleLoginClick}
                className="text-xl font-bold text-white hover:text-[#7ef7c4] transition-colors"
              >
                Login
              </a>
              <button
                type="button"
                onClick={handleBookCallOpen}
                className="w-full bg-gradient-to-r from-[#7ef7c4] via-[#37dfaa] to-[#14c38e] text-[#04111c] py-4 rounded-2xl text-lg font-bold shadow-xl shadow-[#7ef7c4]/10"
              >
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={isBookCallOpen} onClose={handleBookCallClose} />
    </>
  );
}
