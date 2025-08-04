import { createContext } from 'react';

// Theme configuration interface
interface ThemeConfig {
  name: string;
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    background: {
      default: string;
      paper: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    success: {
      main: string;
    };
    warning: {
      main: string;
    };
    error: {
      main: string;
    };
  };
}

// Theme configurations based on Tailwind CSS color system
export const themes: Record<string, ThemeConfig> = {
  brown: {
    name: 'Warm Brown',
    palette: {
      primary: {
        main: '#a16207',        // yellow-700
        light: '#fef3c7',       // yellow-100
        dark: '#78350f',        // yellow-900
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#92400e',        // amber-700
        light: '#fef7cd',       // amber-50
        dark: '#451a03',        // amber-900
        contrastText: '#ffffff'
      },
      background: {
        default: '#fffbeb',     // amber-50
        paper: '#ffffff',       // white
      },
      text: {
        primary: '#451a03',     // amber-900
        secondary: '#78350f',   // yellow-900
      },
      success: {
        main: '#16a34a',        // green-600
      },
      warning: {
        main: '#ea580c',        // orange-600
      },
      error: {
        main: '#dc2626',        // red-600
      }
    }
  },
  blue: {
    name: 'Ocean Blue',
    palette: {
      primary: {
        main: '#1e40af',        // blue-700
        light: '#dbeafe',       // blue-100
        dark: '#1e3a8a',        // blue-800
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#0369a1',        // sky-700
        light: '#e0f2fe',       // sky-50
        dark: '#0c4a6e',        // sky-900
        contrastText: '#ffffff'
      },
      background: {
        default: '#f0f9ff',     // sky-50
        paper: '#ffffff',       // white
      },
      text: {
        primary: '#0c4a6e',     // sky-900
        secondary: '#1e3a8a',   // blue-800
      },
      success: {
        main: '#16a34a',        // green-600
      },
      warning: {
        main: '#ea580c',        // orange-600
      },
      error: {
        main: '#dc2626',        // red-600
      }
    }
  },
  green: {
    name: 'Forest Green',
    palette: {
      primary: {
        main: '#15803d',        // green-700
        light: '#dcfce7',       // green-100
        dark: '#14532d',        // green-900
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#166534',        // green-800
        light: '#f0fdf4',       // green-50
        dark: '#052e16',        // green-950
        contrastText: '#ffffff'
      },
      background: {
        default: '#f0fdf4',     // green-50
        paper: '#ffffff',       // white
      },
      text: {
        primary: '#14532d',     // green-900
        secondary: '#166534',   // green-800
      },
      success: {
        main: '#16a34a',        // green-600
      },
      warning: {
        main: '#ea580c',        // orange-600
      },
      error: {
        main: '#dc2626',        // red-600
      }
    }
  },
  purple: {
    name: 'Royal Purple',
    palette: {
      primary: {
        main: '#7c3aed',        // violet-600
        light: '#ede9fe',       // violet-100
        dark: '#581c87',        // violet-900
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#6d28d9',        // violet-700
        light: '#f5f3ff',       // violet-50
        dark: '#4c1d95',        // violet-800
        contrastText: '#ffffff'
      },
      background: {
        default: '#faf5ff',     // purple-50
        paper: '#ffffff',       // white
      },
      text: {
        primary: '#581c87',     // violet-900
        secondary: '#6d28d9',   // violet-700
      },
      success: {
        main: '#16a34a',        // green-600
      },
      warning: {
        main: '#ea580c',        // orange-600
      },
      error: {
        main: '#dc2626',        // red-600
      }
    }
  }
};

interface ThemeContextType {
  currentTheme: string;
  setTheme: (theme: string) => void;
  availableThemes: typeof themes;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export type { ThemeConfig, ThemeContextType };
