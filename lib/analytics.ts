/**
 * Single entry point for everything the frontend sends to `dataLayer`.
 * GTM maps these to GA4 (see docs/GTM-GA4-SETUP.md). Event names follow GA4
 * recommended events where one exists (`view_item`, `view_item_list`,
 * `select_item`, `select_content`, `share`, `generate_lead`, `page_view`…).
 */

import type { Product } from '../types';

type Params = Record<string, unknown>;

export interface EcommerceItem {
  item_id: string;
  item_name: string;
  price: number;
  item_brand: string;
  item_category: string;
  item_variant?: string;
  index?: number;
}

export const productItem = (p: Product, extra: Partial<EcommerceItem> = {}): EcommerceItem => ({
  item_id: p.id,
  item_name: p.name,
  price: p.price,
  item_brand: 'Cro&Txet',
  item_category: 'Bosses de crochet',
  ...extra,
});

const push = (event: string, params: Params = {}) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  // Clear the previous ecommerce object so stale items don't leak between events.
  if ('ecommerce' in params) window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({ event, ...params });
};

const domainOf = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
};

export const analytics = {
  pageView: (p: { path: string; title: string; language: string; contentGroup: string }) =>
    push('page_view', {
      page_path: p.path,
      page_title: p.title,
      page_location: typeof window !== 'undefined' ? window.location.href : p.path,
      content_language: p.language,
      content_group: p.contentGroup,
    }),

  viewItem: (item: EcommerceItem) =>
    push('view_item', { ecommerce: { currency: 'EUR', value: item.price, items: [item] } }),

  viewItemList: (listName: string, items: EcommerceItem[]) =>
    push('view_item_list', { ecommerce: { item_list_name: listName, items } }),

  selectItem: (listName: string, item: EcommerceItem) =>
    push('select_item', { ecommerce: { item_list_name: listName, items: [item] } }),

  selectContent: (contentType: string, params: Params = {}) =>
    push('select_content', { content_type: contentType, ...params }),

  formStart: (formType: string, params: Params = {}) =>
    push('form_start', { form_type: formType, ...params }),

  generateLead: (formType: string, params: Params = {}) =>
    push('generate_lead', { form_type: formType, ...params }),

  newsletterSignup: (location: string) =>
    push('newsletter_signup', { signup_location: location }),

  leadThankYouView: () => push('lead_thank_you_view'),

  share: (params: { method?: string; content_type: string; item_id?: string }) =>
    push('share', { method: 'web_share', ...params }),

  ctaClick: (params: { cta_text: string; cta_location: string; cta_destination?: string }) =>
    push('cta_click', params),

  outboundClick: (url: string, context: string) =>
    push('outbound_click', { link_url: url, link_domain: domainOf(url), link_context: context }),

  faqToggle: (question: string) => push('faq_toggle', { faq_question: question }),

  languageChange: (previous: string, next: string) =>
    push('language_change', { previous_language: previous, new_language: next }),

  consentUpdate: (analyticsGranted: boolean, marketingGranted: boolean) =>
    push('consent_update', { consent_analytics: analyticsGranted, consent_marketing: marketingGranted }),

  themeChange: (choice: string, resolved: string) =>
    push('theme_change', { theme_choice: choice, theme_resolved: resolved }),
};
