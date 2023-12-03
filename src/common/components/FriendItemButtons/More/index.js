import styles from './index.module.css';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { blockFriend, deleteFriend } from '../../../../redux/friends/actions';
import { MoreIcon } from '../../icons';
import { Button } from '@mui/base';
import Tooltip from '../../Tooltip';
import Popper from '@mui/material/Popper';
import { Backdrop, Modal } from '@mui/material';
import ModalAlert from '../../ModalAlert';

export function More({ pageName, activeFriendItem }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const [open, setOpen] = useState(false);
  const moreEl = useRef(null);
  const [openModalRemove, setOpenModalRemove] = useState(false);
  const [modalType, setModalType] = useState('');
  const { _id: friendId, username: friendUsername } = activeFriendItem;

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
    dispatch(deleteFriend(navigate, cookies, friendId, pageName));
    handleClose();
  };

  const confirmBlockFriend = () => {
    dispatch(blockFriend(navigate, cookies, friendId, pageName));
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
        placement="right-start"
        className={styles.popper}
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
            friendName={friendUsername}
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
            friendName={friendUsername}
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
