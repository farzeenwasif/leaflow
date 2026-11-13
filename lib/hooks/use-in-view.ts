"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  /** Stop observing after the element has entered the viewport once. */
  once?: boolean;
};

/** Tracks whether an element is inside the viewport. */
export function useInView<T extends Element>({
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  once = true,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
