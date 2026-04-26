"use client";

import { useEffect, useState } from "react";
import BookCallModal from "./BookCallModal";

const DEFAULT_MODAL_CONTENT = {
  title: "Book a Call",
  subtitle: "Share your details and our team will contact you shortly.",
};

export default function BookCallModalProvider() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    ...DEFAULT_MODAL_CONTENT,
  });

  useEffect(() => {
    const handleOpen = (event) => {
      const detail = event?.detail ?? {};

      setModalState({
        isOpen: true,
        title: detail.title || DEFAULT_MODAL_CONTENT.title,
        subtitle: detail.subtitle || DEFAULT_MODAL_CONTENT.subtitle,
      });
    };

    window.addEventListener("book-call-modal:open", handleOpen);

    return () => {
      window.removeEventListener("book-call-modal:open", handleOpen);
    };
  }, []);

  const handleClose = () => {
    setModalState((currentState) => ({
      ...currentState,
      isOpen: false,
    }));
  };

  return (
    <BookCallModal
      isOpen={modalState.isOpen}
      onClose={handleClose}
      title={modalState.title}
      subtitle={modalState.subtitle}
    />
  );
}
