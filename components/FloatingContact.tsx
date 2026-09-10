import React from 'react';
import { Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Floating "chat" affordance. Cro&Txet has no phone/WhatsApp, so this opens
 * Instagram DMs — the channel the studio actually uses.
 */
const FloatingContact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <a
      href="https://ig.me/m/cro_and_txet"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.a11y.chat}
      className="hidden sm:flex fixed right-5 bottom-6 lg:bottom-20 z-[90] w-14 h-14 rounded-full bg-stone-950 text-white shadow-xl items-center justify-center hover:scale-105 active:scale-95 transition-transform"
    >
      <Instagram className="w-6 h-6" strokeWidth={1.5} />
    </a>
  );
};

export default FloatingContact;
