'use client';
import { useLanguage } from '../../lib/i18n';
import SiteHeader from "../../components/SiteHeader";
export default function Page() { const { t } = useLanguage(); return <>
<link rel="stylesheet" href="/assets/css/work.css" />
<header>
<div id="topBtn" className="hover-this up-button">
<i className="bi bi-chevron-up"></i>
<svg id="progressCircle" width="50" height="50" viewBox="0 0 50 50">
<circle cx="25" cy="25" r="20" fill="none" stroke="var(--lighter-gray)" strokeWidth="2" strokeDasharray="125.6" strokeDashoffset="125.6"></circle>
</svg>
</div>
<SiteHeader />

</header>
<main>
<div id="hero" className="hero-work">
<h1>{t.works}</h1>
<div className="router">
<div className=""><a href="/">{t.home}</a></div>
<i className="fa-solid fa-arrow-right-long"></i>
<div className="green"><a href="/work">{t.works}</a></div>
</div>
</div>
<div className="work-card-section">
<div className="container">
<div className="work-cards">
<div className="work-card">
<div className="buttons">
<button>{"\n                Development\n              "}</button>
<button>{"\n                UI/UX\n              "}</button>
<button>{"\n                Ullustration\n              "}</button>
</div>
<div className="text">
<h2>{"Unerio Residential"}</h2>
</div>
</div>
<div className="work-card">
<div className="buttons">
<button>{"\n                UI/UX\n              "}</button>
<button>{"\n                Webflow\n              "}</button>
</div>
<div className="text">
<h2>{"Aychin Studio"}</h2>
</div>
</div>
<div className="work-card">
<div className="buttons">
<button>{"\n                UI/UX\n              "}</button>
<button>{"\n                Webflow\n              "}</button>
</div>
<div className="text">
<h2>{"Jorger Clarkson"}</h2>
</div>
</div>
<div className="work-card">
<div className="buttons">
<button>{"\n                Development\n              "}</button>
<button>{"\n                UI/UX\n              "}</button>
<button>{"\n                Ullustration\n              "}</button>
</div>
<div className="text">
<h2>{"Unerio Residential"}</h2>
</div>
</div>
<div className="work-card">
<div className="buttons">
<button>{"\n                Development\n              "}</button>
<button>{"\n                UI/UX\n              "}</button>
<button>{"\n                Ullustration\n              "}</button>
</div>
<div className="text">
<h2>{"Vribbe"}</h2>
</div>
</div>
</div>
</div>
</div>
</main>
<footer id="footer-work">
<div className="work-call-action">
<div className="work-call-action-text">
<a href="/contact">{t.contactSpan}</a>
</div>
<div className="contact-button">
<div className="contact-btn">
<div className="contact-btn-link">
<a href="/contact" className="">{t.contactUs}<img src="/assets/icons/arrow-top-right (1).svg" alt="" />
</a>
</div>
</div>
</div>

</div>
<div className="container">
<div className="footer">
<div className="left">
<figure>
<a className="brand-signature" href="/" aria-label="VRIBBE home"><img src="/assets/images/vribbe-logo.svg" alt="" width="604" height="520" /><span>{"VRIBBE Studio"}</span></a>
</figure>
</div>
<div className="right">
<div className="information" style={{"marginTop": "0px", "color": "grey"}}>
<div className="information-left">


<div className="social-networks">
<a href="https://www.instagram.com/vribbe/" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
<a href="https://www.linkedin.com/company/vribbe" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on LinkedIn"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a>
<a href="https://www.youtube.com/@vribbe" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on YouTube"><i className="fab fa-youtube" aria-hidden="true"></i></a>
</div>
</div>
<div className="information-right">
<p>{t.inquiry}</p>
<h4><a href="mailto:info.vribbe@gmail.com">{"info.vribbe@gmail.com"}</a></h4>

</div>
</div>
</div>
</div>
</div>
<div className="copyright-work">
<div className="container">
<div className="copyright">
<div className="left">{t.copyright}<a href="/">{" VRIBBE. "}</a>{t.allRightsReserved}</div>
<div className="right">
<ul>
<li className="hover-this">
<a href="/" className="active">{t.home}</a>
</li>
<li className="hover-this">
<a href="/work">{t.works}</a>
</li>
<li className="hover-this">
<a href="/#ourservices">{t.studio}</a>
</li>
<li className="hover-this">
<a href="/#articles">{t.news}</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</footer>

</>; }
