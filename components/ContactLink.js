"use client";

import { usePathname } from "next/navigation";

const CONTACT_PATH = "/#contact";
const CONTACT_SCROLL_FLAG = "scroll-to-contact";

export default function ContactLink({ children, className = "" }) {
  const pathname = usePathname();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (!contactSection) {
      return false;
    }

    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", CONTACT_PATH);
    return true;
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (pathname === "/") {
      scrollToContact();
      return;
    }

    window.sessionStorage.setItem(CONTACT_SCROLL_FLAG, "1");
    window.location.assign(CONTACT_PATH);
  };

  return (
    <a href={CONTACT_PATH} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
