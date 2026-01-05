import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [isChanging, setIsChanging] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  // Initialize document attributes on mount
  useEffect(() => {
    const isRTL = i18n.language === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, []);

  // Update document attributes when language changes
  useEffect(() => {
    const isRTL = i18n.language === 'ar';
    
    // Update document attributes immediately
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    
    // Update state to trigger re-renders
    setCurrentLang(i18n.language);
    setIsChanging(true);
    
    // Reset changing state after a brief moment
    const timer = setTimeout(() => {
      setIsChanging(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [i18n.language]);

  // Listen for language change events from window
  useEffect(() => {
    const handleLanguageChangeEvent = (event: CustomEvent) => {
      const newLang = event.detail?.language;
      if (newLang && newLang !== currentLang) {
        setCurrentLang(newLang);
        setIsChanging(true);
        setTimeout(() => setIsChanging(false), 100);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChangeEvent as EventListener);
    
    return () => {
      window.removeEventListener('languageChanged', handleLanguageChangeEvent as EventListener);
    };
  }, [currentLang]);

  return <>{children}</>;
}

