import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC',
      light: '#D4BBFF',
      dark: '#985EFF',
    },
    secondary: {
      main: '#03DAC6',
      light: '#66FFF8',
      dark: '#00A896',
    },
    background: {
  default: '#121212',
  paper: 'rgba(230, 230, 235, 0.85)'
}
,
    error: {
      main: '#CF6679',
    },
    text: {
      primary: '#E1E1E1',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#B0B0B0',
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          overflow: 'hidden',
          transition: '0.3s',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 30px rgba(0,0,0,0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
          background: 'rgba(30, 30, 46, 0.95)',
          backdropFilter: 'blur(8px)',
        },
      },
    },
  },
});

export default theme;