import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MotionEnhancements() {
  const { pathname } = useLocation();
  const [workProgress, setWorkProgress] = useState(0);
  const frameRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    elements.forEach((element, index) => {
      element.classList.add("reveal-ready");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    const entranceFrame = window.requestAnimationFrame(() => {
      elements.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        if (bounds.top < window.innerHeight * 0.94 && bounds.bottom > 0) {
          element.classList.add("is-visible");
          observer.unobserve(element);
          return;
        }
        observer.observe(element);
      });
    });

    // Motion must never gate content if a browser throttles intersection events.
    const visibilityFallback = window.setTimeout(() => {
      elements.forEach((element) => element.classList.add("is-visible"));
    }, 4000);

    return () => {
      window.cancelAnimationFrame(entranceFrame);
      window.clearTimeout(visibilityFallback);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/work") {
      setWorkProgress(0);
      return;
    }

    const updateProgress = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        const available = document.documentElement.scrollHeight - window.innerHeight;
        setWorkProgress(available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0);
        frameRef.current = null;
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    };
  }, [pathname]);

  if (pathname !== "/work") return null;

  return (
    <div className="work-scroll-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${workProgress})` }} />
    </div>
  );
}
