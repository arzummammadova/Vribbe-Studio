'use client';
import { useLanguage } from '../lib/i18n';

export default function ProjectCard() {
  const { t } = useLanguage();
  return <article className="studio-project">
    <a className="studio-project__image" href="https://vribbe.com" target="_blank" rel="noopener noreferrer" aria-label={`${t.visitProject}: VRIBBE`}>
      <img src="/assets/images/vribbe-landing.jpg" alt={t.projectTitle} width="1440" height="1050" loading="lazy" />
    </a>
    <div className="studio-project__details">
      <div><p className="studio-project__type">{t.projectType}</p><h3>{t.projectTitle}</h3><p>{t.projectDesc}</p></div>
      <a className="studio-link" href="https://vribbe.com" target="_blank" rel="noopener noreferrer">{t.visitProject}<span aria-hidden="true">↗</span></a>
    </div>
  </article>;
}
