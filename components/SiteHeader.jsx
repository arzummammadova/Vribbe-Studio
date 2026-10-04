'use client';
import { useLanguage } from '../lib/i18n';

function FlagAZ() {
  return (
    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <rect width="18" height="4.33" fill="#00B5E2"/>
      <rect y="4.33" width="18" height="4.33" fill="#EF3340"/>
      <rect y="8.67" width="18" height="4.33" fill="#509E2F"/>
      <circle cx="8.5" cy="6.5" r="1.6" fill="#FFFFFF"/>
      <circle cx="9.0" cy="6.5" r="1.3" fill="#EF3340"/>
      <polygon points="10.8,6.5 11.2,6.8 11.0,6.3 11.5,6.0 10.9,6.0 10.8,5.5 10.6,6.0 10.0,6.0 10.5,6.3 10.3,6.8" fill="#FFFFFF"/>
    </svg>
  );
}

function FlagEN() {
  return (
    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <clipPath id="uk-flag-clip"><rect width="18" height="13" rx="2"/></clipPath>
      <g clipPath="url(#uk-flag-clip)">
        <rect width="18" height="13" fill="#012169"/>
        <path d="M0 0L18 13M18 0L0 13" stroke="#FFFFFF" strokeWidth="2.4"/>
        <path d="M0 0L18 13M18 0L0 13" stroke="#C8102E" strokeWidth="1.1"/>
        <path d="M9 0V13M0 6.5H18" stroke="#FFFFFF" strokeWidth="3.6"/>
        <path d="M9 0V13M0 6.5H18" stroke="#C8102E" strokeWidth="2.1"/>
      </g>
    </svg>
  );
}

function FlagRU() {
  return (
    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}>
      <clipPath id="ru-flag-clip"><rect width="18" height="13" rx="2"/></clipPath>
      <g clipPath="url(#ru-flag-clip)">
        <rect width="18" height="4.33" fill="#FFFFFF"/>
        <rect y="4.33" width="18" height="4.33" fill="#0039A6"/>
        <rect y="8.67" width="18" height="4.33" fill="#D52B1E"/>
      </g>
    </svg>
  );
}

const LANGS = [
  { code: 'az', flag: <FlagAZ />, label: 'AZ' },
  { code: 'en', flag: <FlagEN />, label: 'EN' },
  { code: 'ru', flag: <FlagRU />, label: 'RU' },
];

export default function SiteHeader() {
  const { lang, t, setLang } = useLanguage();

  return <>
<div className="header-container">
<div className="container">
<header className="header">
<div className="left-section">
<a className="logo hover-this" href="/" aria-label="VRIBBE Studio home">
<img className="brand-logo" src="/assets/images/vribbe-logo.svg" alt="VRIBBE" width="604" height="520" />
<span className="brand-name">{"VRIBBE Studio"}</span>
</a>
<div className="nav-wrapper">
<nav>
<a href="/" className="hover-this"><span>{t.home}</span></a>
<a href="/#ourservices" className="hover-this"><span>{t.studio}</span></a>
<a href="/work" className="hover-this"><span>{t.works}</span></a>
<a href="/team" className="hover-this"><span>{t.team}</span></a>
<a href="/#articles" className="hover-this"><span>{t.news}</span></a>
<div className="cursor"></div>
</nav>
</div>
</div>
<div className="right-section">
<div className="lang-switcher">
{LANGS.map(({ code, flag, label }) => (
  <button
    key={code}
    onClick={() => setLang(code)}
    className={`lang-btn hover-this${lang === code ? ' lang-btn--active' : ''}`}
    aria-label={`Switch to ${label}`}
    title={label}
  >
    <span className="lang-flag">{flag}</span>
    <span className="lang-label">{label}</span>
  </button>
))}
</div>
<a className="start-project hover-this" href="/contact">{t.startProject}<img src="/assets/icons/arrow-top-right (1).svg" alt="" /></a>
<div className="menu hover-this">
<i className="fa-solid fa-align-right"></i>
</div>
</div>
</header>
</div>
</div><div className="full-menu">
<div className="close-btn hover-this">
<i className="bi bi-x-lg"></i>
</div>
<div className="menu-left">
<img src="/assets/images/menu-shape.png" className="menu-shape" alt="" />
<nav className="menu-links" aria-label="Main menu">
{[
  [t.home, '/'],
  [t.studio, '/#ourservices'],
  [t.works, '/work'],
  [t.team, '/team'],
  [t.news, '/#articles'],
  [t.contactUs, '/contact'],
].map(([label, href]) => (
  <div className="text" key={label}>
    <a href={href}>{label}</a>
    <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
  </div>
))}
</nav>
</div>
<div className="menu-right">
<img src="/assets/images/menu-shape.png" className="menu-shape" alt="" />
<div className="menu-info">
  <a className="brand-signature" href="/" aria-label="VRIBBE Studio home">
    <img src="/assets/images/vribbe-logo.svg" alt="" width="604" height="520" />
    <span>VRIBBE Studio</span>
  </a>
  <div className="socials">
    <a href="https://www.instagram.com/vribbe/" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
    <a href="https://www.linkedin.com/company/vribbe" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on LinkedIn"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
    <a href="https://www.youtube.com/@vribbe" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on YouTube"><i className="fab fa-youtube" aria-hidden="true"></i></a>
  </div>
  <div className="info">
    <p><a href="mailto:info.vribbe@gmail.com">info.vribbe@gmail.com</a></p>
  </div>
</div>
</div>
</div>
</>; }
