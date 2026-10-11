'use client';

import { useEffect, useRef } from 'react';

const STAGGER = 150;
const DURATION = 700;
const EASING = 'ease-out';

export default function PhilosophyReveal({ children, className, id }) {
  const root = useRef(null);

  useEffect(() => {
    const node = root.current;
    if (!node || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const images = [...node.querySelectorAll('[data-reveal="image"]')];
    const text = [...node.querySelectorAll('[data-reveal="text"]')];
    const items = [
      ...images.map((el, i) => ({ el, delay: i * STAGGER, distance: 40 })),
      ...text.map((el, i) => ({ el, delay: (images.length + i) * STAGGER, distance: 24 })),
    ];
    items.forEach(({ el }) => { el.style.opacity = '0'; });

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      items.forEach(({ el, delay, distance }) => {
        el.animate([
          { opacity: 0, transform: `translateY(${distance}px)` },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: DURATION, delay, easing: EASING, fill: 'backwards' });
        el.style.opacity = '';
      });
    }, { rootMargin: '0px 0px -15% 0px' });
    observer.observe(node);

    return () => {
      observer.disconnect();
      items.forEach(({ el }) => { el.style.opacity = ''; });
    };
  }, []);

  return <div ref={root} className={className} id={id}>{children}</div>;
}
