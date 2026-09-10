/**
 * Theme preference. Default for a first-time visitor is LIGHT — "system" is an
 * explicit opt-in, not the fallback.
 */

import { analytics } from '../lib/analytics';

export const THEME_KEY = 'cro_txet_theme';
export const THEME_CHANGE_EVENT = 'cro-txet:theme';

export type ThemeChoice = 'light' | 'dark' | 'system';

const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)');

export const getThemeChoice = (): ThemeChoice => {
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === 'dark' || v === 'system' ? v : 'light';
  } catch {
    return 'light';
  }
};

/** The theme actually showing right now (resolves "system"). */
export const getActiveTheme = (): 'light' | 'dark' => {
  const choice = getThemeChoice();
  if (choice === 'system') return prefersDark().matches ? 'dark' : 'light';
  return choice;
};

/** Paint the resolved theme onto <html> and the theme-color meta. */
const paint = (choice: ThemeChoice) => {
  const dark = choice === 'dark' || (choice === 'system' && prefersDark().matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? '#171717' : '#FDFCFB');
};

export const applyThemeChoice = (choice: ThemeChoice) => {
  try { localStorage.setItem(THEME_KEY, choice); } catch { /* private mode */ }
  paint(choice);
  analytics.themeChange(choice, getActiveTheme());
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
};

let mediaBound = false;

/** Call once on boot: repaint from the stored choice and follow the OS while on "system". */
export const initTheme = () => {
  paint(getThemeChoice());
  if (!mediaBound) {
    mediaBound = true;
    prefersDark().addEventListener('change', () => {
      if (getThemeChoice() === 'system') {
        paint('system');
        window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
      }
    });
  }
};
