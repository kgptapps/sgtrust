// Google Analytics utility functions

// Google Analytics types
type GtagCommand = 'config' | 'event' | 'js' | 'set';
type GtagConfigParams = {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  custom_map?: Record<string, string>;
};
type GtagEventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  custom_parameter?: string;
};

declare global {
  interface Window {
    gtag: (command: GtagCommand, targetId: string | Date, params?: GtagConfigParams | GtagEventParams) => void;
    dataLayer: unknown[];
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

// Track navigation clicks with descriptive names
export const trackNavigation = (destination: string) => {
  const navigationNames: { [key: string]: string } = {
    '/': 'Homepage',
    '/about': 'About Professor Life',
    '/timeline': 'Life Timeline',
    '/students': 'Community Impact',
    '/gallery': 'Photo Gallery',
    '/achievements': 'Achievements & Awards',
    '/accountability': 'Financial Transparency',
    '/contact': 'Contact & Legacy'
  };

  const friendlyName = navigationNames[destination] || destination;
  trackEvent('page_navigation', 'website_navigation', friendlyName);
};

// Track button clicks with descriptive names
export const trackButtonClick = (buttonName: string, section: string) => {
  trackEvent('button_click', section, buttonName);
};

// Track hero section interactions
export const trackHeroInteraction = (action: string) => {
  const heroActions: { [key: string]: string } = {
    'explore_legacy': 'Explore His Legacy Button',
    'scroll_to_explore': 'Scroll to Explore Section'
  };

  const friendlyAction = heroActions[action] || action;
  trackEvent('hero_interaction', 'homepage_hero', friendlyAction);
};

// Track memorial ceremony interactions
export const trackMemorialCeremonyInteraction = (action: string) => {
  const memorialActions: { [key: string]: string } = {
    'statue_image_hover': 'Memorial Statue Image Hover',
    'statue_image_click': 'Memorial Statue Image Click',
    'ceremony_details_view': 'Ceremony Details Viewed',
    'location_map_click': 'Google Maps Location Clicked'
  };

  const friendlyAction = memorialActions[action] || action;
  trackEvent('memorial_ceremony', 'statue_ceremony', friendlyAction);
};

// Track explore journey section clicks
export const trackExploreJourneyClick = (destination: string) => {
  const journeyDestinations: { [key: string]: string } = {
    '/about': 'About His Life Journey',
    '/students': 'Community Impact Stories',
    '/achievements': 'Achievements & Recognition',
    '/timeline': 'Life Timeline Events'
  };

  const friendlyName = journeyDestinations[destination] || destination;
  trackEvent('explore_journey', 'homepage_navigation', friendlyName);
};

// Track theme selector interactions
export const trackThemeInteraction = (action: string, themeName?: string) => {
  const themeActions: { [key: string]: string } = {
    'theme_menu_open': 'Theme Selector Menu Opened',
    'theme_changed': `Theme Changed to ${themeName}`,
    'theme_preview_hover': `Theme Preview Hovered: ${themeName}`
  };

  const friendlyAction = themeActions[action] || `${action}: ${themeName}`;
  trackEvent('theme_customization', 'user_preferences', friendlyAction);
};

// Track language toggle
export const trackLanguageToggle = (newLanguage: string) => {
  const languageNames: { [key: string]: string } = {
    'en': 'English',
    'ta': 'Tamil'
  };

  const friendlyLanguage = languageNames[newLanguage] || newLanguage;
  trackEvent('language_change', 'user_preferences', `Switched to ${friendlyLanguage}`);
};

// Track mobile menu interactions
export const trackMobileMenuInteraction = (action: string) => {
  const mobileActions: { [key: string]: string } = {
    'menu_open': 'Mobile Menu Opened',
    'menu_close': 'Mobile Menu Closed',
    'menu_navigation': 'Mobile Menu Navigation Used'
  };

  const friendlyAction = mobileActions[action] || action;
  trackEvent('mobile_navigation', 'mobile_experience', friendlyAction);
};

// Track search and filter usage (for students page)
export const trackStudentPageInteraction = (action: string, details?: string) => {
  const studentActions: { [key: string]: string } = {
    'search_used': 'Student Search Used',
    'filter_applied': `Filter Applied: ${details}`,
    'tab_switched': `Tab Switched: ${details}`,
    'advanced_filters_opened': 'Advanced Filters Opened',
    'filters_cleared': 'All Filters Cleared'
  };

  const friendlyAction = studentActions[action] || `${action}: ${details}`;
  trackEvent('student_directory', 'community_impact', friendlyAction);
};
