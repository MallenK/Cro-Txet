import React, { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ThemeChoice, applyThemeChoice, getThemeChoice, THEME_CHANGE_EVENT } from '../context/theme';

const ThemeToggle: React.FC = () => {
  const { t } = useLanguage();
  const [choice, setChoice] = useState<ThemeChoice>('light');

  useEffect(() => {
    setChoice(getThemeChoice());
    const sync = () => setChoice(getThemeChoice());
    window.addEventListener(THEME_CHANGE_EVENT, sync);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, sync);
  }, []);

  const options: { value: ThemeChoice; label: string; icon: React.ReactNode }[] = [
    { value: 'light', label: t.theme.light, icon: <Sun className="w-3.5 h-3.5" /> },
    { value: 'dark', label: t.theme.dark, icon: <Moon className="w-3.5 h-3.5" /> },
    { value: 'system', label: t.theme.system, icon: <Monitor className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="flex flex-col gap-5">
      <span className="text-[10px] uppercase tracking-[0.5em] text-stone-900 font-bold">{t.a11y.theme}</span>
      <div role="group" aria-label={t.a11y.theme} className="flex gap-x-6 gap-y-4 flex-wrap text-[11px] lg:text-[10px] font-bold">
        {options.map(o => {
          const active = choice === o.value;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={active}
              onClick={() => applyThemeChoice(o.value)}
              className={`flex items-center gap-2 tracking-widest py-1 transition-all ${
                active ? 'text-stone-950 border-b-2 border-stone-950' : 'text-stone-400 hover:text-stone-700'
              }`}
            >
              {o.icon}
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeToggle;
