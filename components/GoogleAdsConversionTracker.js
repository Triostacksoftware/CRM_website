"use client";

import { useEffect } from "react";

export default function GoogleAdsConversionTracker() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const conversionId = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;
    const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
    if (!conversionId || !conversionLabel) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "google_ads_conversion",
      send_to: `${conversionId}/${conversionLabel}`,
      value: 1.0,
      currency: "INR",
    });
  }, []);

  return null;
}
