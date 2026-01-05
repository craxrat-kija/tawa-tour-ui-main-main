import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = i18n.language === 'ar';

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    if (langCode !== i18n.language) {
      // Close dropdown immediately
      setIsOpen(false);
      
      // Save language preference to localStorage first
      localStorage.setItem('i18nextLng', langCode);
      
      // Change language and then refresh the entire system
      i18n.changeLanguage(langCode).then(() => {
        // Trigger a complete page refresh to ensure all components update
        // This ensures the entire system reflects the new language
        window.location.reload();
      }).catch((error) => {
        console.error('Error changing language:', error);
        // Even on error, refresh to ensure consistency
        window.location.reload();
      });
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/80 hover:bg-background border border-jungle/20 hover:border-jungle/40 transition-all duration-200 text-sm font-medium relative z-10 cursor-pointer active:scale-95"
            aria-label="Change language"
            type="button"
          >
            <Languages className="w-4 h-4 text-jungle" />
            <span className="hidden sm:inline-block">{currentLanguage.flag}</span>
            <span className="hidden md:inline-block text-foreground">{currentLanguage.name}</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align={isRTL ? "start" : "end"}
          className="w-48 z-[110]"
          sideOffset={5}
          onCloseAutoFocus={(e) => e.preventDefault()}
          onEscapeKeyDown={() => setIsOpen(false)}
        >
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onSelect={(e) => {
                e.preventDefault();
                handleLanguageChange(language.code);
              }}
              className="flex items-center gap-3 cursor-pointer focus:bg-jungle/10 hover:bg-jungle/10 active:bg-jungle/15"
            >
              <span className="text-xl pointer-events-none">{language.flag}</span>
              <span className="flex-1 pointer-events-none">{language.name}</span>
              {i18n.language === language.code && (
                <Check className="w-4 h-4 text-jungle-yellow pointer-events-none" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

