/** Shared cookie-consent helpers (storage + Google Consent Mode wiring). */

export const CONSENT_KEY = 'cro_txet_consent';
export const OPEN_CONSENT_EVENT = 'cro-txet:open-consent';

export interface ConsentValue {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
}

export const readConsent = (): ConsentValue | null => {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw);
    if (typeof v !== 'object' || v === null) return null;
    return { necessary: true, analytics: !!v.analytics, marketing: !!v.marketing, ts: v.ts || 0 };
  } catch {
    return null;
  }
};

export const applyConsent = (v: ConsentValue) => {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(v));
  } catch { /* private mode */ }

  const grant = (b: boolean) => (b ? 'granted' : 'denied');
  window.gtag?.('consent', 'update', {
    analytics_storage: grant(v.analytics),
    ad_storage: grant(v.marketing),
    ad_user_data: grant(v.marketing),
    ad_personalization: grant(v.marketing),
  });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    consent_analytics: v.analytics,
    consent_marketing: v.marketing,
  });
};

export const openConsentSettings = () =>
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
