// Global type declarations for analytics functions injected via index.html <script> tags
// These are defined at runtime by the tracking script — not imported as modules.

declare global {
    interface Window {
        /** Unified event tracker — fires to Meta Pixel, Google Analytics GA4, and GTM dataLayer */
        trackEvent: (eventName: string, params?: Record<string, unknown>) => void;
        /** Meta Pixel fbq function */
        fbq: (command: string, eventOrId: string, params?: Record<string, unknown>) => void;
        /** Google Analytics gtag function */
        gtag: (...args: unknown[]) => void;
        /** GTM / GA4 dataLayer */
        dataLayer: Record<string, unknown>[];
    }
}

export { };
