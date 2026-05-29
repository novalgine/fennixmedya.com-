import { useEffect, useRef } from "react";

export function useCountUp(end: number, duration = 2000, trigger = true) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current || !nodeRef.current) return;
    hasRun.current = true;
    const node = nodeRef.current;

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(eased * end);

      // Directly mutate the DOM (Bypasses React re-rendering 60fps)
      node.innerText = val.toLocaleString("tr-TR");

      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return nodeRef;
}
