import { createTheme } from '@mui/material/styles';

const academicTheme = createTheme({
  palette: {
    primary: {
      main: '#8D6E63',        // Warm medium brown
      light: '#BCAAA4',       // Light brown for accents
      dark: '#5D4037',        // Dark brown for headers
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#6D4C41',        // Rich brown
      light: '#A1887F',       // Light brown for text
      dark: '#3E2723',        // Deep brown for emphasis
      contrastText: '#FFFFFF'
    },
    background: {
      default: '#FFF8E1',     // Very light cream/beige background
      paper: '#FFFDE7',       // Warm white for cards
    },
    text: {
      primary: '#3E2723',     // Dark brown text for readability
      secondary: '#6D4C41',   // Medium brown for secondary text
    },
    success: {
      main: '#689F38',        // Earthy green for achievements
    },
    warning: {
      main: '#FF8F00',        // Warm amber for highlights
    },
    error: {
      main: '#D84315',        // Warm red-brown for errors
    }
  },
  typography: {
    fontFamily: '"Roboto", "Georgia", "Times New Roman", serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '-0.01562em',
      color: '#5D4037'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 400,
      lineHeight: 1.3,
      color: '#6D4C41'
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#6D4C41'
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#6D4C41'
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#6D4C41'
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#6D4C41'
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#3E2723'
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#6D4C41'
    },
    caption: {
      fontSize: '0.875rem',
      color: '#6D4C41',
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
          boxShadow: '0 2px 8px rgba(93, 64, 55, 0.15)',
          borderRadius: 8,
          border: '1px solid #D7CCC8'
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
          boxShadow: '0 2px 4px rgba(93, 64, 55, 0.15)'
        }
      }
    }
  }
});

export default academicTheme;
