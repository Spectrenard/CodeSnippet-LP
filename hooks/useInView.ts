import { useEffect, useRef, useState, RefObject } from "react";

interface IntersectionOptions extends IntersectionObserverInit {
  once?: boolean;
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useInView<T extends Element = Element>(
  options: IntersectionOptions = {}
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (options.once && entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.root, options.rootMargin, options.once]);

  return [ref, isInView];
}
