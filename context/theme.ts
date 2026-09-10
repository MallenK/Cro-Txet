/** Theme preference: 'light' | 'dark' | null (follow the OS). */

export const THEME_KEY = 'cro_txet_theme';
export const THEME_CHANGE_EVENT = 'cro-txet:theme';

export type ThemeChoice = 'light' | 'dark' | null;

export const getThemeChoice = (): ThemeChoice => {
  try {
    const v = localStorage.getItem(THEME_KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
};

/** The theme actually showing right now (resolves "system"). */
export const getActiveTheme = (): 'light' | 'dark' => {
  const choice = getThemeChoice();
  if (choice) return choice;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const applyThemeChoice = (choice: ThemeChoice) => {
  const root = document.documentElement;
  if (choice) {
    root.dataset.theme = choice;
    try { localStorage.setItem(THEME_KEY, choice); } catch { /* private mode */ }
  } else {
    delete root.dataset.theme;
    try { localStorage.removeItem(THEME_KEY); } catch { /* private mode */ }
  }
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
};

/** light -> dark -> system -> light … */
export const cycleTheme = (): ThemeChoice => {
  const current = getThemeChoice();
  const next: ThemeChoice = current === null ? 'light' : current === 'light' ? 'dark' : null;
  applyThemeChoice(next);
  return next;
};
