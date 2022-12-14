import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Whitney`,`ABC Ginto Normal`, `ABC Ginto Nord`, `Noto Sans',
    ].join(','),
  },
  palette: {
    primary: {
      light: 'var(---gray-5)',
      main: '#5865F2',
      dark: 'var(---gray-4)',
      contrastText: 'var(--white)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '16px',
          fontFamily: 'Whitney',
          padding: '0px',
          boxSizing: 'border-box',
          '&:hover': {
            border: 'none',
          },
        },
        contained: {
          /*default /contained,large*/
          '&.MuiButton-containedPrimary': {
            fontFamily: 'Noto Sans',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '22px',
            background: 'var(--brend-color)',
            height: '44px',
            color: 'var(--white)',
            borderRadius: '3px',
            width: '100%',
            '&:hover': {
              background: 'var(--brend-color-hover)',
            },
            '&:active': {
              background: 'var(--brend-color-active)',
            },
            '&.Mui-disabled': {
              background: 'var(--brend-color)',
              opacity: '0.5',
              color: 'var(--white)',
            },
          },
          /*delete a friend /contained,warning */
          '&.MuiButton-containedWarning': {
            backgroundColor: 'var(--red-1)',
            '&:hover': {},
            '&:active': {},
            '&.Mui-disabled': {},
          },
        },
        outlined: {
          border: 'none',
          /**delete a friend, transparent /outlined,Inherit*/
          '&.MuiButton-outlinedInherit': {
            fontFamily: 'Whitney',
            color: 'var(--white-2)',
            '&:hover': {
              color: 'var(--white-2)',
              textDecoration: 'underline',
            },
          },
          /*more-menu /outlined,primary*/
          '&.MuiButton-outlinedPrimary': {
            fontFamily: 'Whitney',
            justifyContent: 'flex-start',
            padding: '8px',
            borderRadius: '2px',
            fontSize: '14px',
            lineHeight: '16.8px',
            fontWeight: '350',
            lineHeight: '17px',
            color: 'var(--white)',
            '&:hover': {
              backgroundColor: 'var(--brend-color-hover)',
              color: 'var(--white)',
            },
          },
          /*more-menu /outlined,warning*/
          '&.MuiButton-outlinedWarning': {
            fontFamily: 'Whitney',
            justifyContent: 'flex-start',
            padding: '8px',
            borderRadius: '2px',
            fontSize: '14px',
            lineHeight: '16.8px',
            fontWeight: '350',
            lineHeight: '17px',
            color: 'var(--red-1)',
            '&:hover': {
              backgroundColor: 'var(--red-1)',
              color: 'var(--white)',
            },
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxSizing: 'border-box',
          backgroundColor: 'var(---gray-4)',
          color: 'var(---gray-3)',
          border: '0',
          width: '100%',
        },
        /* ApplicationLogin input*/
        sizeSmall: {
          height: '40px',
          padding: '10px',
          borderRadius: '3px',
          fontFamily: 'Noto Sans',
          fontSize: '16px',
          fontWeight: '400',
          marginBottom: '20px',
          '&.Mui-focused': {},
        },
        /* Search input*/
        inputTypeSearch: {},
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: 'Noto Sans',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '19px',
          letterSpacing: '-0.06em',
          color: 'var(--blue-1)',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '0',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: '0px',
          marginRight: '0px',
          fontFamily: 'Noto Sans',
          fontStyle: 'normal',
          fontWeight: '400',
          letterSpacing: '-0.06em',
          color: 'var(---gray-7)',
          '& .MuiFormControlLabel-label': {
            fontSize: '12px',
            lineHeight: '16px',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(---gray-4)',
          height: 40,
          width: 125,
          padding: '0 10px',
        },
        select: {
          padding: 0,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          color: 'var(---gray-3)',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          '&.MuiMenu-list': {
            backgroundColor: 'var(---gray-2)',
            padding: '0',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          border: 'none',
          alignItems: 'center',
          display: 'flex',
          padding: '9px 0 9px 10px',
          overflow: 'hidden',
          boxSizing: 'border-box',
          color: 'var(---gray-3)',
          '&:hover': {
            backgroundColor: 'var(---gray-4)',
          },
          '&.Mui-selected': {
            backgroundColor: 'var(---gray-2)',
            '&:hover': {
              backgroundColor: 'var(---gray-4)',
            },
          },
        },
      },
    },
    /* display some content on top of another */
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiMenu-paper': {
            borderRadius: '0px',
          },
        },
      },
    },
  },
});

export default theme;
