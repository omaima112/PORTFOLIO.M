import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary/50 hover:bg-primary text-foreground border border-border transition-all duration-200 hover:border-secondary"
      aria-label="Toggle language"
    >
      <Languages size={18} className="text-secondary" />
      <span className="text-sm font-medium">
        {i18n.language === 'en' ? 'عربي' : 'EN'}
      </span>
    </button>
  );
}
