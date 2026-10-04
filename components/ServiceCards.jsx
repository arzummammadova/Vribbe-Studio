'use client';

import { useEffect, useRef } from 'react';

export default function ServiceCards({ t }) {
  const section = useRef(null);
  useEffect(() => {
    const root = section.current;
    const viewport = root.querySelector('.services-scroll__viewport');
    const track = root.querySelector('.services-scroll__track');
    const media = window.matchMedia('(min-width: 1101px) and (prefers-reduced-motion: no-preference)');
    let frame;
    const update = () => {
      frame = null;
      root.classList.toggle('services-scroll--active', media.matches);
      const enabled = media.matches && track.offsetHeight <= window.innerHeight - 100;
      root.classList.toggle('services-scroll--active', enabled);
      root.style.setProperty('--services-height', `${viewport.offsetHeight}px`);
      if (!enabled) { track.style.removeProperty('transform'); return; }
      const distance = root.offsetHeight - viewport.offsetHeight;
      const progress = Math.max(0, Math.min(1, (100 - root.getBoundingClientRect().top) / distance));
      const transition = Math.max(0, Math.min(1, (progress - 0.12) / 0.76));
      const eased = transition * transition * (3 - 2 * transition);
      track.style.transform = `translate3d(${-viewport.clientWidth * eased}px, 0, 0)`;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const focus = (event) => {
      if (!root.classList.contains('services-scroll--active')) return;
      const group = event.target.closest('[data-service-group]');
      if (group) window.scrollTo({ top: window.scrollY + root.getBoundingClientRect().top - 100 + Number(group.dataset.serviceGroup) * (root.offsetHeight - viewport.offsetHeight), behavior: 'instant' });
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(viewport);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    media.addEventListener('change', schedule);
    root.addEventListener('focusin', focus);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      media.removeEventListener('change', schedule);
      root.removeEventListener('focusin', focus);
    };
  }, [t]);

  return <div className="services-scroll" ref={section}>
    <div className="services-scroll__viewport">
      <div className="services-scroll__track">
        {[0, 1].map(group => <div className="ourservices-cards" data-service-group={group} key={group}>
          {t.services.slice(group * 4, group * 4 + 4).map(([title, description, icon], index) => <article className="ourservices-card" style={{ '--stack-index': group * 4 + index }} key={title}>
            <span className="service-number">0{group * 4 + index + 1} / 08</span>
            <div className="ourservices-card-header"><h3>{title}</h3><i className={`bi ${icon}`} aria-hidden="true" /></div>
            <div className="ourservices-card-description"><p>{description}</p>
              <div className="ourservices-card-img"><figure><img src={`/assets/images/services/service-${group * 4 + index + 1}.jpg`} alt={title} width="800" height="600" loading="lazy" /></figure></div>
            </div>
            <a href="/contact" className="service-inquiry" aria-label={`${t.startProject}: ${title}`}>{t.startProject}<span aria-hidden="true">&#8599;</span></a>
          </article>)}
        </div>)}
      </div>
    </div>
  </div>;
}
