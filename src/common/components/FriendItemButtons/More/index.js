import styles from './index.module.css';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { getFriends } from '../../../../redux/friends/selectors';
import { blockFriend, deleteFriend } from '../../../../redux/friends/actions';
import classNames from 'classnames';
import { makeStyles } from '@mui/styles';
import { MoreIcon } from '../../icons';
import { Button } from '@mui/base';
import Tooltip from '../../Tooltip';
import Popper from '@mui/material/Popper';
import { Backdrop, Modal } from '@mui/material';
import ModalAlert from '../../ModalAlert';

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
  backdrop: { background: 'transparent', zIndex: 4 },
}));

export function More() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const moreEl = useRef(null);
  const [openModalRemove, setOpenModalRemove] = useState(false);
  const [modalType, setModalType] = useState('');
  const friendsData = useSelector(getFriends);
  const friendName = friendsData.activeItem.username;
  const friendId = friendsData.activeItem._id;

  const popperModifiers = {
    name: 'offset',
    options: {
      offset: [25, -10],
    },
  };
  const onClickMore = () => setOpen((prev) => !prev);

  const handleOpen = (modalName) => {
    return () => {
      setModalType(modalName);
      setOpenModalRemove(true);
    };
  };
  const handleClose = () => {
    setOpenModalRemove(false);
    setModalType('');
  };

  const confirmRemoveFriend = () => {
    dispatch(deleteFriend(navigate, cookies, friendId));
    handleClose();
  };

  const confirmBlockFriend = () => {
    dispatch(blockFriend(navigate, cookies, friendId));
    handleClose();
  };

  return (
    <>
      <div onClick={onClickMore} ref={moreEl} className={styles.background}>
        <Tooltip title="More" placement="top">
          <div className={styles.icon}>
            <MoreIcon />
          </div>
        </Tooltip>
      </div>
      <Backdrop open={open} onClick={() => setOpen(false)} invisible />
      <Popper
        open={open}
        anchorEl={moreEl.current}
        disablePortal={false}
        placement="right-start"
        className={classes.popper}
        modifiers={popperModifiers}
        onClick={() => setOpen(false)}
      >
        <Button
          onClick={null}
          className={classNames(styles.popperButton, styles.popperButtonBlue)}
        >
          Start Video call
        </Button>
        <Button
          onClick={null}
          className={classNames(styles.popperButton, styles.popperButtonBlue)}
        >
          Start Voice call
        </Button>
        <Button
          onClick={handleOpen('Remove Friend')}
          className={classNames(styles.popperButton, styles.popperButtonRed)}
        >
          Remove Friend
        </Button>
        <Button
          onClick={handleOpen('Block')}
          className={classNames(styles.popperButton, styles.popperButtonRed)}
        >
          Block
        </Button>
      </Popper>
      <Modal
        open={openModalRemove}
        onClose={handleClose}
        disablePortal={false}
        disableEnforceFocus
        closeAfterTransition
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
            },
          },
        }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {modalType === 'Remove Friend' ? (
          <ModalAlert
            titleFirstPart={`Remove '`}
            titleSecondPart={`'`}
            subtitleFirstPart={'Are you sure you want to permanently remove '}
            subtitleSecondPart={' from your friends?'}
            friendName={friendName}
            onClickCancel={handleClose}
            onClickConfirm={confirmRemoveFriend}
            confirmingButtonText={'Remove Friend'}
          />
        ) : (
          <ModalAlert
            titleFirstPart={'Block '}
            titleSecondPart={'?'}
            subtitleFirstPart={'Are you sure you want to block '}
            subtitleSecondPart={
              ' ? Blocking this user will also remove them from your friends list.'
            }
            friendName={friendName}
            onClickCancel={handleClose}
            onClickConfirm={confirmBlockFriend}
            confirmingButtonText={'Block'}
          />
        )}
      </Modal>
    </>
  );
}

export default More;
