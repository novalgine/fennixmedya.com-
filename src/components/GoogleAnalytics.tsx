"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { CONSENT_STORAGE_KEY, CONSENT_CHANGED_EVENT } from "@/components/FacebookPixel";

// Vercel ortam değişkeni; tanımlı değilse GA4 hiç yüklenmez.
// Vercel ortam değişkeni önce gelir; yoksa sitenin GA4 mülkü (Semih, 22 Eylül 2026)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-VY99XYWRS0";

/** GA4 — FacebookPixel ile aynı kural: yalnızca açık çerez onayından sonra yüklenir. */
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage yalnızca istemcide okunabilir
    setConsented(localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted");
    const onChange = (e: Event) => setConsented((e as CustomEvent<string>).detail === "accepted");
    window.addEventListener(CONSENT_CHANGED_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onChange);
  }, []);

  // Sayfa geçişleri (App Router'da gtag otomatik page_view atmaz)
  useEffect(() => {
    if (!consented || !GA_ID || typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", { page_path: pathname });
  }, [pathname, consented]);

  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true, send_page_view: true });`}
      </Script>
    </>
  );
}
