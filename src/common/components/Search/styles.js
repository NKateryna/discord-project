export const stylesMUI = {
  buttonStyle: {
    width: '153px',
    height: '32px',
    margin: '9px 13px',
    fontFamily: 'Whitney',
    fontStyle: 'normal',
    fontWeight: '350',
    fontSize: '14px',
    lineheight: '17px',
    color: 'var(--white)',
    background: 'var(--brend-color)',
    '&:hover': {
      backgroundColor: 'var(--brend-color-hover)',
      color: 'var(--white)',
    },
    '&.Mui-disabled': {
      background: 'var(--brend-color)',
      opacity: '0.5',
      color: 'var(--white)',
    },
  },
  inputDefault: {
    borderRadius: '8px',
  },
  inputaddFriendPage: {
    height: '50px',
    borderRadius: '8px',

    '&:focus-within': {
      width: '100%',
      outline: '1px solid var(--blue-1)',
      boxSizing: 'border-box',
    },
  },
};

export const adornment = { margin: '0px 9px' };
