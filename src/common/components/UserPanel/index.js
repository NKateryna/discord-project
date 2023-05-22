import styles from './index.module.css';
import { useState, forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../../redux/userInfo/selectors';
import Avatar from '../Avatar';
import Microphone from '../Microphone';
import Headphones from '../Headphones';
import { SettingsIcon } from '../icons';

import UserInfoModal from '../UserInfoModal';
import { Modal } from '@mui/base';
import PropTypes from 'prop-types';
import { Fade } from '@mui/material';
import { styled } from '@mui/system';

function UserPanel() {
  const [isHovered, setIsHovered] = useState(false);
  const statusIconPropsStyle = isHovered ? 'var(--gray-5)' : 'var(--gray-10)';

  const personalInfo = useSelector(getUserInfo);
  const { username, hash, status, microphone, headphones, avatar } =
    personalInfo;

  const [userInfoModalActive, setUserInfoModalActive] = useState(false);
  const onClickAccountInfo = () => {
    setUserInfoModalActive(!userInfoModalActive);
  };
  const closeUserInfoModal = () => setUserInfoModalActive(false);
  const Backdrop = forwardRef((props, ref) => {
    const { open, ...other } = props;
    return (
      <Fade in={open}>
        <div ref={ref} {...other} />
      </Fade>
    );
  });
  Backdrop.propTypes = {
    open: PropTypes.bool,
  };

  const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
  `;
  const StyledModal = styled(Modal)`
    position: absolute;
    top: -384px;
    left: -30px;
  `;

  const onClickSettings = () => {};

  return (
    <div className={styles.box}>
      <div
        className={styles.accountInfo}
        onClick={onClickAccountInfo}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.avatar}>
          <Avatar
            avatar={avatar}
            status={status}
            statusBcgColor={statusIconPropsStyle}
          />
        </div>
        <div className={styles.name}>{username}</div>
        <div className={styles.hash}>#{hash}</div>
      </div>
      <StyledModal
        open={userInfoModalActive}
        onClose={closeUserInfoModal}
        slots={{ backdrop: StyledBackdrop }}
        disablePortal={true}
        disableEnforceFocus
        closeAfterTransition
      >
        <UserInfoModal closeUserInfoModal={closeUserInfoModal} />
      </StyledModal>
      <div className={styles.settingsIcons}>
        <Microphone microphoneStatus={microphone} />
        <Headphones headphonesStatus={headphones} />
        <div onClick={onClickSettings} className={styles.icon}>
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default UserPanel;
