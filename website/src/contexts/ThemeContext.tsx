import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeContext, themes, type ThemeConfig } from './ThemeContextDefinition';



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

  const createMuiTheme = (themeConfig: ThemeConfig) => {
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
