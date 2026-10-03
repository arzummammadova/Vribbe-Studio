'use client';
import { useState, useEffect } from 'react';
import { LanguageContext, translations } from '../lib/i18n';

export default function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('vribbe_lang');
    if (saved && translations[saved]) setLangState(saved);
  }, []);

  function setLang(newLang) {
    setLangState(newLang);
    localStorage.setItem('vribbe_lang', newLang);
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
