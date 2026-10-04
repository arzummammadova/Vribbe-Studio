'use client';
import ServiceCards from "../components/ServiceCards";
import StudioHeading from "../components/StudioHeading";
import SiteHeader from "../components/SiteHeader";
import { useLanguage } from "../lib/i18n";
import './creative-studio.css';

export default function Page() {
  const { t } = useLanguage();
  return <>

<div className="background-wrapper">
<div id="topBtn" className="hover-this up-button">
<i className="bi bi-chevron-up"></i>
<svg id="progressCircle" width="50" height="50" viewBox="0 0 50 50">
<circle cx="25" cy="25" r="20" fill="none" stroke="var(--lighter-gray)" strokeWidth="2" strokeDasharray="125.6" strokeDashoffset="125.6"></circle>
</svg>
</div>
<div className="overlay"></div>
<SiteHeader />

<div className="main-content">
<section id="hero" className="hero">
<div className="container hero-content-wrapper">
<div className="hero-content hero-left">
<h1>{t.heroTitle}<span>{t.heroTitleSpan}</span></h1>
<a id="play-button" className="play-button hover-this" href="/contact">{t.startYourProject}<i className="bi bi-arrow-up-right"></i></a>
<div className="hero-description">
<p>{t.heroDesc}</p>
</div>
</div>
<div className="hero-right">
<figure>
<img src="/assets/images/image-test.png" alt="" />
</figure>
{/* <figure>
<img src="/assets/images/circle-badge.svg" alt="" />
</figure> */}
</div>
</div>
</section>
</div>
</div>
<main>
<section className="creative-studio" aria-label="VRIBBE Digital Studio">
  <div className="creative-studio__top">
    <StudioHeading>VRIBBE</StudioHeading>
    <p className="creative-studio__description">{t.creativeStudioDesc}</p>
  </div>
  <div className="creative-studio__middle">
    <div className="creative-studio__waves">
      <img src="/assets/images/studio-digital-waves.jpg" alt="" width="1600" height="900" loading="lazy" />
      <a className="creative-studio__play" href="https://www.youtube.com/@vribbe" target="_blank" rel="noopener noreferrer" aria-label="Visit VRIBBE Studio on YouTube">
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" aria-hidden="true"><path d="M4 3.5C4 1.6 6.1.5 7.7 1.5L22 11.9c1.4 1 1.4 3.2 0 4.2L7.7 26.5C6.1 27.5 4 26.4 4 24.5V3.5Z" fill="currentColor" /></svg>
      </a>
    </div>
    <StudioHeading green>DIGITAL</StudioHeading>
  </div>
  <div className="creative-studio__bottom">
    <StudioHeading>STUDIO</StudioHeading>
    <div className="creative-studio__team">
      <img src="/assets/images/studio-collaboration.jpg" alt="Creative team collaborating on a digital project" width="1600" height="900" loading="lazy" />
    </div>
  </div>
</section>
<section id="ourservices">
<div className="container">
<div className="ourservices">
<div className="ourservices-header">
<div className="left">
<ul>
<li>{t.ourServices}</li>
</ul>
</div>
<div className="right">
<StudioHeading as="h4" className="services-heading">{t.servicesSubtitle}<span>{t.servicesSubtitleSpan}</span></StudioHeading>
<a className="hover-this play-button service-button" href="/contact">{t.startProject}<i className="bi bi-chevron-right"></i></a>
</div>
</div>
<ServiceCards t={t} />
<div className="ourphilosopy" id="studio">
<div className="left">
<figure>
<img src="/assets/images/intro.png" alt="" loading="lazy" />
</figure>
</div>
<div className="right">
<ul>
<li>{t.ourPhilosophy}</li>
</ul>
<h4>{t.philosophyText}<span>{t.philosophySpan}</span>
</h4>
<a className="hover-this play-button service-button philosophy-button" href="/team">{t.aboutVribbe}
<i className="bi bi-arrow-up-right"></i>
</a>
</div>
</div>
<div className="ticker-wrap">
<div className="ticker">
<ul>{[...t.ticker, ...t.ticker].map((text, i) => <li key={i} aria-hidden={i >= t.ticker.length ? true : undefined}>{text}</li>)}</ul>
</div>
</div>
</div>
</div>
</section>
<section id="featured-works">
<div className="container">
<div className="featured container">
<div className="featured-left">
<ul>
<li>{t.featuredWorks}</li>
</ul>
</div>
<div className="featured-right">
<h4>{t.featuredSubtitle}<span>{t.featuredSubtitleSpan}</span>
</h4>
</div>
</div>
<div className="featured-card-section">
<div className="featured-cards">
<div className="featured-card">
<div className="featured-card-left">
<div className="top">
<h3>{"Unerio Residential Complex Landing page "}</h3>
</div>
<div className="bottom">
<p>{t.projectDesc}</p>
<div className="buttons">
<button>{"Development"}</button>
<button>{"UI/UX"}</button>
<button>{"Illustration"}</button>
</div>
</div>
</div>
<div className="featured-card-right">
<img src="/assets/images/testimonials1.jpg" alt="" />
</div>
</div>
<div className="featured-card">
<div className="featured-card-left">
<div className="top">
<h3>{"Archin Architecture Studio "}</h3>
</div>
<div className="bottom">
<p>{t.projectDesc}</p>
<div className="buttons">
<button>{"Mobile Responsive"}</button>
<button>{"UX design"}</button>
</div>
</div>
</div>
<div className="featured-card-right">
<img src="/assets/images/testimonials2.jpg" alt="" />
</div>
</div>
<div className="featured-card">
<div className="featured-card-left">
<div className="top">
<h3>{"Jorger Clarkson - Architect Personal Portfolio "}</h3>
</div>
<div className="bottom">
<p>{t.projectDesc}</p>
<div className="buttons">
<button>{"UI/UX"}</button>
<button>{"Webflow"}</button>
</div>
</div>
</div>
<div className="featured-card-right">
<img src="/assets/images/testimonials3.jpg" alt="" />
</div>
</div>
<div className="featured-card">
<div className="featured-card-left">
<div className="top">
<h3>{"Jorger Clarkson - Architect Personal Portfolio "}</h3>
</div>
<div className="bottom">
<p>{t.projectDesc}</p>
<div className="buttons">
<button>{"UI/UX"}</button>
<button>{"Webflow"}</button>
</div>
</div>
</div>
<div className="featured-card-right">
<img src="/assets/images/testimonials4.jpg" alt="" />
</div>
</div>
</div>
<div className="btn-works">
<button className="featured-works-button hover-this play-button service-button philosophy-button">
<a href="/work">{t.checkPortfolio}<i className="bi bi-arrow-up-right"></i>
</a>
</button>
</div>
</div>
</div>
</section>
<section id="faq" className="awards-faq">
<div className="container">
<div className="award container"><div className="featured-left"><ul><li>{t.faqTitle}</li></ul></div>
<div className="featured-right"><h4>{t.faqSubtitle}<span>{t.faqSubtitleSpan}</span></h4></div></div>
<div className="awards-faq__list">
{t.faqs.map(([question, answer], index) => <details name="studio-faq" key={question}>
<summary><span className="awards-faq__number">0{index + 1}</span><span>{question}</span><span className="awards-faq__toggle" aria-hidden="true" /></summary>
<p className="faq-answer">{answer}</p>
</details>)}
</div></div></section>
<section id="articles">
<div className="container">
<div className="award container">
<div className="featured-left">
<ul>
<li>{t.latestArticles}</li>
</ul>
</div>
<div className="featured-right">
<h4>{t.articlesSubtitle}<span>{t.articlesSubtitleSpan}</span>
</h4>
</div>
</div>
<div className="article-cards">
<a className="article-card" href="/news/brand-design">
<figure>
<img src="/assets/images/news-brand-design.svg" alt={t.articleImageAlt} width="1600" height="1000" loading="lazy" />
</figure>
<h4>{t.articleTitle}</h4>
<p>{t.designTrends}<span>{" / "}{t.articleMeta}</span>
</p>
</a>
<a className="article-card" href="/news/product-roadmap">
<figure>
<img src="/assets/images/news-strategy.jpg" alt={t.articleImageAltTwo} loading="lazy" />
</figure>
<h4>{t.articleTitleTwo}</h4>
<p>{t.experience}<span>{" / "}{t.articleMeta}</span>
</p>
</a>
</div>
</div>
</section>
<section id="contact-us">
<div className="container">
<div className="contact-us">
<div className="left">
<h3>{t.contactTitle}<span>{t.contactSpan}</span>
</h3>
<div className="bottom">
<p><a href="mailto:info.vribbe@gmail.com">info.vribbe@gmail.com</a></p>
<span>{t.callUs}</span>
<a className="hover-this play-button service-button philosophy-button" href="/team">{t.aboutVribbe}<i className="bi bi-arrow-up-right"></i>
</a>
</div>
</div>
<div className="right">
<form data-contact-form="">
<div className="form-box">
<div className="fullname">
<label htmlFor="fullname">{t.fullName} <span>{"*"}</span></label>
<input type="text" id="fullname" placeholder={t.yourFullName} name="fullname" aria-label={t.yourFullName} required />
</div>
<div className="email-address">
<label htmlFor="email">{t.emailAddress} <span>{"*"}</span></label>
<input type="email" id="email" placeholder={t.yourEmail} name="email" aria-label={t.yourEmail} required />
</div>
</div>
<div className="form-box">
<div className="subject">
<label htmlFor="subject">{t.subject} <span>{"*"}</span></label>
<input type="text" id="subject" placeholder={t.subjectPlaceholder} name="subject" aria-label={t.subjectPlaceholder} required />
</div>
<div className="budget">
<label htmlFor="budget">{t.yourBudget} <span className="optional">{t.optional}</span></label>
<input type="text" id="budget" placeholder={t.budgetPlaceholder} name="budget" aria-label={t.budgetPlaceholder} />
</div>
</div>
<div className="form-box message-box">
<div className="message">
<label htmlFor="message">{t.message}</label>
<textarea id="message" placeholder={t.messagePlaceholder} name="message" aria-label={t.messagePlaceholder} required></textarea>
</div>
</div>
<button className="send-button">{t.sendMessage} <i className="bi bi-arrow-up-right"></i>
</button>
<p className="form-status" role="status">{t.formStatus}</p></form>
</div>
</div>
</div>
</section>
<footer id="footer">
<div className="container">
<div className="footer">
<div className="left">
<figure>
<a className="brand-signature" href="/" aria-label="VRIBBE home"><img src="/assets/images/vribbe-logo.svg" alt="" width="604" height="520" /><span>{"VRIBBE Studio"}</span></a>
</figure>
</div>
<div className="right">
<h2>{t.footerTagline}<span>{t.footerTaglineSpan}</span>
</h2>
<div className="information">
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
<div className="copyright">
<div className="left">{t.copyright} <a href={"/"}>{" VRIBBE. "}</a>{t.allRightsReserved}</div>
<div className="right">
<ul>
<li className="hover-this"><a href="/" className="active">{t.home}</a></li>
<li className="hover-this"><a href="/work">{t.works}</a></li>
<li className="hover-this"><a href="/team">{t.team}</a></li>
<li className="hover-this"><a href="/#ourservices">{t.studio}</a></li>
<li className="hover-this"><a href="/#articles">{t.news}</a></li>
</ul>
</div>
</div>
</div>
</footer>
</main>

</>; }
