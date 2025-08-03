// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XYRXXBNKGD', {
      page_path: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track theme changes
export const trackThemeChange = (themeName: string) => {
  trackEvent('theme_change', 'user_preference', themeName);
};

// Track language changes
export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', 'user_preference', language);
};

// Track memorial statue image interactions
export const trackMemorialInteraction = (action: string) => {
  trackEvent(action, 'memorial_statue', 'statue_image');
};

// Track navigation clicks
export const trackNavigation = (destination: string) => {
  trackEvent('navigation_click', 'user_navigation', destination);
};
