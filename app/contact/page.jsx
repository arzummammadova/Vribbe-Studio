'use client';
import { useLanguage } from '../../lib/i18n';
import SiteHeader from "../../components/SiteHeader";
export default function Page() { const { t } = useLanguage(); return <>
<link rel="stylesheet" href="/assets/css/contact.css" />
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
<section className="contact-hero" id="hero">
<div className="container">
<div className="hero hero-contact">
<h1>{t.contactUs}</h1>

</div>
</div>
</section>
<section id="form">
<div className="container">
<form data-contact-form="">
<div className="form-left">
<div className="form-left-top">
<h3>{t.contactTitle}<span>{t.contactSpan}</span>
</h3>
<p>{t.heroDesc}</p>
</div>
<div className="form-left-center">
<div className="info">

<div className="email">
<h5>{t.emailAddress}</h5>
<p><a href="mailto:info.vribbe@gmail.com">{"info.vribbe@gmail.com"}</a></p>
</div>
</div>

</div>
<div className="form-left-footer">
<div className="socials-contact">
<a href="https://www.instagram.com/vribbe/" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on Instagram">{"Instagram"}</a>
<a href="https://www.linkedin.com/company/vribbe" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on LinkedIn">{"LinkedIn"}</a>
<a href="https://www.youtube.com/@vribbe" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on YouTube">{"YouTube"}</a>
</div>
</div>
</div>
<div className="form-right">
<ul>
<li>{t.sendMessage}</li>
</ul>
<div className="form-top">
<input type="text" placeholder={t.yourFullName} name="name" aria-label={t.yourFullName} required />
<input type="email" placeholder={t.yourEmail} name="email" aria-label={t.yourEmail} required />
</div>
<input type="text" placeholder={t.subject} name="subject" aria-label={t.subject} required />
<textarea placeholder={t.messagePlaceholder} name="message" aria-label={t.messagePlaceholder} required></textarea>
<button className="send" type="submit">{t.sendMessage}<img src="/assets/icons/arrow-top-right (1).svg" alt="" /></button>
</div>
<p className="form-status" role="status">{t.formStatus}</p></form>
</div>
</section>
</main>
<footer id="footer-contact">
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
<div className="copyright-contact">
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
