import styles from './index.module.css';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { LogoIcon } from '../icons';
import Tooltip from '../Tooltip';
import { Backdrop } from '@mui/material';
import Popper from '@mui/material/Popper';
import { Button } from '@mui/base';
import { leavingServer } from '../../../redux/servers/actions';

function SidebarItem({
  id,
  name,
  photo,
  icon,
  onClick,
  active,
  notifications,
  green,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const location = useLocation();

  const [fallbackPhoto, setFallbackPhoto] = useState(false);
  const moreEl = useRef(null);
  const [open, setOpen] = useState(false);

  const styleLogo = {
    width: '30px',
    height: '30px',
    fill: 'var(--white-2)',
  };

  const popperModifiers = {
    name: 'offset',
    options: {
      offset: [0, -5],
    },
  };

  const onContextMenu = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const onClickLeaveServer = (id) => {
    return () =>
      dispatch(leavingServer(navigate, cookies, location.pathname, id));
  };

  return (
    <div
      className={classNames(
        styles.box,
        { [styles.itemActive]: active },
        { [styles.itemNotifications]: notifications }
      )}
      key={id}
      ref={moreEl}
      onContextMenu={onContextMenu}
    >
      <Tooltip title={name} placement="right">
        <div
          onClick={onClick}
          className={classNames(styles.photoBcg, { [styles.green]: green })}
        >
          {icon ? (
            <div className={styles.icon}>{icon}</div>
          ) : photo && !fallbackPhoto ? (
            <img
              src={photo}
              className={styles.photo}
              alt={name}
              onError={() => setFallbackPhoto(true)}
            />
          ) : (
            <LogoIcon style={styleLogo} />
          )}
        </div>
      </Tooltip>
      <div className={styles.pill}></div>
      {photo ? (
        <>
          <Backdrop
            open={open}
            onClick={() => setOpen(false)}
            onContextMenu={(event) => {
              event.stopPropagation();
              event.preventDefault();
              setOpen(false);
            }}
            className={styles.backdrop}
            invisible
          />
          <Popper
            open={open}
            anchorEl={moreEl.current}
            disablePortal={false}
            placement="right"
            className={styles.popper}
            modifiers={popperModifiers}
            onClick={() => setOpen(false)}
          >
            <Button
              onClick={onClickLeaveServer(id)}
              className={styles.popperButton}
            >
              Leave Server
            </Button>
          </Popper>
        </>
      ) : null}
    </div>
  );
}

export default SidebarItem;
