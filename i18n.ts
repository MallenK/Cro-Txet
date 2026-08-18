import { Language } from './types';

export const SUPPORTED_URL_LANGS = ['ca', 'es', 'en'] as const;
export type UrlLang = typeof SUPPORTED_URL_LANGS[number];

export const DEFAULT_URL_LANG: UrlLang = 'ca';

export const URL_TO_LANG: Record<UrlLang, Language> = {
  ca: 'CAT',
  es: 'ES',
  en: 'EN',
};

export const LANG_TO_URL: Record<Language, UrlLang> = {
  CAT: 'ca',
  ES: 'es',
  EN: 'en',
};

export const isSupportedUrlLang = (value: string | undefined): value is UrlLang =>
  !!value && (SUPPORTED_URL_LANGS as readonly string[]).includes(value);
