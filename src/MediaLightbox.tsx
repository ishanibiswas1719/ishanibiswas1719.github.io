import { useEffect, useRef } from "react";
import type { PortfolioMedia } from "./media";

type MediaLightboxProps = {
  items: PortfolioMedia[];
  activeIndex: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function MediaLightbox({ items, activeIndex, onChange, onClose }: MediaLightboxProps) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && activeIndex !== null) {
        onChange((activeIndex - 1 + items.length) % items.length);
      }
      if (event.key === "ArrowRight" && activeIndex !== null) {
        onChange((activeIndex + 1) % items.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, isOpen, items.length, onChange, onClose]);

  if (activeIndex === null) return null;
  const item = items[activeIndex];

  const move = (direction: -1 | 1) => {
    onChange((activeIndex + direction + items.length) % items.length);
  };

  return (
    <div className="media-lightbox" role="dialog" aria-modal="true" aria-label="Expanded portfolio media" onMouseDown={(event) => {
      if (event.currentTarget === event.target) onClose();
    }}>
      <button ref={closeButton} className="lightbox-close" type="button" onClick={onClose} aria-label="Close media viewer">Close ×</button>
      <figure className="lightbox-figure">
        <div className="lightbox-media">
          {item.type === "video" ? (
            <video key={item.src} src={item.src} poster={item.poster} controls autoPlay playsInline>
              Your browser does not support embedded video.
            </video>
          ) : (
            <img src={item.src} alt={item.alt} />
          )}
        </div>
        <figcaption>
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
          <p>{item.caption}</p>
        </figcaption>
      </figure>
      {items.length > 1 && (
        <div className="lightbox-controls" aria-label="Media navigation">
          <button type="button" onClick={() => move(-1)} aria-label="Previous item">← Previous</button>
          <button type="button" onClick={() => move(1)} aria-label="Next item">Next →</button>
        </div>
      )}
    </div>
  );
}
