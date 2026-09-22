import { track as vercelTrack } from "@vercel/analytics";

/**
 * Tek izleme noktası. Bir olay üç yere gider:
 *  - Vercel Analytics (çerezsiz, her zaman)
 *  - GA4 (yalnızca çerez onayı varsa gtag yüklüdür)
 *  - Meta Pixel (yalnızca çerez onayı varsa fbq yüklüdür)
 * Onay yoksa gtag/fbq tanımsızdır ve o dallar sessizce atlanır (KVKK).
 */
export type TrackParams = Record<string, unknown>;
type Allowed = Record<string, string | number | boolean | null>;

// Vercel yalnızca düz değer kabul eder; nesne/undefined gelirse metne çevrilir/atlanır.
function sanitize(params: TrackParams): Allowed {
  const out: Allowed = {};
  for (const [k, v] of Object.entries(params)) {
    if (v === undefined) continue;
    out[k] = v === null || ["string", "number", "boolean"].includes(typeof v) ? (v as string) : String(v);
  }
  return out;
}

export function track(eventName: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;
  const clean = sanitize(params);
  try {
    vercelTrack(eventName, clean);
  } catch {
    /* analytics engellenmişse sayfa etkilenmesin */
  }
  const w = window as Window & { gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void };
  if (typeof w.gtag === "function") w.gtag("event", eventName, clean);
  if (typeof w.fbq === "function") w.fbq("trackCustom", eventName, clean);
}
