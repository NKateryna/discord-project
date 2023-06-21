import styles from './index.module.css';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles({
  buttonStyle: {
    width: '147px',
    height: '38px',
    margin: '9px 13px',
    fontFamily: 'Whitney',
    fontStyle: 'normal',
    fontWeight: '350',
    fontSize: '14px',
    lineheight: '17px',
    color: 'var(--white)',
    background: 'var(--brend-color)',
    borderRadius: '3px',
    marginTop: '39px',
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
});

function FriendsEmpty({ emptyIcon, text, buttonText, onClick }) {
  const classes = useStyles();

  return (
    <div className={styles.background}>
      {emptyIcon}
      <div className={styles.text}>{text}</div>
      {buttonText ? (
        <Button
          onClick={onClick}
          className={classes.buttonStyle}
          disableRipple={true}
        >
          {buttonText}
        </Button>
      ) : null}
    </div>
  );
}

export default FriendsEmpty;
