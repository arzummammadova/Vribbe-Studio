'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteInteractions() {
  const pathname = usePathname();
  useEffect(() => {
    const controller = new AbortController();
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cards = document.querySelectorAll('.ourservices-card, .featured-card, .article-card');
    const sizes = new ResizeObserver(entries => {
      entries.forEach(({ target }) => target.style.setProperty('--card-height', `${target.offsetHeight}px`));
    });
    cards.forEach(card => sizes.observe(card));
    const reveal = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        if (!motion.matches) target.animate([
          { opacity: .35, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 650, easing: 'cubic-bezier(.22,1,.36,1)' });
        reveal.unobserve(target);
      });
    }, { threshold: .15 });
    document.querySelectorAll('.hero-left, .hero-right, .ourservices-header, .featured, .award, .journal-heading, .journal-body section').forEach(el => reveal.observe(el));
    const on = (el, event, fn) => el?.addEventListener(event, fn, { signal: controller.signal });
    const menu = document.querySelector('.full-menu');
    const opener = document.querySelector('.menu');
    const closer = document.querySelector('.close-btn');
    const toggleMenu = (open) => {
      menu?.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
      opener?.setAttribute('aria-expanded', String(open));
      if (open) closer?.focus();
      else opener?.focus();
    };
    for (const [el, label, action] of [[opener, 'Open menu', () => toggleMenu(true)], [closer, 'Close menu', () => toggleMenu(false)]]) {
      el?.setAttribute('role', 'button');
      el?.setAttribute('tabindex', '0');
      el?.setAttribute('aria-label', label);
      on(el, 'click', action);
      on(el, 'keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); action(); } });
    }
    on(document, 'keydown', e => { if (e.key === 'Escape' && menu?.classList.contains('active')) toggleMenu(false); });
    menu?.querySelectorAll('a').forEach(a => on(a, 'click', () => toggleMenu(false)));
    const top = document.querySelector('#topBtn');
    const header = document.querySelector('.header-container');
    const scroll = () => {
      const active = window.scrollY > (document.querySelector('#hero')?.offsetHeight || 400) * .4;
      header?.classList.toggle('show', active);
      header?.classList.toggle('reset', !active);
      if (top) top.style.display = window.scrollY > 20 ? 'flex' : 'none';
      const circle = document.querySelector('#progressCircle circle');
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (circle) circle.style.strokeDashoffset = 125.6 * (1 - (total > 0 ? window.scrollY / total : 0));
    };
    on(window, 'scroll', scroll);
    scroll();
    on(top, 'click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    const cursor = document.querySelector('.cursor');
    on(window, 'mousemove', e => { if (cursor) { cursor.style.left = `${e.clientX}px`; cursor.style.top = `${e.clientY}px`; } });
    document.querySelectorAll('.hover-this').forEach(el => {
      on(el, 'mousemove', e => {
        const span = el.querySelector('span');
        if (span) span.style.transform = `translate(${(e.offsetX / el.offsetWidth * 2 - 1) * 7}px, ${(e.offsetY / el.offsetHeight * 2 - 1) * 7}px)`;
        cursor?.classList.add('hover-effect');
      });
      on(el, 'mouseleave', () => {
        const span = el.querySelector('span');
        if (span) span.style.transform = 'translate(0, 0)';
        cursor?.classList.remove('hover-effect');
      });
    });
    const track = document.querySelector('.carousel-track');
    let slide = 0;
    let paused = false;
    let startX = null;
    const move = (delta) => {
      if (!track?.firstElementChild) return;
      const width = track.firstElementChild.getBoundingClientRect().width;
      const visible = Math.max(1, Math.round(track.parentElement.clientWidth / width));
      const max = Math.max(0, track.children.length - visible);
      slide = (slide + delta + max + 1) % (max + 1);
      track.style.transform = `translateX(-${slide * width}px)`;
    };
    on(track, 'pointerenter', () => { paused = true; });
    on(track, 'pointerleave', () => { paused = false; });
    on(track, 'pointerdown', e => { startX = e.clientX; });
    on(window, 'pointerup', e => {
      if (startX !== null && Math.abs(e.clientX - startX) > 50) move(e.clientX < startX ? 1 : -1);
      startX = null;
    });
    on(window, 'resize', () => { slide = 0; move(0); });
    const timer = track ? setInterval(() => { if (!paused && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) move(1); }, 5000) : null;
    document.querySelectorAll('[data-contact-form]').forEach(form => on(form, 'submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const body = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join('\n');
      window.location.href = `mailto:info.vribbe@gmail.com?subject=${encodeURIComponent(data.get('subject') || 'New project for VRIBBE Studio')}&body=${encodeURIComponent(body)}`;
      form.querySelector('.form-status').textContent = 'Continue in your email app to send your enquiry to info.vribbe@gmail.com.';
    }));
    return () => { controller.abort(); sizes.disconnect(); reveal.disconnect(); clearInterval(timer); document.body.style.overflow = ''; };
  }, [pathname]);
  return null;
}
