import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    default: '#f8f9fa',
    common: {
      white: '#ffffff',
      black: '#000',
    },
    primary: {
      contrastText: '#fff',
      main: '#e67700',
      light: '#FAB005',
    },
    secondary: {
      contrastText: '#fff',
      main: '#dee2e6',
      light: '#343a40',
    },
    background: {
      light: '#fff9db',
      main: '#F1F3F5',
    },
    naver: '#04d404',
    kakao: '#ffe812',
    google: '#fff',
    link: '#4780CE',
    shadow: {
      button:
        'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px',
      channelButton: '0px 2px 19px rgba(230, 119, 0, 0.4)',
      slide: '10px 2px 20px rgba(0, 0, 0, 0.1)',
    },
  },
  typography: {
    pxToRem: value => `${value / 16}rem`,
    fontFamily: ['Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'].join(','),
    h1: {
      color: '#e67700',
      fontSize: '1.3rem',
      fontWeight: 700,
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        position: 'relative',
        height: '50px',
      },
      colorPrimary: {
        'background-color': '#f8f9fa',
        'border-bottom': '1px solid #dee2e6',
        flex: 0,
      },
    },
    MuiToolbar: {
      root: {
        height: '50px',
      },
      regular: {
        'min-height': '50px !important',
      },
    },
    MuiButton: {
      contained: {
        'background-color': '#FFFFFF',
        'box-shadow': '0px 2px 9px rgba(0, 0, 0, 0.03)',
        'border-radius': '3px',
        padding: '4px 10px',
        '&:hover': {
          'background-color': '#f8f9fa',
          'box-shadow': '0px 2px 6px rgba(0, 0, 0, 0.2)',
        },
      },
      containedPrimary: {
        'background-color': '#e67700',
        'box-shadow': '0px 2px 9px rgba(0, 0, 0, 0.03)',
        '&:hover': {
          'background-color': '#e67700',
          'box-shadow': '0px 2px 9px rgba(0, 0, 0, 0.03)',
        },
      },
      containedSecondary: {
        'background-color': '#ADB5BD',
        '&:hover': {
          'background-color': '#868E96',
        },
      },
    },
    MuiSwitch: {
      colorPrimary: {
        color: '#fff !important',
      },
      root: {
        width: 40,
        height: 24,
        padding: 0,
        display: 'flex',
      },
      switchBase: {
        padding: 4,
        color: '#fff',
        '&$checked': {
          transform: 'translateX(15px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            backgroundColor: '#f8f9fa',
          },
        },
      },
      thumb: {
        width: 16,
        height: 16,
        boxShadow: 'none',
      },
      track: {
        borderRadius: 12,
        opacity: 1,
        backgroundColor: '#868e96',
      },
      checked: {},
    },
  },
});
