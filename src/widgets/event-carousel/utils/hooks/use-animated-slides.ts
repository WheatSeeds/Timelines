import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

import { IEvent } from "../../../../entities/event/types/types";

export const useAnimatedItems = (items: IEvent[]) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [renderedItems, setRenderedItems] = useState<IEvent[]>(items);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const slides = wrapperRef.current.querySelectorAll(".swiper-slide");

    gsap.to(slides, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        setRenderedItems(items);
        requestAnimationFrame(() => {
          const newSlides =
            wrapperRef.current?.querySelectorAll(".swiper-slide") || [];
          gsap.fromTo(
            newSlides,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          );
        });
      },
    });
  }, [items]);

  return { wrapperRef, renderedItems };
};
