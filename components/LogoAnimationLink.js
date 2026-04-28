"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ANIMATION_MS = 1900;
const PARTICLES = Array.from({ length: 16 }, (_, index) => ({
  rotation: index * 22.5,
  distance: 70 + (index % 4) * 18,
  delay: 90 + (index % 5) * 32,
}));

function wasPageRefresh() {
  const [navigationEntry] = performance.getEntriesByType("navigation");

  if (navigationEntry) {
    return navigationEntry.type === "reload";
  }

  return performance.navigation?.type === performance.navigation?.TYPE_RELOAD;
}

export default function LogoAnimationLink({
  ariaLabel = "Play Trio-CRM 360 logo animation",
  className = "",
  logoClassName = "relative h-10 w-10 overflow-visible",
  textClassName = "",
  text = "Trio-CRM 360",
  wordmark = "Trio-CRM 360",
  playOnMount = true,
  playOnceSessionKey,
  onBeforeLaunch,
}) {
  const logoRef = useRef(null);
  const hideTimerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [launch, setLaunch] = useState(null);

  const playLaunchAnimation = useCallback(() => {
    const rect = logoRef.current?.getBoundingClientRect();
    const viewportMin = Math.min(window.innerWidth, window.innerHeight);
    const endSize = Math.round(Math.min(Math.max(viewportMin * 0.22, 112), 184));
    const originX = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const originY = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const originScale = Math.max((rect?.width || endSize) / endSize, 0.18);
    const nextLaunch = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      originX,
      originY,
      originScale,
      endSize,
    };

    window.clearTimeout(hideTimerRef.current);
    setLaunch(null);

    window.requestAnimationFrame(() => {
      setLaunch(nextLaunch);
    });

    hideTimerRef.current = window.setTimeout(() => {
      setLaunch(null);
    }, ANIMATION_MS);
  }, []);

  useEffect(() => {
    setIsMounted(true);

    if (playOnMount) {
      if (playOnceSessionKey && !wasPageRefresh()) {
        try {
          if (window.sessionStorage.getItem(playOnceSessionKey) === "1") {
            return;
          }

          window.sessionStorage.setItem(playOnceSessionKey, "1");
        } catch {
          // If storage is unavailable, still let the visual moment play.
        }
      }

      window.requestAnimationFrame(playLaunchAnimation);
    }

    return () => {
      window.clearTimeout(hideTimerRef.current);
    };
  }, [playLaunchAnimation, playOnMount, playOnceSessionKey]);

  const handleLogoClick = useCallback(
    (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return;
      }

      event.preventDefault();
      onBeforeLaunch?.();
      playLaunchAnimation();
    },
    [onBeforeLaunch, playLaunchAnimation]
  );

  return (
    <>
      <button
        type="button"
        className={`appearance-none border-0 bg-transparent p-0 text-left ${className}`}
        aria-label={ariaLabel}
        onClick={handleLogoClick}
      >
        <span ref={logoRef} className={`inline-flex shrink-0 ${logoClassName}`}>
          <img src="/trio-logo.png" alt="Triostack Logo" className="h-full w-full object-contain" />
        </span>
        <span className={textClassName}>{text}</span>
      </button>

      {isMounted && launch
        ? createPortal(
            <div
              key={launch.id}
              className="trio-logo-launch-overlay"
              aria-hidden="true"
              style={{
                "--logo-origin-x": `${launch.originX}px`,
                "--logo-origin-y": `${launch.originY}px`,
                "--logo-origin-scale": launch.originScale,
                "--logo-end-size": `${launch.endSize}px`,
              }}
            >
              <div className="trio-logo-launch-burst">
                {PARTICLES.map((particle, index) => (
                  <span
                    key={index}
                    className="trio-logo-launch-particle"
                    style={{
                      "--particle-rotation": `${particle.rotation}deg`,
                      "--particle-distance": `${particle.distance}px`,
                      "--particle-delay": `${particle.delay}ms`,
                    }}
                  />
                ))}
              </div>
              <div className="trio-logo-launch-mark">
                <span className="trio-logo-launch-ring" />
                <img src="/trio-logo.png" alt="" className="trio-logo-launch-image" />
                <span className="trio-logo-launch-wordmark">{wordmark}</span>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
