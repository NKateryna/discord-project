import styles from './index.module.css';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { MoreIcon } from '../../icons';
import Tooltip from '../../Tooltip';
import Popper from '@mui/material/Popper';

const useStyles = makeStyles(() => ({
  popper: {
    zIndex: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px',
    backgroundColor: 'var(--gray-9)',
    width: '188px',
  },
}));

export function More() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const moreEl = useRef(null);

  const popperModifiers = {
    name: 'offset',
    options: {
      offset: [25, -10],
    },
  };

  const onClickMore = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'more-popper' : undefined;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreEl.current && !moreEl.current.contains(event.target)) {
        setAnchorEl(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorEl]);

  return (
    <>
      <div
        aria-describedby={id}
        onClick={onClickMore}
        ref={moreEl}
        className={styles.background}
      >
        <Tooltip title="More" placement="top">
          <div className={styles.icon}>
            <MoreIcon />
          </div>
        </Tooltip>
      </div>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        disablePortal={false}
        placement="right-start"
        className={classes.popper}
        modifiers={popperModifiers}
      >
        <div
          onClick={null}
          className={classNames(styles.popperButton, styles.popperButtonBlue)}
        >
          Start Video call
        </div>
        <div
          onClick={null}
          className={classNames(styles.popperButton, styles.popperButtonBlue)}
        >
          Start Voice call
        </div>
        <div
          onClick={null}
          className={classNames(styles.popperButton, styles.popperButtonRed)}
        >
          Remove Friend
        </div>
      </Popper>
    </>
  );
}

export default More;
