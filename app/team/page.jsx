'use client';
import SiteHeader from "../../components/SiteHeader";
import { useLanguage } from "../../lib/i18n";

export default function TeamPage() {
  const { t } = useLanguage();

  const members = [
    {
      name: "Arzu Məmmədova",
      role: t.arzuRole,
      bio: t.arzuBio,
      initials: "AM",
      avatarClass: "team-avatar--arzu",
      skills: ["Creative Direction", "Brand Strategy", "Art Direction", "UI/UX"],
      linkedin: "https://www.linkedin.com/company/vribbe",
      instagram: "https://www.instagram.com/vribbe/",
      email: "info.vribbe@gmail.com",
    },
    {
      name: "Ülkər Hüseynzadə",
      role: t.ulkerRole,
      bio: t.ulkerBio,
      initials: "ÜH",
      avatarClass: "team-avatar--ulker",
      skills: ["UI/UX Design", "Design Systems", "User Research", "Figma & Webflow"],
      linkedin: "https://www.linkedin.com/company/vribbe",
      instagram: "https://www.instagram.com/vribbe/",
      email: "info.vribbe@gmail.com",
    },
  ];

  return (
    <>
      <link rel="stylesheet" href="/assets/css/team.css" />
      <header>
        <div id="topBtn" className="hover-this up-button">
          <i className="bi bi-chevron-up"></i>
          <svg id="progressCircle" width="50" height="50" viewBox="0 0 50 50">
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="var(--lighter-gray)"
              strokeWidth="2"
              strokeDasharray="125.6"
              strokeDashoffset="125.6"
            ></circle>
          </svg>
        </div>
        <SiteHeader />
      </header>

      <main>
        <div id="hero" className="hero-team">
          <div className="container">
            <h1>{t.teamTitle}</h1>
            <div className="router">
              <div><a href="/">{t.home}</a></div>
              <i className="fa-solid fa-arrow-right-long"></i>
              <div className="green"><a href="/team">{t.team}</a></div>
            </div>
            <p className="team-intro">{t.teamSubtitle}</p>
          </div>
        </div>

        <section className="team-section">
          <div className="container">
            <div className="team-grid">
              {members.map((member) => (
                <div key={member.name} className="team-card hover-this">
                  <div className="team-card-header">
                    <div className="team-avatar-wrapper">
                      <div className={`team-avatar ${member.avatarClass}`}>
                        <span>{member.initials}</span>
                      </div>
                      <span className="team-status-dot" title="Active"></span>
                    </div>
                    <div className="team-meta">
                      <h3>{member.name}</h3>
                      <span className="team-role">{member.role}</span>
                    </div>
                  </div>

                  <div className="team-card-body">
                    <p className="team-bio">{member.bio}</p>
                    <div className="team-skills">
                      {member.skills.map((skill) => (
                        <span key={skill} className="team-skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="team-card-footer">
                    <div className="team-socials">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-social-link hover-this"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-social-link hover-this"
                        aria-label={`${member.name} on Instagram`}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="team-social-link hover-this"
                        aria-label={`Email ${member.name}`}
                      >
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                    <a href="/contact" className="team-contact-btn hover-this">
                      <span>{t.contactUs}</span>
                      <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="footer">
              <div className="left">
                <figure>
                  <a className="brand-signature" href="/" aria-label="VRIBBE home">
                    <img src="/assets/images/vribbe-logo.svg" alt="" width="604" height="520" />
                    <span>VRIBBE Studio</span>
                  </a>
                </figure>
              </div>
              <div className="right">
                <h2>
                  {t.footerTagline}
                  <span>{t.footerTaglineSpan}</span>
                </h2>
                <div className="information">
                  <div className="information-left">
                    <div className="social-networks">
                      <a href="https://www.instagram.com/vribbe/" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on Instagram">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                      <a href="https://www.linkedin.com/company/vribbe" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on LinkedIn">
                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                      </a>
                      <a href="https://www.youtube.com/@vribbe" target="_blank" rel="noopener noreferrer" aria-label="VRIBBE on YouTube">
                        <i className="fab fa-youtube" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                  <div className="information-right">
                    <p>{t.inquiry}</p>
                    <h4><a href="mailto:info.vribbe@gmail.com">info.vribbe@gmail.com</a></h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="left">
                {t.copyright} <a href="/"> VRIBBE. </a>{t.allRightsReserved}
              </div>
              <div className="right">
                <ul>
                  <li className="hover-this"><a href="/">{t.home}</a></li>
                  <li className="hover-this"><a href="/work">{t.works}</a></li>
                  <li className="hover-this"><a href="/team" className="active">{t.team}</a></li>
                  <li className="hover-this"><a href="/#ourservices">{t.studio}</a></li>
                  <li className="hover-this"><a href="/#articles">{t.news}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
