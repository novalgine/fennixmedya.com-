"use client";

import { useEffect } from "react";
import Script from "next/script";
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
      {/* Paket kuyruğu (window.va) kurar; betiği canlıda eklemediği görüldü (22 Eyl 2026) —
          etiket burada açıkça ekleniyor. Yerelde 404 döner, sayfa etkilenmez. */}
      <Analytics />
      <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
      <GoogleAnalytics />
      <FacebookPixel />
    </>
  );
}
