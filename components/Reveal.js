"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0, from = "bottom" }) {
  const ref = useRef(null);
  const [isClientReady, setIsClientReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const hiddenTransform =
    from === "bottom-left"
      ? "-translate-x-6 translate-y-8"
      : from === "bottom-right"
        ? "translate-x-6 translate-y-8"
        : "translate-y-8";

  useEffect(() => {
    const node = ref.current;
    setIsClientReady(true);

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(node);

    // Initial check for elements already in viewport
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${!isClientReady || visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransform}`} transition-all duration-700 ease-out ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
