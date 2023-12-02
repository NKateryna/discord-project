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
    marginBottom: '24px',
  },
  inputAddFriendPage: {
    height: '50px',
    borderRadius: '8px',
    marginBottom: '21px',
    '&:focus-within': {
      width: '100%',
      outline: '1px solid var(--blue-1)',
      boxSizing: 'border-box',
    },
  },
  searchIcon: {
    width: '18px',
    height: '18px',
    fill: 'var(--gray-3)',
  },
  searchAddSuccess: {
    marginBottom: '8px',
    '&:focus-within': {
      outline: '1px solid var(--green-4)',
    },
  },
  searchAddError: {
    marginBottom: '8px',
    '&:focus-within': {
      width: '100%',
      outline: '1px solid var(--red-1)',
      boxSizing: 'border-box',
    },
  },
  searchAddHelpText: {
    marginBottom: '21px',
    fontSize: '14px',
    fontFamily: 'Whitney',
    fontStyle: 'normal',
    fontWeight: '325',
    lineHeight: 'normal',
  },
  searchAddHelpTextSuccess: {
    color: 'var(--green-4)',
  },
  searchAddSuccessFriendName: {
    fontWeight: '400',
  },
  searchAddHelpTextError: {
    color: 'var(--red-1)',
  },
};

export const adornment = { margin: '0px 9px' };
