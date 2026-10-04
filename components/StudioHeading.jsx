'use client';

import { useEffect, useRef } from 'react';

export default function StudioHeading({ children, green = false, as: Tag = 'h2', className = '' }) {
  const heading = useRef(null);

  useEffect(() => {
    const node = heading.current;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('studio-heading--visible');
        observer.disconnect();
      }
    }, { threshold: 0.05 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      node.classList.remove('studio-heading--visible');
    };
  }, []);

  return <Tag ref={heading} className={`${className || 'creative-studio__word'} studio-heading${green ? ' creative-studio__word--green' : ''}`}>{children}</Tag>;
}
