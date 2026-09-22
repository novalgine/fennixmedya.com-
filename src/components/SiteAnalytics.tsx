"use client";

import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import FacebookPixel from "@/components/FacebookPixel";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { track } from "@/lib/track";

/**
 * Sitenin tüm ölçümü tek yerde: Vercel Analytics (çerezsiz), GA4 ve Meta Pixel
 * (ikisi de çerez onayına bağlı). window.trackEvent, eski çağrı yerleri için köprü.
 */
export default function SiteAnalytics() {
  useEffect(() => {
    window.trackEvent = track;
  }, []);

  return (
    <>
      <Analytics />
      <GoogleAnalytics />
      <FacebookPixel />
    </>
  );
}
