'use client';
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
<button id="play-button" className="play-button hover-this">
<a href="/contact">{t.startYourProject}</a>
<i className="bi bi-arrow-up-right"></i>
</button>
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
    <h2 className="creative-studio__word">VRIBBE</h2>
    <p className="creative-studio__description">{t.creativeStudioDesc}</p>
  </div>
  <div className="creative-studio__middle">
    <div className="creative-studio__waves">
      <img src="/assets/images/studio-waves.jpg" alt="" width="3000" height="2000" loading="lazy" />
      <a className="creative-studio__play" href="https://www.youtube.com/@vribbe" target="_blank" rel="noopener noreferrer" aria-label="Visit VRIBBE Studio on YouTube">
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" aria-hidden="true"><path d="M4 3.5C4 1.6 6.1.5 7.7 1.5L22 11.9c1.4 1 1.4 3.2 0 4.2L7.7 26.5C6.1 27.5 4 26.4 4 24.5V3.5Z" fill="currentColor" /></svg>
      </a>
    </div>
    <h2 className="creative-studio__word creative-studio__word--green">DIGITAL</h2>
  </div>
  <div className="creative-studio__bottom">
    <h2 className="creative-studio__word">STUDIO</h2>
    <div className="creative-studio__team">
      <img src="/assets/images/studio-team.jpg" alt="Two colleagues discussing a creative project in the studio" width="1664" height="1109" loading="lazy" />
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
<h4>{t.servicesSubtitle}<span>{t.servicesSubtitleSpan}</span></h4>
<button className="hover-this play-button service-button">
<a href="/#ourservices">{t.learnMore}</a>
<i className="bi bi-chevron-right"></i>
</button>
</div>
</div>
<div className="ourservices-cards">
<div className="ourservices-card">
<div className="ourservices-card-header">
<h3>{t.service1Title}</h3>
<i className="bi bi-bezier"></i>
</div>
<div className="ourservices-card-description">
<p>{t.service1Desc}</p>
<div className="ourservices-card-img">
<figure>
<img src="/assets/images/card1.png" alt="" />
</figure>
</div>
</div>
</div>
<div className="ourservices-card">
<div className="ourservices-card-header">
<h3>{t.service2Title}</h3>
<i className="bi bi-code-slash"></i>
</div>
<div className="ourservices-card-description">
<p>{t.service2Desc}</p>
<div className="ourservices-card-img">
<figure>
<img src="/assets/images/card2.png" alt="" />
</figure>
</div>
</div>
</div>
<div className="ourservices-card">
<div className="ourservices-card-header">
<h3>{t.service3Title}</h3>
<i className="bi bi-code-slash"></i>
</div>
<div className="ourservices-card-description">
<p>{t.service3Desc}</p>
<div className="ourservices-card-img">
<figure>
<img src="/assets/images/card3.png" alt="" />
</figure>
</div>
</div>
</div>
</div>
<div className="ourphilosopy" id="studio">
<div className="left">
<figure>
<img src="/assets/images/intro.png" alt="" />
</figure>
</div>
<div className="right">
<ul>
<li>{t.ourPhilosophy}</li>
</ul>
<h4>{t.philosophyText}<span>{t.philosophySpan}</span>
</h4>
<button className="hover-this play-button service-button philosophy-button">
<a href="/#ourservices">{t.aboutVribbe}
<i className="bi bi-arrow-up-right"></i>
</a>
</button>
</div>
</div>
<div className="ticker-wrap">
<div className="ticker">
<ul>
<li>{"AI-Driven Solutions"}</li>
<li>{"Flexible Price"}</li>
<li>{"User Centric"}</li>
<li>{"User Centric Design"}</li>
<li>{"AI-Driven Solutions"}</li>
<li>{"Flexible Price"}</li>
<li>{"User Centric"}</li>
<li>{"User Centric Design"}</li>
</ul>
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
<section id="our-clients">
<div className="container">
<div className="our-clients">
<ul>
<li>{t.ourClients}</li>
</ul>
<div className="brands">
<div className="brand"><figure><img src="/assets/images/brand1.svg" alt="" /></figure></div>
<div className="brand"><figure><img src="/assets/images/brand2.svg" alt="" /></figure></div>
<div className="brand"><figure><img src="/assets/images/brand3.svg" alt="" /></figure></div>
<div className="brand"><figure><img src="/assets/images/brand4.svg" alt="" /></figure></div>
<div className="brand"><figure><img src="/assets/images/brand5.svg" alt="" /></figure></div>
<div className="brand"><figure><img src="/assets/images/brand5.svg" alt="" /></figure></div>
</div>
</div>
</div>
</section>
<section id="testimonials">
<div className="featured container">
<div className="featured-left">
<ul>
<li>{t.testimonials}</li>
</ul>
</div>
<div className="featured-right">
<h4>{t.testimonialsSubtitle}<span>{t.testimonialsSubtitleSpan}</span>
</h4>
<button className="testimonials-button">
<div className="left">
<img src="/assets/images/logotestimonails.svg" alt="" />
</div>
<div className="right">
<div className="top">
<p className="rating">{"4.9/5"}</p>
<i className="fa-star"></i>
</div>
<div className="rating-desc">
<p>{t.basedOn}</p>
</div>
</div>
</button>
</div>
</div>
<div className="testimonials-carousel">
<div className="carousel-container container">
<div className="carousel-track">
{[
  { img: '/assets/images/avatar1.jpg', name: 'Bradley Gordon', role: 'CEO & Founder, Archin Studio' },
  { img: '/assets/images/avatar2.jpg', name: 'Bradley Gordon', role: 'CEO & Founder, Archin Studio' },
  { img: '/assets/images/avatar3.jpg', name: 'Bradley Gordon', role: 'CEO & Founder, Archin Studio' },
  { img: '/assets/images/avatar1.jpg', name: 'Bradley Gordon', role: 'CEO & Founder, Archin Studio' },
].map((item, i) => (
  <div className="testimonials-card" key={i}>
  <div className="rating">
  <div className="rating-top">
  <div className="rating-value">{"5.0"}</div>
  <div className="stars">{"★★★★★"}</div>
  </div>
  <div className="text">
  <h6>{t.testimonialText}</h6>
  </div>
  </div>
  <div className="user-info">
  <div className="left"><img src={item.img} alt="" /></div>
  <div className="right">
  <h6>{item.name}</h6>
  <p>{item.role}</p>
  </div>
  </div>
  </div>
))}
</div>
</div>
</div>
</section>
<section id="award ">
<div className="container">
<div className="award container">
<div className="featured-left">
<ul>
<li>{t.awardsTitle}</li>
</ul>
</div>
<div className="featured-right">
<h4>{t.awardsSubtitle}<span>{t.awardsSubtitleSpan}</span>
</h4>
</div>
</div>
<table className="award-table">
<tr>
<th>{t.hosted}</th>
<th>{t.awardTitle}</th>
<th>{t.date}</th>
</tr>
<tbody>
<tr><td>{"Awwwards"}</td><td>{"SOTY 2023 - 1st Winner"}</td><td>{"May 2023"}</td></tr>
<tr><td>{"css awards"}</td><td>{"Top 5 Best of eCommerce Websites 2022"}</td><td>{"Dec 2022"}</td></tr>
<tr><td>{"Awwwards"}</td><td>{"Honor SOTD November, 2022"}</td><td>{"Nov 2022"}</td></tr>
<tr><td>{"Behance Portfolio"}</td><td>{"Winner – US Behance Portfolio Review 2021"}</td><td>{"Aug 2021"}</td></tr>
<tr><td>{"ui/ux global award"}</td><td>{"Top 10 Best of Mobile App Design 2021"}</td><td>{"Mar 2021"}</td></tr>
<tr><td>{"fwa us award"}</td><td>{"Winner – Best of Architecture Website 2020"}</td><td>{"Sep 2020"}</td></tr>
</tbody>
</table>
<button className="table-button hover-this play-button">
<a href="/#ourservices">{t.showMore}</a>
<i className="bi bi-chevron-right"></i>
</button>
</div>
</section>
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
<div className="article-card">
<figure>
<img src="/assets/images/articlecard.jpg" alt="" />
</figure>
<h4>{t.articleTitle}</h4>
<p>{t.designTrends}<span>{" / May 15, 2024 "}</span>
</p>
</div>
<div className="article-card">
<figure>
<img src="/assets/images/articlecard2.jpg" alt="" />
</figure>
<h4>{t.articleTitle}</h4>
<p>{t.experience}<span>{" / May 15, 2024 "}</span>
</p>
</div>
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
<p>{"+068 5681 96 96"}</p>
<span>{t.callUs}</span>
<button className="hover-this play-button service-button philosophy-button">
<a href="/#ourservices">{t.aboutVribbe}<i className="bi bi-arrow-up-right"></i>
</a>
</button>
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
