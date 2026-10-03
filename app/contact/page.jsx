import SiteHeader from "../../components/SiteHeader";
export const metadata = {"title": "VRIBBE Studio | Contact"};
export default function Page() { return <>
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
<h1>{"Get In Touch"}</h1>

</div>
</div>
</section>
<section id="form">
<div className="container">
<form data-contact-form="">
<div className="form-left">
<div className="form-left-top">
<h3>{"LET'S MAKE YOUR BRAND "}<span>{"BRILLIANT!"}</span>
</h3>
<p>{"If you would like to work with us or just want to get in touch, we’d love to hear from\n                                you!"}</p>
</div>
<div className="form-left-center">
<div className="info">

<div className="email">
<h5>{"Email"}</h5>
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
<li>{"Send a message"}</li>
</ul>
<div className="form-top">
<input type="text" placeholder="Name" name="name" aria-label="Name" required />
<input type="email" placeholder="Email" name="email" aria-label="Email" required />
</div>
<input type="text" placeholder="Subject" name="subject" aria-label="Subject" required />
<textarea placeholder="Message" name="message" aria-label="Message" required></textarea>
<button className="send" type="submit">{"Let's Talking "}<img src="/assets/icons/arrow-top-right (1).svg" alt="" /></button>
</div>
<p className="form-status" role="status">{"Submitting opens your email app with your project details."}</p></form>
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
<p>{"inquiry"}</p>
<h4><a href="mailto:info.vribbe@gmail.com">{"info.vribbe@gmail.com"}</a></h4>

</div>
</div>
</div>
</div>
</div>
<div className="copyright-contact">
<div className="container">
<div className="copyright">
<div className="left">{"\n        © 2026 "}<a href="/">{" VRIBBE. "}</a>{"All Right Reserved\n      "}</div>
<div className="right">
<ul>
<li className="hover-this">
<a href="/" className="active">{"Home"}</a>
</li>
<li className="hover-this">
<a href="/work">{"Works"}</a>
</li>
<li className="hover-this">
<a href="/#ourservices">{"Studio"}</a>
</li>
<li className="hover-this">
<a href="/#articles">{"News"}</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</footer>


</>; }
