"use client";
import { useSyncExternalStore } from "react";

/**
 * Adres çubuğundaki bir parametreyi okur. Sunucuda null döner (sayfa tam HTML ile
 * gelir, arama motoru her şeyi görür); istemcide gerçek değer gelir. Etkiden setState yok.
 */
export function useUrlParam(name: string): string | null {
  return useSyncExternalStore(
    (cb) => {
      window.addEventListener("popstate", cb);
      return () => window.removeEventListener("popstate", cb);
    },
    () => new URLSearchParams(window.location.search).get(name),
    () => null
  );
}
