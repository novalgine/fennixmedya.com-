"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const FB_PIXEL_ID = "37456966063894509";

export const CONSENT_STORAGE_KEY = "fennix-cookie-consent";
export const CONSENT_CHANGED_EVENT = "fennix-consent-changed";

export default function FacebookPixel() {
  const pathname = usePathname();
  // KVKK: pixel yalnızca açık onay ("accepted") varsa yüklenir — null (karar verilmemiş)
  // ve "declined" durumlarında hiçbir Facebook isteği atılmaz.
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    // window.trackEvent köprüsü SiteAnalytics'te (lib/track.ts) — Pixel, GA4 ve
    // Vercel Analytics'e birlikte gider; fbq onay öncesi yoksa o dal sessizce düşer.

    // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage yalnızca istemcide okunabilir
    setConsented(localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted");

    const onConsentChange = (e: Event) => {
      setConsented((e as CustomEvent<string>).detail === "accepted");
    };
    window.addEventListener(CONSENT_CHANGED_EVENT, onConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onConsentChange);
  }, []);

  // İlk PageView'ı inline script atıyor; bu effect yalnızca sayfa geçişlerini izler.
  const initialPathname = useRef<string | null>(pathname);
  useEffect(() => {
    if (!consented || pathname === initialPathname.current) return;
    initialPathname.current = null;
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname, consented]);

  if (!consented) return null;

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element -- Meta'nın JS'siz piksel görseli, next/image olamaz */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
