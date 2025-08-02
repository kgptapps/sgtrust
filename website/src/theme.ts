import { createTheme } from '@mui/material/styles';

const academicTheme = createTheme({
  palette: {
    primary: {
      main: '#1565C0',        // Deep academic blue
      light: '#5E92F3',       // Light blue for accents
      dark: '#0D47A1',        // Dark blue for headers
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#37474F',        // Professional gray
      light: '#62727B',       // Light gray for text
      dark: '#263238',        // Dark gray for emphasis
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#FAFAFA',     // Clean white background
      paper: '#FFFFFF',       // Pure white for cards
    },
    text: {
      primary: '#212121',     // Dark text for readability
      secondary: '#757575',   // Medium gray for secondary text
    },
    success: {
      main: '#2E7D32',        // Academic green for achievements
    },
    warning: {
      main: '#F57C00',        // Academic orange for highlights
    }
  },
  typography: {
    fontFamily: '"Roboto", "Georgia", "Times New Roman", serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
      color: '#1565C0'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.3,
      color: '#37474F'
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#37474F'
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#37474F'
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#37474F'
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#37474F'
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#212121'
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#757575'
    },
    caption: {
      fontSize: '0.875rem',
      color: '#757575',
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
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: 8,
          border: '1px solid #E0E0E0'
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
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }
      }
    }
  }
});

export default academicTheme;
