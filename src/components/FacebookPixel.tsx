"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

const FB_PIXEL_ID = "37456966063894509";

export default function FacebookPixel() {
  const pathname = usePathname();

  useEffect(() => {
    // Only track if user has not declined cookies
    const consent = localStorage.getItem("fennix-cookie-consent");
    if (consent === "declined") {
      return;
    }

    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("event", "PageView");
    }
  }, [pathname]);

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
            
            // Check consent on initial load
            const consent = localStorage.getItem("fennix-cookie-consent");
            if (consent !== "declined") {
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            }
          `,
        }}
      />
      <noscript>
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
