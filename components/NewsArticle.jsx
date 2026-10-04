'use client';

import SiteHeader from './SiteHeader';
import { useLanguage } from '../lib/i18n';
import { journal } from '../lib/journal';
import '../app/creative-studio.css';

export default function NewsArticle({ slug }) {
  const { lang, t } = useLanguage();
  const design = slug === 'brand-design';
  const copy = journal[lang] || journal.en;
  const sections = design ? copy.design : copy.strategy;
  return <>
    <SiteHeader />
    <main className="journal-page container">
      <a className="journal-back" href="/#articles">← {t.latestArticles}</a>
      <article>
        <header className="journal-heading">
          <p className="section-eyebrow">{design ? t.designTrends : t.experience} / {t.articleMeta}</p>
          <h1>{design ? t.articleTitle : t.articleTitleTwo}</h1>
        </header>
        <img className={`journal-cover${design ? ' journal-cover--brand' : ''}`} src={design ? '/assets/images/news-brand-design.svg' : '/assets/images/news-strategy.jpg'} alt={design ? t.articleImageAlt : t.articleImageAltTwo} width="1600" height="1000" />
        <div className="journal-body">
          {sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}
          <a className="studio-link" href="/contact">{t.startProject} ↗</a>
        </div>
      </article>
      <aside className="journal-related">
        <p className="section-eyebrow">{t.latestArticles}</p>
        <a href={`/news/${design ? 'product-roadmap' : 'brand-design'}`}>{design ? t.articleTitleTwo : t.articleTitle} <span aria-hidden="true">↗</span></a>
      </aside>
    </main>
  </>;
}
