import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// Theme configurations based on Tailwind CSS color system
const themes = {
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
        main: '#1d4ed8',        // blue-700
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
        dark: '#581c87',        // violet-800
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#9333ea',        // purple-600
        light: '#faf5ff',       // purple-50
        dark: '#581c87',        // purple-800
        contrastText: '#ffffff'
      },
      background: {
        default: '#faf5ff',     // purple-50
        paper: '#ffffff',       // white
      },
      text: {
        primary: '#581c87',     // purple-800
        secondary: '#7c3aed',   // violet-600
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
  slate: {
    name: 'Modern Slate',
    palette: {
      primary: {
        main: '#475569',        // slate-600
        light: '#f1f5f9',       // slate-100
        dark: '#1e293b',        // slate-800
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#64748b',        // slate-500
        light: '#f8fafc',       // slate-50
        dark: '#0f172a',        // slate-900
        contrastText: '#ffffff'
      },
      background: {
        default: '#f8fafc',     // slate-50
        paper: '#ffffff',       // white
      },
      text: {
        primary: '#0f172a',     // slate-900
        secondary: '#334155',   // slate-700
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

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('brown');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('sgtrust-theme');
    if (savedTheme && themes[savedTheme as keyof typeof themes]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const setTheme = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('sgtrust-theme', theme);
  };

  const createMuiTheme = (themeConfig: any) => {
    return createTheme({
      palette: themeConfig.palette,
      typography: {
        fontFamily: '"Roboto", "Georgia", "Times New Roman", serif',
        h1: {
          fontSize: '2.5rem',
          fontWeight: 400,
          lineHeight: 1.2,
          letterSpacing: '-0.01562em',
          color: themeConfig.palette.primary.dark
        },
        h2: {
          fontSize: '2rem',
          fontWeight: 400,
          lineHeight: 1.3,
          color: themeConfig.palette.secondary.main
        },
        h3: {
          fontSize: '1.5rem',
          fontWeight: 500,
          lineHeight: 1.4,
          color: themeConfig.palette.secondary.main
        },
        h4: {
          fontSize: '1.25rem',
          fontWeight: 500,
          lineHeight: 1.4,
          color: themeConfig.palette.secondary.main
        },
        h5: {
          fontSize: '1.125rem',
          fontWeight: 500,
          lineHeight: 1.4,
          color: themeConfig.palette.secondary.main
        },
        h6: {
          fontSize: '1rem',
          fontWeight: 500,
          lineHeight: 1.4,
          color: themeConfig.palette.secondary.main
        },
        body1: {
          fontSize: '1rem',
          lineHeight: 1.6,
          color: themeConfig.palette.text.primary
        },
        body2: {
          fontSize: '0.875rem',
          lineHeight: 1.6,
          color: themeConfig.palette.text.secondary
        },
        caption: {
          fontSize: '0.875rem',
          color: themeConfig.palette.text.secondary,
          fontStyle: 'italic'
        }
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
        },
      },
      components: {
        MuiCard: {
          styleOverrides: {
            root: {
              boxShadow: `0 2px 8px ${themeConfig.palette.primary.main}33`,
              borderRadius: 8,
              border: `1px solid ${themeConfig.palette.primary.light}66`
            }
          }
        },
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'none',
              borderRadius: 6,
              fontWeight: 500
            }
          }
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              boxShadow: `0 2px 4px ${themeConfig.palette.primary.main}33`
            }
          }
        }
      }
    });
  };

  const muiTheme = createMuiTheme(themes[currentTheme as keyof typeof themes]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, availableThemes: themes }}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
